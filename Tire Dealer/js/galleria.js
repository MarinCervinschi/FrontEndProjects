class Xpress {
  constructor(opt) {
    for (let o in opt) {
      this[o] = opt[o];
    }

    let app, tray, cell, img, tot, width, mouse = 0;
    let target, bounds, clone, full, move = 0;

    const setup = () => {
      let inview = this.view_number || 2;
      app = document.getElementById(this.app_id);
      tray = document.createElement('div');
      img = app.getElementsByTagName('img');
      tot = img.length;
      while (img.length > 0) {
        cell = document.createElement('div');
        cell.className = 'cell';
        cell.append(img[0]);
        tray.className= 'tray';
        tray.append(cell);
      }
      app.append(tray);
      tray.style.width = `${(100 / inview) * tot}%`;
    }

    const device = (e) => {
      return e.changedTouches ? e.changedTouches[0] : e;
    }

    const relative = (e) => {
      e.preventDefault();
      let fix = this.view_number === 1 ? 4.83 : this.view_number === 2 ? 1.9 :
      this.view_number === 3 ? 0.9 : this.view_number === 4 ? 0.44 : this.view_number === 5 ? 1.2: '';
      mouse = device(e).pageX * ((tray.clientWidth ) - resize()) / resize() - app.offsetLeft * fix;
    }

    const animate = () => {
      requestAnimationFrame(animate);
      if (this.scrollDamper < 1) this.scroll_damper = 1;
      move += (-mouse - move) / this.scroll_damper || 8;
      tray.style.transform = `translate(${move}px)`;
    }

    const addclone = (e) => {
      target = e.target;
      bounds = target.parentNode.getBoundingClientRect();
      if (target.tagName === 'IMG') {
        clone = target.parentNode.cloneNode(true);
        Object.assign(clone.style, {
          position: 'fixed',
          top: bounds.top + 'px',
          bottom: bounds.bottom + 'px',
          left: bounds.left + 'px',
          right: bounds.right + 'px',
          width: bounds.width + 'px',
          height: bounds.height + 'px',
          transition: `width, height, ${
            this.transit_speed || 200}ms ${this.transit_easing || 'linear'
          }`,
        });
        document.body.append(clone);
        setTimeout(() => {
          Object.assign(clone.style, {
            top: 0,
            left: 0,
            margin: 0,
            width: '100%',
            height: '100%',
          });
        }, 80);
        clone.addEventListener("click", evt => removeclone(evt));
      }
    }

    const removeclone = () => {
      Object.assign(clone.style, {
        position: 'fixed',
        top: bounds.top + 'px',
        bottom: bounds.bottom + 'px',
        left: bounds.left + 'px',
        right: bounds.right + 'px',
        width: bounds.width  + 'px',
        height: bounds.height + 'px',
      });
      setTimeout(() => {
        document.body.removeChild(clone);
      }, this.transit_speed || 200);
    }

    const resize = () => {
      return app.clientWidth;
    }

    (() => {
      setup();
      requestAnimationFrame(animate);
      window.addEventListener('resize', evt => resize(evt));
      app.addEventListener("mousemove", evt => relative(evt));
      app.addEventListener("touchmove", evt => relative(evt));
      tray.addEventListener("click", evt => addclone(evt));
    })();
  }
}
