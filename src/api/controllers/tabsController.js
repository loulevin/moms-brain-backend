import { handleError } from "../utils/tools";
import { Tab } from "../schemas/tabsSchema";

export const addSingleTab = async (req, res) => {
  try {
    const singleTab = await Tab.create(req.body);
    res.status(201).json(singleTab);
  } catch (e) {
    handleError(res, e);
  }
};

export const getSingleTab = async (req, res) => {
    try{
        const singleTab = await Tab.findById(req.params.id);
        res.status(200).json(singleTab);
    } catch (e) {
        handleError(res, e)
    }
}
