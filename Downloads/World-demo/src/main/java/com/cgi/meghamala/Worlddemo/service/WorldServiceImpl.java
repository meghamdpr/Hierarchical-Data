package com.cgi.meghamala.Worlddemo.service;

import com.cgi.meghamala.Worlddemo.model.WorldModel;
import com.cgi.meghamala.Worlddemo.repository.WorldRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WorldServiceImpl implements WorldService{

  @Autowired
  private WorldRepository worldRepository;

  public WorldServiceImpl(WorldRepository worldRepository) {
    this.worldRepository = worldRepository;
  }

  @Override
  public WorldModel post_world(WorldModel worldModel) {
    return worldRepository.save(worldModel);
  }

  @Override
  public ArrayList<String> get_children(String place) {

    WorldModel worldModel=worldRepository.findByPlace(place);
    return worldModel.getChildren();
  }


  @Override
  public void post_continent(WorldModel worldModel,String parent) {

    WorldModel worldModel1=worldRepository.findByPlace(parent);
    if(worldModel1!=null){
//      worldModel1.setChildren(new String[]{worldModel.getPlace()});
//      post_update_world(worldModel1,worldModel.getPlace());
      worldRepository.save(worldModel);
    }
  }

  @Override
  public List<WorldModel> get_world() {
    return worldRepository.findAll();
  }

  @Override
  public WorldModel change_world(String parent) {
    return worldRepository.findByPlace(parent);
  }

  @Override
  public void post_update_world(WorldModel worldModel, String children) {
    ArrayList<String> children2=worldModel.getChildren();
    children2.add(children);
    worldModel.setChildren(children2);
    worldRepository.save(worldModel);
  }

  @Override
  public WorldModel get_data(String place) {
    return worldRepository.findByPlace(place);
  }

  @Override
  public WorldModel update_the_post_data(WorldModel worldModel, String place) {
    WorldModel worldModel1=worldRepository.findByPlace(place);
    worldModel1.setPlace(worldModel.getPlace());
    worldModel1.setParent(worldModel.getParent());
    return worldRepository.save(worldModel);
  }

  @Override
  public void delete_data(String place) {

    worldRepository.deleteByPlace(place);
  }

  @Override
  public void get_parent(String parent,String place) {
    WorldModel worldModel=worldRepository.findByPlace(parent);
    ArrayList<String> children=worldModel.getChildren();
    children.remove(place);
    worldModel.setChildren(children);
    worldRepository.save(worldModel);
  }

//  @Override
//  public void delete(ArrayList<String> children) {
//    for(int i=0;i!=children.size();i++) {
//      WorldModel worldModel = worldRepository.findByPlace(children.get(i));
//
//    }
//  }

}
