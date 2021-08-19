import React, { Component } from "react";
import "./ProductDetail.scss";

export default class ProductDetail extends Component {
    render() {
        return (
            <div className="detail">
                <img
                    className="detail-main-img"
                    alt="메인 이미지"
                    src="https://ifh.cc/g/EI2qqc.jpg"
                />
                <h3>넉넉하게 즐기는 간장 찜닭</h3>
                <h1>[하림]궁중식 찜닭 밀키트</h1>
                <div className="line" />
                <p>
                    부드럽고 촉촉한 닭고기에 짭조름한 간장 양념이 더해진 일품요리, 바로 푸짐하고 다채로운 궁중식 찜닭이에요.
                    재료 준비와 손질이 귀찮은분들을 위해 누구나 간편히 조리할 수 있는 밀키트를 선보입니다.
                    실하고 신선한 친환경 닭고기글 부위별로 깨끗이 손질해 담아냈어요.
                    다양한 국내산 채소들도 손질하여 개별 포장했기에 더욱 위생적으로 느껴지지요. 담백한 고기와, 아삭한 채소, 쫄깃한 당면을
                    동시에 맛볼 수 있답니다. 넉넉하고 편리한 찜닭 요리로 근사한 한 상을 준비해 보세요.
                </p>

                <div className="kurly-check-point">
                    <div className="line-left" />
                    <h3>Kurly's Check Point</h3>
                    <div className="line-right" />
                </div>

                <div className="check-point-img">
                    <img
                        src="https://ifh.cc/g/gSP4y0.jpg"
                        alt="Kurly's Check Point"
                    />
                </div>

                <div className="kurly-pick">
                    <div className="line-left" />
                    <h3>Kurly's Pick</h3>
                    <div className="line-right" />
                </div>

                {/* <div className = "pick-img">
                        <img src = "https://img-cf.kurly.com/shop/data/goodsview/20190730/gv40000057640_1.jpg" alt = "Kurly's Pick" />
                    </div> */}

                <div className="txt">
                    <div className="txtTitle">[하림]궁중식 찜닭 밀키트</div>
                    <div className="txtContents">
                        <b>・ 구성</b>
                        <span> : 1.손질된 닭고기(750g) 2.양파(140g),감자(100g),당근(35g),대파(30g) 3.당면(65g) 4.찜닭 소스(125g)</span>
                        <br />
                        <b>・ 특징</b>
                        <span>
                            : 부위별로 손질한 닭고기,다양한 채소,당면을 개별 포장한 간편 밀키트예요. 찜닭용 소스도 동봉되어 있어, 별도의 준비가 필요 없답니다.
                        </span>
                        <br />
                        <b>・ 테이스팅 노드</b>
                        <span>
                            : 닭고기가 실하고,살이 뻑뻑하지 않아요.짭짤한 양념이 고기와 채소에 배어 감칠맛이 전해집니다.
                            아이들도 무난하게 즐길 수 있어요.
                        </span>
                        <br />
                        <b>・ 보관법</b>
                        <span>
                            : 2~5°C에서 냉장 보관하세요. 가급적 빠른 시일 내에 조리하는 것이 좋습니다.
                        </span>
                    </div>
                </div>

                {/* <div className="kurly-tip">
          <h3>Kurly's Tip</h3>
          <div className="contents">
            <div className="check">구입 전 확인하세요</div>
            <div className="content">
              ・ 선물세트를 넣을 수 있는 전용 쇼핑백을 함께 보내드립니다.
            </div>
          </div>
        </div> */}
            </div>
        );
    }
}
