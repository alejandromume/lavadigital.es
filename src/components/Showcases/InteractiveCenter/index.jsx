import React from 'react';
import Link from 'next/link';
//= Data
import data from '@/data/Showcases/interactive-center.json';

function InteractiveCenter() {
  function handleMouseEnter(event) {
    var tab_id = event.currentTarget.getAttribute('data-tab');

    document.querySelectorAll('.links-text li').forEach(el => {
      el.classList.remove('current');
      el.classList.add('no-active');
    });
    event.currentTarget.classList.add('current');
    event.currentTarget.classList.remove('no-active')

    document.querySelectorAll('.links-img .img').forEach(el => el.classList.remove('current'));
    document.querySelector("#" + tab_id).classList.add('current');

    if (event.currentTarget.classList.contains('current')) return false;
  }

  function handleMouseLeave() {
    document.querySelectorAll('.links-text li').forEach(el => el.classList.remove('current'));
    document.querySelectorAll('.links-img .img').forEach(el => el.classList.remove('current'));
    document.querySelectorAll('.links-text li').forEach(el => el.classList.remove('no-active'));
  }

  return (
    <section className="inter-links-center section-padding">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="links-text d-flex justify-content-center">
              <ul className="rest">
                {
                  data.map(item => (
                    <li data-tab={`tab-${item.id}`} key={item.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <h2>
                        <span className="num">{item.number}.</span>
                        <Link href="/dark/project-details1"><span className="tag sub-title">{item.type}</span> <span className="text">{item.title}</span></Link>
                      </h2>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="links-img">
        {
          data.map(item => (
            <div className="img" id={`tab-${item.id}`} key={item.id}>
              <img src={item.image} alt="" />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default InteractiveCenter