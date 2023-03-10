import { Request, Response } from 'express';
import * as skillService from '../services/skillService.js';
import * as personageService from '../services/personageService.js';
import { TSkillNoPersonageId } from '../utils/skillUtils.js';

export async function insertPointsSkill(req: Request, res: Response) {
  const personageId: string = req.params.personageId;
  const skill: TSkillNoPersonageId = req.body;

  await personageService.checkPersonageId(Number(personageId));
  await skillService.checkSkillByPersonageId(personageId);
  await skillService.insertSkill(skill, personageId);

  res.sendStatus(201);
}

export async function updateSkill(req: Request, res: Response) {
  const id: string = req.params.id;
  const skill: TSkillNoPersonageId = req.body;

  await skillService.checkSkillById(id);
  await skillService.updateSkill(skill, id);

  res.sendStatus(201);
}
