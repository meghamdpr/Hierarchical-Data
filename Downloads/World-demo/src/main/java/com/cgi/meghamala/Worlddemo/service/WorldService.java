package com.cgi.meghamala.Worlddemo.service;

import com.cgi.meghamala.Worlddemo.model.WorldModel;

import java.util.ArrayList;
import java.util.List;

public interface WorldService {

  WorldModel post_world(WorldModel worldModel);
  ArrayList<String> get_children(String place);
  void post_continent(WorldModel worldModel,String parent);
  List<WorldModel> get_world();
  WorldModel change_world(String parent);
  void post_update_world(WorldModel worldModel, String children);
  WorldModel get_data(String place);
  WorldModel update_the_post_data(WorldModel worldModel,String place);
  void delete_data(String place);
  void get_parent(String parent,String place);
//  void delete(ArrayList<String> children);
}
