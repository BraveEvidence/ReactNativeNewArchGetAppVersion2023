//
//  CheckVersion.swift
//  rnappversion
//
//  Created by  on 25/02/23.
//

import Foundation

@objcMembers class CheckVersion: NSObject {
  
  func getAppVersion() -> String{
    if let appVersion = Bundle.main.infoDictionary?["CFBundleShortVersionString"] as? String {
      return appVersion
    } else {
      return ""
    }
  }
  
}











































