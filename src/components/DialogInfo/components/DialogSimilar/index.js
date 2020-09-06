import React from 'react';

/* Dialog about style */
import { Sugestion, List, ListCard, SectionDivider } from './styles';

//importing icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const DialogSimilar = () => (
    <>
        <Sugestion>
            <p className="sugestion-title">Títulos semelhantes</p>
            <List>
                <ListCard>
                    <img className="list-card-image" src="https://via.placeholder.com/350x150"></img>
                    <div className="list-card-info">
                    <span className="card-info-rate">90% relevante</span>
                    <div className="card-info-year">2020</div>
                    </div>
                    <p className="list-card-description">Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.</p>
                </ListCard>
                <ListCard>
                    <img className="list-card-image" src="https://via.placeholder.com/350x150"></img>
                    <div className="list-card-info">
                    <span className="card-info-rate">90% relevante</span>
                    <div className="card-info-year">2020</div>
                    </div>
                    <p className="list-card-description">Uja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.</p>
                </ListCard>
                <ListCard>
                    <img className="list-card-image" src="https://via.placeholder.com/350x150"></img>
                    <div className="list-card-info">
                    <span className="card-info-rate">90% relevante</span>
                    <div className="card-info-year">2020</div>
                    </div>
                    <p className="list-card-description">Um homem deprimido que sofre de vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.</p>
                </ListCard>
                <ListCard>
                    <img className="list-card-image" src="https://via.placeholder.com/350x150"></img>
                    <div className="list-card-info">
                    <span className="card-info-rate">90% relevante</span>
                    <div className="card-info-year">2020</div>
                    </div>
                    <p className="list-card-description">Um homem  que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.</p>
                </ListCard>
                <ListCard>
                    <img className="list-card-image" src="https://via.placeholder.com/350x150"></img>
                    <div className="list-card-info">
                    <span className="card-info-rate">90% relevante</span>
                    <div className="card-info-year">2020</div>
                    </div>
                    <p className="list-card-description"> homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.</p>
                </ListCard>
                <ListCard>
                    <img className="list-card-image" src="https://via.placeholder.com/350x150"></img>
                    <div className="list-card-info">
                    <span className="card-info-rate">90% relevante</span>
                    <div className="card-info-year">2020</div>
                    </div>
                    <p className="list-card-description">Um homemendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.</p>
                </ListCard>
                <ListCard>
                    <img className="list-card-image" src="https://via.placeholder.com/350x150"></img>
                    <div className="list-card-info">
                    <span className="card-info-rate">90% relevante</span>
                    <div className="card-info-year">2020</div>
                    </div>
                    <p className="list-card-description">Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.</p>
                </ListCard>
            </List>
        </Sugestion>
        <SectionDivider>
            <button className="arrow-button"><ExpandLessIcon fontSize="large"/></button>
        </SectionDivider>
    </>
);

export default DialogSimilar;