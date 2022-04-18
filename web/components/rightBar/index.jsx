import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function RightBar() {
    return (
        <div className="col-auto px-0">
            <div id="sidebar" class="collapse collapse-horizontal show border-end">
                <div id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100">
                    <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-alarm"></i> <span>Inicio</span> </a>
                    <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-house"></i> <span>Categorias</span> </a>
                    <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-house"></i> <span>Escuela virtual</span> </a>
                    <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-house"></i> <span>Crear publicación</span> </a>
                    <div>
                        <Calendar onChange={onChange} value={value} />
                    </div>            
                </div>        
            </div>
        </div>
    );
}