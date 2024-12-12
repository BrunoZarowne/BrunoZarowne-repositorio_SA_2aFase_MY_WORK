import React, { useState } from 'react';
import './DonationModal.css'; // Importa o CSS para estilização
import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';

const DonationModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
   
    return (
        <div>
            {/* Botão para abrir o modal */}
            <button className="openModalButton" onClick={() =>setModalDoacoes(true)}>
                Fazer Doação
            </button>

            {/* Modal */}
            {modalDoaçoes && (
                <div className="backdrop" onClick={() =>setModalDoacoes(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h2>Faça uma Doação</h2>
                        <p>A sua contribuição ajuda a manter nosso projeto em funcionamento!</p>
                        <input
                            type="number"
                            className="donationInput"
                            placeholder="Digite o valor da doação"
                        />
                        <button className="donateButton">Doar</button>
                        <button
                            className="closeModalButton"
                            onClick={() => setModalDoacoes(false)}
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DonationModal;
