import React, { useState, useEffect } from "react";
import { IUsers } from "../Models/IUsers";

export default interface IState {
  people: {
    id: number;
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
