import Image from 'next/image';
import React from 'react'
import { AssetsImages } from '@/utils/index';
import { OrderProductListSectionStyle, SectionTitleStyle, TitleStyle } from '@/styledcomponents/index';
import { Scrollbars } from 'react-custom-scrollbars';

export function OrderProductListSection() {
  return (
    <OrderProductListSectionStyle>
      <SectionTitleStyle>Products List</SectionTitleStyle>
      <Scrollbars className='scrollBar' universal={true} style={{ width: 420, height: 300 }}>
        <ul>
          <li>
            <div><Image src={AssetsImages.protexProduct} alt="protexProduct" /></div>
            <div>
              <h2>Anti bacterial sanitizor</h2>
              <h3>$20</h3>
            </div>
            <h4>x1</h4>
          </li>
          <li>
            <div><Image src={AssetsImages.protexProduct} alt="protexProduct" /></div>
            <div>
              <h2>Anti bacterial sanitizor</h2>
              <h3>$20</h3>
            </div>
            <h4>x1</h4>
          </li>
          <li>
            <div><Image src={AssetsImages.protexProduct} alt="protexProduct" /></div>
            <div>
              <h2>Anti bacterial sanitizor</h2>
              <h3>$20</h3>
            </div>
            <h4>x1</h4>
          </li>
          <li>
            <div><Image src={AssetsImages.protexProduct} alt="protexProduct" /></div>
            <div>
              <h2>Anti bacterial sanitizor</h2>
              <h3>$20</h3>
            </div>
            <h4>x1</h4>
          </li>
          <li>
            <div><Image src={AssetsImages.protexProduct} alt="protexProduct" /></div>
            <div>
              <h2>Anti bacterial sanitizor</h2>
              <h3>$20</h3>
            </div>
            <h4>x1</h4>
          </li>
          <li>
            <div><Image src={AssetsImages.protexProduct} alt="protexProduct" /></div>
            <div>
              <h2>Anti bacterial sanitizor</h2>
              <h3>$20</h3>
            </div>
            <h4>x1</h4>
          </li>
        </ul>
      </Scrollbars>
    </OrderProductListSectionStyle>
  )
}