import { describe, expect, it } from "vitest";

import  { obternerAccion } from "../src/Obterner.js";

describe("ObtenerAcciones", () => {
    // si todo es vacio
    it("Debe retornar vacio", () => {
        const accion = obternerAccion("", false, false, "", "");
        expect(accion).toBe("");
    });
    it("Debe retornar si es obligatorio y es docente", () => {
        const accion = obternerAccion("si", true, false, "", "");
        expect(accion).toBe("Actualizar");
    });
    it("Debe retornar si no es obligatorio y es docente", () => {
        const accion = obternerAccion("no", true, false, "", "");
        expect(accion).toBe("Matricular");
    });
    it("Debe retornar si es externo y estado registro por confirmar", () => {
        const accion = obternerAccion("", false, true, "", "porConfirmar");
        expect(accion).toBe("Actualizar");
    });
    it("Debe retornar si es externo y destinatario externo", () => {
        const accion = obternerAccion("", false, true, "externo", "");
        expect(accion).toBe("Registrar");
    });
    it("Debe retornar si es externo y estado de registro vigente", () => {
        const accion = obternerAccion("", false, true, "", "Vigente");
        expect(accion).toBe("Matricular");
    });


});


