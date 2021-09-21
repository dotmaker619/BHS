import {httpService} from './httpService';

export const getProjects = () => {
  return httpService.get('api/projects');
}

export const getProjectFormats = () => {
   return httpService.get('api/work/formats');
}

export const setProjectStatus = ({ project_id, status }) => {
   return httpService.put('api/project/set-status', { project_id, status })
}

export const createProject = ({ client_id,
                                admin_id,
                                title, 
                                amount, 
                                delivery_date, 
                                ground_data, 
                                ground_data_output, 
                                simplified_drawing, 
                                simplified_drawing_output,
                                simplified_drawing_rank,
                                simplified_drawing_scale,
                                contour_data,
                                contour_data_output, 
                                longitudinal_data, 
                                longitudinal_data_output, 
                                simple_orthphoto, 
                                simple_orthphoto_output, 
                                mesh_soil_volume, 
                                mesh_soil_volume_output, 
                                simple_accuracy_table, 
                                simple_accuracy_table_output, 
                                public_accuracy_table, 
                                public_accuracy_table_output
                              }) => {
                              return httpService.post('api/client/project/create', {
                                client_id,
                                admin_id,  
                                title, 
                                amount, 
                                delivery_date, 
                                ground_data, 
                                ground_data_output, 
                                simplified_drawing, 
                                simplified_drawing_output,
                                simplified_drawing_rank,
                                simplified_drawing_scale,
                                contour_data,
                                contour_data_output, 
                                longitudinal_data, 
                                longitudinal_data_output, 
                                simple_orthphoto, 
                                simple_orthphoto_output, 
                                mesh_soil_volume, 
                                mesh_soil_volume_output, 
                                simple_accuracy_table, 
                                simple_accuracy_table_output, 
                                public_accuracy_table, 
                                public_accuracy_table_output
})
}
