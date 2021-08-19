import React, { Component } from "react";
import Count from "./Count";
import "./ProductInfo.scss";

export default class ProductInfo extends Component {
  render() {
    const {
      name,
      short_description,
      origin,
      price,
      point,
      unit_text,
      weight,
      delivery_time_type_text,
      number,
      expiration_date,
      guides,
      handleOnClickPlus,
      handleOnClickMinus
    } = this.props;

    return (
        <div className="product-info">
          <div className="product-title">
            <div className="title">
              <p>[하림]궁중식 찜닭 밀키트</p>
              <div className="share-icon"></div>
            </div>
            <span>넉넉하게 즐기는 간장 찜닭</span>
          </div>

          <div className="price-bar">
            <span className="price">{11700}</span>
            <span className="won">원</span>
          </div>

          <div className="accumulate">
            {/* <span className = "befor-login-point">로그인 후, 적립혜택이 제공됩니다.</span> */}
            <div className="after-login-point">
              <span className="save-point">일반 0.5%</span>
              <span className="each">개당</span>
              <span className="won-save">{point}원 적립</span>
            </div>
          </div>

          <div className="goods-info">
            <dl>
              <dt>판매단위</dt>
              <dd>{unit_text}</dd>
            </dl>
            <dl className="list">
              <dt>중량/용량</dt>
              <dd>
                <div>1245g</div>
              </dd>
            </dl>
            <dl className="list">
              <dt>배송구분</dt>
              <dd>{delivery_time_type_text}</dd>
            </dl>
            <dl className="list">
              <dt>포장타입</dt>
              <dd>
                <div>냉장/종이포장</div>
                <div className="delivery">
                  택배배송은 스티로폼이 에코포장으로 대체됩니다.
                </div>
              </dd>
            </dl>
            <dl className="list">
              <dt>알레르기 정보</dt>
              <dd>
                <div>-닭고기함유
                  -궁중찜닭 양념소스:대두,밀 함유</div>
              </dd>
            </dl>
            <dl className="list">
              <dt>유통기한</dt>
              <dd>
                <div>수령일 포함 최소 4일 이상 남은 제품을 보내드립니다.</div>
              </dd>
            </dl>
            <dl className="list">
              <dt>구매수량</dt>
              <dd>
                <Count
                    number={number}
                    handleOnClickPlus={handleOnClickPlus}
                    handleOnClickMinus={handleOnClickMinus}
                />
              </dd>
            </dl>
          </div>
        </div>
    );
  }
}
