import React, { useEffect } from 'react';
import Link from 'next/link';
//= Data
import data from '@/data/Startup/services.json';

function Services({ lightMode }) {
  useEffect(() => {
    if (window.innerWidth > 991) {
      let gallery = document.querySelector('.metro .items')
      let wrapper = document.querySelector('.metro')
      let moveVal = 0;
      let dragging = false, mouseLocation, galleryLocation;

      const easeOutQuad = t => {
        return t * (2 - t)
      }

      const moveGallery = () => {
        moveVal = easeOutQuad(window.scrollY * .003);
        gallery.style.transform = `translateX(${moveVal}%)`;

        requestAnimationFrame(moveGallery);
      }

      requestAnimationFrame(moveGallery);

      const dragStart = e => {
        dragging = true;
        mouseLocation = e.pageX;
        galleryLocation = wrapper.scrollLeft;
      }

      const dragActive = e => {
        if (!dragging) return;

        let offset = e.pageX - mouseLocation;
        wrapper.scrollLeft = galleryLocation - offset;
      }

      const dragStop = e => {
        dragging = false;
        mouseLocation = e.pageX;
        galleryLocation = wrapper.scrollLeft;
      }

      gallery.addEventListener('mousedown', dragStart);
      gallery.addEventListener('mousemove', dragActive);
      gallery.addEventListener('mouseup', dragStop);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    if (window.innerWidth < 991 && document.querySelector('.metro .items').style.transform) {
      location.reload();
    } else if (window.innerWidth > 991 && !document.querySelector('.metro .items').style.transform) {
      let gallery = document.querySelector('.metro .items')
      let wrapper = document.querySelector('.metro')
      let moveVal = 0;
      let dragging = false, mouseLocation, galleryLocation;

      const easeOutQuad = t => {
        return t * (2 - t)
      }

      const moveGallery = () => {
        moveVal = easeOutQuad(window.scrollY * .003);
        gallery.style.transform = `translateX(${moveVal}%)`;

        requestAnimationFrame(moveGallery);
      }

      requestAnimationFrame(moveGallery);

      const dragStart = e => {
        dragging = true;
        mouseLocation = e.pageX;
        galleryLocation = wrapper.scrollLeft;
      }

      const dragActive = e => {
        if (!dragging) return;

        let offset = e.pageX - mouseLocation;
        wrapper.scrollLeft = galleryLocation - offset;
      }

      const dragStop = e => {
        dragging = false;
        mouseLocation = e.pageX;
        galleryLocation = wrapper.scrollLeft;
      }

      gallery.addEventListener('mousedown', dragStart);
      gallery.addEventListener('mousemove', dragActive);
      gallery.addEventListener('mouseup', dragStop);

    }
  }

  return (
    <>
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-4">
            <h6><span className="fz-14">02 . </span> Services</h6>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="text">
              <h3>We create <span className="sub-font">experiences</span> and turn ideas into reality.</h3>
            </div>
            <div className="row mt-40">
              <div className="col-md-9 offset-md-2">
                <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor incididunt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="metro mt-80 ontop">
        <div className="items">
          {
            data.map((item, index) => (
              <div className="item" key={item.id}>
                <span className={`icon icon-img-80 ${index !== data.length - 1 ? 'mb-40' : ''}`}>
                  <img src={`/${lightMode ? 'light' : 'dark'}/${item.image}`} alt="" />
                </span>
                <h5 className="mb-20 fw-700">
                  <Link href="/dark/page-services">{item.title}</Link>
                </h5>
                <p>{item.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Services