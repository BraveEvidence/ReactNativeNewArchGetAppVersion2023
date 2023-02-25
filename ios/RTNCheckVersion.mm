//
//  RTNCheckVersion.m
//  rnappversion
//
//  Created by  on 25/02/23.
//

#import "RTNCheckVersion.h"
#import "rnappversion-Swift.h"

@implementation RTNCheckVersion

RCT_EXPORT_MODULE()

CheckVersion *checkVersion = [[CheckVersion alloc] init];

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeCheckVersionSpecJSI>(params);
}

- (NSString *)getAppVersion {
  return [checkVersion getAppVersion];
}

@end
