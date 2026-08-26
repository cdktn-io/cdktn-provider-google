/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentials,
chronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsToTerraform,
chronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsToHclTerraform,
ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsOutputReference,
ChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuth,
chronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthToTerraform,
chronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthToHclTerraform,
ChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthOutputReference,
ChronicleFeedDetailsAmazonKinesisFirehoseSettings,
chronicleFeedDetailsAmazonKinesisFirehoseSettingsToTerraform,
chronicleFeedDetailsAmazonKinesisFirehoseSettingsToHclTerraform,
ChronicleFeedDetailsAmazonKinesisFirehoseSettingsOutputReference,
ChronicleFeedDetailsAmazonS3Settings,
chronicleFeedDetailsAmazonS3SettingsToTerraform,
chronicleFeedDetailsAmazonS3SettingsToHclTerraform,
ChronicleFeedDetailsAmazonS3SettingsOutputReference,
ChronicleFeedDetailsAmazonS3V2Settings,
chronicleFeedDetailsAmazonS3V2SettingsToTerraform,
chronicleFeedDetailsAmazonS3V2SettingsToHclTerraform,
ChronicleFeedDetailsAmazonS3V2SettingsOutputReference,
ChronicleFeedDetailsAmazonSqsSettings,
chronicleFeedDetailsAmazonSqsSettingsToTerraform,
chronicleFeedDetailsAmazonSqsSettingsToHclTerraform,
ChronicleFeedDetailsAmazonSqsSettingsOutputReference,
ChronicleFeedDetailsAmazonSqsV2Settings,
chronicleFeedDetailsAmazonSqsV2SettingsToTerraform,
chronicleFeedDetailsAmazonSqsV2SettingsToHclTerraform,
ChronicleFeedDetailsAmazonSqsV2SettingsOutputReference,
ChronicleFeedDetailsAnomaliSettings,
chronicleFeedDetailsAnomaliSettingsToTerraform,
chronicleFeedDetailsAnomaliSettingsToHclTerraform,
ChronicleFeedDetailsAnomaliSettingsOutputReference,
ChronicleFeedDetailsAwsEc2HostsSettings,
chronicleFeedDetailsAwsEc2HostsSettingsToTerraform,
chronicleFeedDetailsAwsEc2HostsSettingsToHclTerraform,
ChronicleFeedDetailsAwsEc2HostsSettingsOutputReference,
ChronicleFeedDetailsAwsEc2InstancesSettings,
chronicleFeedDetailsAwsEc2InstancesSettingsToTerraform,
chronicleFeedDetailsAwsEc2InstancesSettingsToHclTerraform,
ChronicleFeedDetailsAwsEc2InstancesSettingsOutputReference,
ChronicleFeedDetailsAwsEc2VpcsSettings,
chronicleFeedDetailsAwsEc2VpcsSettingsToTerraform,
chronicleFeedDetailsAwsEc2VpcsSettingsToHclTerraform,
ChronicleFeedDetailsAwsEc2VpcsSettingsOutputReference,
ChronicleFeedDetailsAwsIamSettings,
chronicleFeedDetailsAwsIamSettingsToTerraform,
chronicleFeedDetailsAwsIamSettingsToHclTerraform,
ChronicleFeedDetailsAwsIamSettingsOutputReference,
ChronicleFeedDetailsAzureAdAuditSettings,
chronicleFeedDetailsAzureAdAuditSettingsToTerraform,
chronicleFeedDetailsAzureAdAuditSettingsToHclTerraform,
ChronicleFeedDetailsAzureAdAuditSettingsOutputReference,
ChronicleFeedDetailsAzureAdContextSettings,
chronicleFeedDetailsAzureAdContextSettingsToTerraform,
chronicleFeedDetailsAzureAdContextSettingsToHclTerraform,
ChronicleFeedDetailsAzureAdContextSettingsOutputReference,
ChronicleFeedDetailsAzureAdSettings,
chronicleFeedDetailsAzureAdSettingsToTerraform,
chronicleFeedDetailsAzureAdSettingsToHclTerraform,
ChronicleFeedDetailsAzureAdSettingsOutputReference,
ChronicleFeedDetailsAzureBlobStoreSettings,
chronicleFeedDetailsAzureBlobStoreSettingsToTerraform,
chronicleFeedDetailsAzureBlobStoreSettingsToHclTerraform,
ChronicleFeedDetailsAzureBlobStoreSettingsOutputReference,
ChronicleFeedDetailsAzureBlobStoreV2Settings,
chronicleFeedDetailsAzureBlobStoreV2SettingsToTerraform,
chronicleFeedDetailsAzureBlobStoreV2SettingsToHclTerraform,
ChronicleFeedDetailsAzureBlobStoreV2SettingsOutputReference,
ChronicleFeedDetailsAzureEventHubSettings,
chronicleFeedDetailsAzureEventHubSettingsToTerraform,
chronicleFeedDetailsAzureEventHubSettingsToHclTerraform,
ChronicleFeedDetailsAzureEventHubSettingsOutputReference,
ChronicleFeedDetailsAzureMdmIntuneSettings,
chronicleFeedDetailsAzureMdmIntuneSettingsToTerraform,
chronicleFeedDetailsAzureMdmIntuneSettingsToHclTerraform,
ChronicleFeedDetailsAzureMdmIntuneSettingsOutputReference,
ChronicleFeedDetailsCloudPassageSettings,
chronicleFeedDetailsCloudPassageSettingsToTerraform,
chronicleFeedDetailsCloudPassageSettingsToHclTerraform,
ChronicleFeedDetailsCloudPassageSettingsOutputReference,
ChronicleFeedDetailsCortexXdrSettings,
chronicleFeedDetailsCortexXdrSettingsToTerraform,
chronicleFeedDetailsCortexXdrSettingsToHclTerraform,
ChronicleFeedDetailsCortexXdrSettingsOutputReference,
ChronicleFeedDetailsCrowdstrikeAlertsSettings,
chronicleFeedDetailsCrowdstrikeAlertsSettingsToTerraform,
chronicleFeedDetailsCrowdstrikeAlertsSettingsToHclTerraform,
ChronicleFeedDetailsCrowdstrikeAlertsSettingsOutputReference,
ChronicleFeedDetailsCrowdstrikeDetectsSettings,
chronicleFeedDetailsCrowdstrikeDetectsSettingsToTerraform,
chronicleFeedDetailsCrowdstrikeDetectsSettingsToHclTerraform,
ChronicleFeedDetailsCrowdstrikeDetectsSettingsOutputReference,
ChronicleFeedDetailsDummyLogTypeSettings,
chronicleFeedDetailsDummyLogTypeSettingsToTerraform,
chronicleFeedDetailsDummyLogTypeSettingsToHclTerraform,
ChronicleFeedDetailsDummyLogTypeSettingsOutputReference,
ChronicleFeedDetailsDuoAuthSettings,
chronicleFeedDetailsDuoAuthSettingsToTerraform,
chronicleFeedDetailsDuoAuthSettingsToHclTerraform,
ChronicleFeedDetailsDuoAuthSettingsOutputReference,
ChronicleFeedDetailsDuoUserContextSettings,
chronicleFeedDetailsDuoUserContextSettingsToTerraform,
chronicleFeedDetailsDuoUserContextSettingsToHclTerraform,
ChronicleFeedDetailsDuoUserContextSettingsOutputReference,
ChronicleFeedDetailsFoxItStixSettings,
chronicleFeedDetailsFoxItStixSettingsToTerraform,
chronicleFeedDetailsFoxItStixSettingsToHclTerraform,
ChronicleFeedDetailsFoxItStixSettingsOutputReference,
ChronicleFeedDetailsGcsSettings,
chronicleFeedDetailsGcsSettingsToTerraform,
chronicleFeedDetailsGcsSettingsToHclTerraform,
ChronicleFeedDetailsGcsSettingsOutputReference,
ChronicleFeedDetailsGcsV2Settings,
chronicleFeedDetailsGcsV2SettingsToTerraform,
chronicleFeedDetailsGcsV2SettingsToHclTerraform,
ChronicleFeedDetailsGcsV2SettingsOutputReference,
ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettings,
chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsToTerraform,
chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsToHclTerraform,
ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsOutputReference,
ChronicleFeedDetailsGoogleCloudIdentityDevicesSettings,
chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsToTerraform,
chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsToHclTerraform,
ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsOutputReference,
ChronicleFeedDetailsGoogleCloudStorageEventDrivenSettings,
chronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsToTerraform,
chronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsToHclTerraform,
ChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsOutputReference,
ChronicleFeedDetailsHttpSettings,
chronicleFeedDetailsHttpSettingsToTerraform,
chronicleFeedDetailsHttpSettingsToHclTerraform,
ChronicleFeedDetailsHttpSettingsOutputReference,
ChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettings,
chronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsToTerraform,
chronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsToHclTerraform,
ChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsOutputReference,
ChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettings,
chronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsToTerraform,
chronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsToHclTerraform,
ChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsOutputReference,
ChronicleFeedDetailsHttpsPushWebhookSettings,
chronicleFeedDetailsHttpsPushWebhookSettingsToTerraform,
chronicleFeedDetailsHttpsPushWebhookSettingsToHclTerraform,
ChronicleFeedDetailsHttpsPushWebhookSettingsOutputReference,
ChronicleFeedDetailsImpervaWafSettings,
chronicleFeedDetailsImpervaWafSettingsToTerraform,
chronicleFeedDetailsImpervaWafSettingsToHclTerraform,
ChronicleFeedDetailsImpervaWafSettingsOutputReference,
ChronicleFeedDetailsMandiantIocSettings,
chronicleFeedDetailsMandiantIocSettingsToTerraform,
chronicleFeedDetailsMandiantIocSettingsToHclTerraform,
ChronicleFeedDetailsMandiantIocSettingsOutputReference,
ChronicleFeedDetailsMicrosoftGraphAlertSettings,
chronicleFeedDetailsMicrosoftGraphAlertSettingsToTerraform,
chronicleFeedDetailsMicrosoftGraphAlertSettingsToHclTerraform,
ChronicleFeedDetailsMicrosoftGraphAlertSettingsOutputReference,
ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettings,
chronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsToTerraform,
chronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsToHclTerraform,
ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsOutputReference,
ChronicleFeedDetailsMimecastMailSettings,
chronicleFeedDetailsMimecastMailSettingsToTerraform,
chronicleFeedDetailsMimecastMailSettingsToHclTerraform,
ChronicleFeedDetailsMimecastMailSettingsOutputReference,
ChronicleFeedDetailsMimecastMailV2Settings,
chronicleFeedDetailsMimecastMailV2SettingsToTerraform,
chronicleFeedDetailsMimecastMailV2SettingsToHclTerraform,
ChronicleFeedDetailsMimecastMailV2SettingsOutputReference,
ChronicleFeedDetailsNetskopeAlertSettings,
chronicleFeedDetailsNetskopeAlertSettingsToTerraform,
chronicleFeedDetailsNetskopeAlertSettingsToHclTerraform,
ChronicleFeedDetailsNetskopeAlertSettingsOutputReference,
ChronicleFeedDetailsNetskopeAlertV2Settings,
chronicleFeedDetailsNetskopeAlertV2SettingsToTerraform,
chronicleFeedDetailsNetskopeAlertV2SettingsToHclTerraform,
ChronicleFeedDetailsNetskopeAlertV2SettingsOutputReference,
ChronicleFeedDetailsOffice365Settings,
chronicleFeedDetailsOffice365SettingsToTerraform,
chronicleFeedDetailsOffice365SettingsToHclTerraform,
ChronicleFeedDetailsOffice365SettingsOutputReference,
ChronicleFeedDetailsOktaSettings,
chronicleFeedDetailsOktaSettingsToTerraform,
chronicleFeedDetailsOktaSettingsToHclTerraform,
ChronicleFeedDetailsOktaSettingsOutputReference,
ChronicleFeedDetailsOktaUserContextSettings,
chronicleFeedDetailsOktaUserContextSettingsToTerraform,
chronicleFeedDetailsOktaUserContextSettingsToHclTerraform,
ChronicleFeedDetailsOktaUserContextSettingsOutputReference,
ChronicleFeedDetailsPanIocSettings,
chronicleFeedDetailsPanIocSettingsToTerraform,
chronicleFeedDetailsPanIocSettingsToHclTerraform,
ChronicleFeedDetailsPanIocSettingsOutputReference,
ChronicleFeedDetailsPanPrismaCloudSettings,
chronicleFeedDetailsPanPrismaCloudSettingsToTerraform,
chronicleFeedDetailsPanPrismaCloudSettingsToHclTerraform,
ChronicleFeedDetailsPanPrismaCloudSettingsOutputReference,
ChronicleFeedDetailsProofpointMailSettings,
chronicleFeedDetailsProofpointMailSettingsToTerraform,
chronicleFeedDetailsProofpointMailSettingsToHclTerraform,
ChronicleFeedDetailsProofpointMailSettingsOutputReference,
ChronicleFeedDetailsProofpointOnDemandSettings,
chronicleFeedDetailsProofpointOnDemandSettingsToTerraform,
chronicleFeedDetailsProofpointOnDemandSettingsToHclTerraform,
ChronicleFeedDetailsProofpointOnDemandSettingsOutputReference,
ChronicleFeedDetailsPubsubSettings,
chronicleFeedDetailsPubsubSettingsToTerraform,
chronicleFeedDetailsPubsubSettingsToHclTerraform,
ChronicleFeedDetailsPubsubSettingsOutputReference,
ChronicleFeedDetailsQualysScanSettings,
chronicleFeedDetailsQualysScanSettingsToTerraform,
chronicleFeedDetailsQualysScanSettingsToHclTerraform,
ChronicleFeedDetailsQualysScanSettingsOutputReference,
ChronicleFeedDetailsQualysVmSettings,
chronicleFeedDetailsQualysVmSettingsToTerraform,
chronicleFeedDetailsQualysVmSettingsToHclTerraform,
ChronicleFeedDetailsQualysVmSettingsOutputReference,
ChronicleFeedDetailsRapid7InsightSettings,
chronicleFeedDetailsRapid7InsightSettingsToTerraform,
chronicleFeedDetailsRapid7InsightSettingsToHclTerraform,
ChronicleFeedDetailsRapid7InsightSettingsOutputReference,
ChronicleFeedDetailsRecordedFutureIocSettings,
chronicleFeedDetailsRecordedFutureIocSettingsToTerraform,
chronicleFeedDetailsRecordedFutureIocSettingsToHclTerraform,
ChronicleFeedDetailsRecordedFutureIocSettingsOutputReference,
ChronicleFeedDetailsRhIsacIocSettings,
chronicleFeedDetailsRhIsacIocSettingsToTerraform,
chronicleFeedDetailsRhIsacIocSettingsToHclTerraform,
ChronicleFeedDetailsRhIsacIocSettingsOutputReference } from './structs0';
export interface ChronicleFeedDetailsSalesforceSettings {
  /**
  * API hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * oauth_jwt_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#oauth_jwt_credentials ChronicleFeed#oauth_jwt_credentials}
  */
  readonly oauthJwtCredentials?: ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentials;
  /**
  * oauth_password_grant_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#oauth_password_grant_auth ChronicleFeed#oauth_password_grant_auth}
  */
  readonly oauthPasswordGrantAuth?: ChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuth;
}

export function chronicleFeedDetailsSalesforceSettingsToTerraform(struct?: ChronicleFeedDetailsSalesforceSettingsOutputReference | ChronicleFeedDetailsSalesforceSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    oauth_jwt_credentials: chronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsToTerraform(struct!.oauthJwtCredentials),
    oauth_password_grant_auth: chronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthToTerraform(struct!.oauthPasswordGrantAuth),
  }
}


export function chronicleFeedDetailsSalesforceSettingsToHclTerraform(struct?: ChronicleFeedDetailsSalesforceSettingsOutputReference | ChronicleFeedDetailsSalesforceSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_jwt_credentials: {
      value: chronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsToHclTerraform(struct!.oauthJwtCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsList",
    },
    oauth_password_grant_auth: {
      value: chronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthToHclTerraform(struct!.oauthPasswordGrantAuth),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsSalesforceSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsSalesforceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._oauthJwtCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthJwtCredentials = this._oauthJwtCredentials?.internalValue;
    }
    if (this._oauthPasswordGrantAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthPasswordGrantAuth = this._oauthPasswordGrantAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsSalesforceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._oauthJwtCredentials.internalValue = undefined;
      this._oauthPasswordGrantAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._oauthJwtCredentials.internalValue = value.oauthJwtCredentials;
      this._oauthPasswordGrantAuth.internalValue = value.oauthPasswordGrantAuth;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // oauth_jwt_credentials - computed: false, optional: true, required: false
  private _oauthJwtCredentials = new ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsOutputReference(this, "oauth_jwt_credentials");
  public get oauthJwtCredentials() {
    return this._oauthJwtCredentials;
  }
  public putOauthJwtCredentials(value: ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentials) {
    this._oauthJwtCredentials.internalValue = value;
  }
  public resetOauthJwtCredentials() {
    this._oauthJwtCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthJwtCredentialsInput() {
    return this._oauthJwtCredentials.internalValue;
  }

  // oauth_password_grant_auth - computed: false, optional: true, required: false
  private _oauthPasswordGrantAuth = new ChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthOutputReference(this, "oauth_password_grant_auth");
  public get oauthPasswordGrantAuth() {
    return this._oauthPasswordGrantAuth;
  }
  public putOauthPasswordGrantAuth(value: ChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuth) {
    this._oauthPasswordGrantAuth.internalValue = value;
  }
  public resetOauthPasswordGrantAuth() {
    this._oauthPasswordGrantAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthPasswordGrantAuthInput() {
    return this._oauthPasswordGrantAuth.internalValue;
  }
}
export interface ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#key ChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#value ChronicleFeed#value}
  */
  readonly value?: string;
}

export function chronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleFeedDetailsSentineloneAlertSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#header_key_values ChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable;
}

export function chronicleFeedDetailsSentineloneAlertSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationOutputReference | ChronicleFeedDetailsSentineloneAlertSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_key_values: cdktn.listMapper(chronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function chronicleFeedDetailsSentineloneAlertSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationOutputReference | ChronicleFeedDetailsSentineloneAlertSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_key_values: {
      value: cdktn.listMapperHcl(chronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsSentineloneAlertSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsSentineloneAlertSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface ChronicleFeedDetailsSentineloneAlertSettings {
  /**
  * Hostname of SentinelOne alert settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * initialStartTime from when to fetch the alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#initial_start_time ChronicleFeed#initial_start_time}
  */
  readonly initialStartTime?: string;
  /**
  * Is the customer subscribed to Alerts Api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#is_alert_api_subscribed ChronicleFeed#is_alert_api_subscribed}
  */
  readonly isAlertApiSubscribed?: boolean | cdktn.IResolvable;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsSentineloneAlertSettingsAuthentication;
}

export function chronicleFeedDetailsSentineloneAlertSettingsToTerraform(struct?: ChronicleFeedDetailsSentineloneAlertSettingsOutputReference | ChronicleFeedDetailsSentineloneAlertSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    initial_start_time: cdktn.stringToTerraform(struct!.initialStartTime),
    is_alert_api_subscribed: cdktn.booleanToTerraform(struct!.isAlertApiSubscribed),
    authentication: chronicleFeedDetailsSentineloneAlertSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsSentineloneAlertSettingsToHclTerraform(struct?: ChronicleFeedDetailsSentineloneAlertSettingsOutputReference | ChronicleFeedDetailsSentineloneAlertSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_start_time: {
      value: cdktn.stringToHclTerraform(struct!.initialStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_alert_api_subscribed: {
      value: cdktn.booleanToHclTerraform(struct!.isAlertApiSubscribed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authentication: {
      value: chronicleFeedDetailsSentineloneAlertSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsSentineloneAlertSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsSentineloneAlertSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._initialStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialStartTime = this._initialStartTime;
    }
    if (this._isAlertApiSubscribed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAlertApiSubscribed = this._isAlertApiSubscribed;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsSentineloneAlertSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._initialStartTime = undefined;
      this._isAlertApiSubscribed = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._initialStartTime = value.initialStartTime;
      this._isAlertApiSubscribed = value.isAlertApiSubscribed;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // initial_start_time - computed: false, optional: true, required: false
  private _initialStartTime?: string; 
  public get initialStartTime() {
    return this.getStringAttribute('initial_start_time');
  }
  public set initialStartTime(value: string) {
    this._initialStartTime = value;
  }
  public resetInitialStartTime() {
    this._initialStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialStartTimeInput() {
    return this._initialStartTime;
  }

  // is_alert_api_subscribed - computed: false, optional: true, required: false
  private _isAlertApiSubscribed?: boolean | cdktn.IResolvable; 
  public get isAlertApiSubscribed() {
    return this.getBooleanAttribute('is_alert_api_subscribed');
  }
  public set isAlertApiSubscribed(value: boolean | cdktn.IResolvable) {
    this._isAlertApiSubscribed = value;
  }
  public resetIsAlertApiSubscribed() {
    this._isAlertApiSubscribed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAlertApiSubscribedInput() {
    return this._isAlertApiSubscribed;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsSentineloneAlertSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsSentineloneAlertSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsServiceNowCmdbSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#secret ChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsServiceNowCmdbSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsServiceNowCmdbSettingsAuthenticationOutputReference | ChronicleFeedDetailsServiceNowCmdbSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsServiceNowCmdbSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsServiceNowCmdbSettingsAuthenticationOutputReference | ChronicleFeedDetailsServiceNowCmdbSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsServiceNowCmdbSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsServiceNowCmdbSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsServiceNowCmdbSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsServiceNowCmdbSettings {
  /**
  * Feedname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#feedname ChronicleFeed#feedname}
  */
  readonly feedname?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsServiceNowCmdbSettingsAuthentication;
}

export function chronicleFeedDetailsServiceNowCmdbSettingsToTerraform(struct?: ChronicleFeedDetailsServiceNowCmdbSettingsOutputReference | ChronicleFeedDetailsServiceNowCmdbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    feedname: cdktn.stringToTerraform(struct!.feedname),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    authentication: chronicleFeedDetailsServiceNowCmdbSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsServiceNowCmdbSettingsToHclTerraform(struct?: ChronicleFeedDetailsServiceNowCmdbSettingsOutputReference | ChronicleFeedDetailsServiceNowCmdbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    feedname: {
      value: cdktn.stringToHclTerraform(struct!.feedname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsServiceNowCmdbSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsServiceNowCmdbSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsServiceNowCmdbSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsServiceNowCmdbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feedname !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedname = this._feedname;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsServiceNowCmdbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._feedname = undefined;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._feedname = value.feedname;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // feedname - computed: false, optional: true, required: false
  private _feedname?: string; 
  public get feedname() {
    return this.getStringAttribute('feedname');
  }
  public set feedname(value: string) {
    this._feedname = value;
  }
  public resetFeedname() {
    this._feedname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feednameInput() {
    return this._feedname;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsServiceNowCmdbSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsServiceNowCmdbSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsSftpSettingsAuthentication {
  /**
  * Password. Used for username and password authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#password ChronicleFeed#password}
  */
  readonly password?: string;
  /**
  * Private key. Used for private key authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#private_key ChronicleFeed#private_key}
  */
  readonly privateKey?: string;
  /**
  * Private key passphrase. Used for private key authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#private_key_passphrase ChronicleFeed#private_key_passphrase}
  */
  readonly privateKeyPassphrase?: string;
  /**
  * Username. Used for username and password authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#username ChronicleFeed#username}
  */
  readonly username?: string;
}

export function chronicleFeedDetailsSftpSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsSftpSettingsAuthenticationOutputReference | ChronicleFeedDetailsSftpSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    private_key: cdktn.stringToTerraform(struct!.privateKey),
    private_key_passphrase: cdktn.stringToTerraform(struct!.privateKeyPassphrase),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function chronicleFeedDetailsSftpSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsSftpSettingsAuthenticationOutputReference | ChronicleFeedDetailsSftpSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_passphrase: {
      value: cdktn.stringToHclTerraform(struct!.privateKeyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsSftpSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsSftpSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPassphrase = this._privateKeyPassphrase;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsSftpSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._privateKey = undefined;
      this._privateKeyPassphrase = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._privateKey = value.privateKey;
      this._privateKeyPassphrase = value.privateKeyPassphrase;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_passphrase - computed: false, optional: true, required: false
  private _privateKeyPassphrase?: string; 
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }
  public set privateKeyPassphrase(value: string) {
    this._privateKeyPassphrase = value;
  }
  public resetPrivateKeyPassphrase() {
    this._privateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseInput() {
    return this._privateKeyPassphrase;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ChronicleFeedDetailsSftpSettings {
  /**
  * Possible values:
  * SOURCE_DELETION_NEVER
  * SOURCE_DELETION_ON_SUCCESS
  * SOURCE_DELETION_ON_SUCCESS_FILES_ONLY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#source_deletion_option ChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
  /**
  * Possible values:
  * FILES
  * FOLDERS
  * FOLDERS_RECURSIVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#source_type ChronicleFeed#source_type}
  */
  readonly sourceType?: string;
  /**
  * SFTP URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#uri ChronicleFeed#uri}
  */
  readonly uri?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsSftpSettingsAuthentication;
}

export function chronicleFeedDetailsSftpSettingsToTerraform(struct?: ChronicleFeedDetailsSftpSettingsOutputReference | ChronicleFeedDetailsSftpSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_deletion_option: cdktn.stringToTerraform(struct!.sourceDeletionOption),
    source_type: cdktn.stringToTerraform(struct!.sourceType),
    uri: cdktn.stringToTerraform(struct!.uri),
    authentication: chronicleFeedDetailsSftpSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsSftpSettingsToHclTerraform(struct?: ChronicleFeedDetailsSftpSettingsOutputReference | ChronicleFeedDetailsSftpSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_deletion_option: {
      value: cdktn.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktn.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsSftpSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsSftpSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsSftpSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsSftpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsSftpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceDeletionOption = undefined;
      this._sourceType = undefined;
      this._uri = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._sourceType = value.sourceType;
      this._uri = value.uri;
      this._authentication.internalValue = value.authentication;
    }
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsSftpSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsSftpSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsSymantecEventExportSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#refresh_token ChronicleFeed#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#token_endpoint ChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
}

export function chronicleFeedDetailsSymantecEventExportSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsSymantecEventExportSettingsAuthenticationOutputReference | ChronicleFeedDetailsSymantecEventExportSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function chronicleFeedDetailsSymantecEventExportSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsSymantecEventExportSettingsAuthenticationOutputReference | ChronicleFeedDetailsSymantecEventExportSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token: {
      value: cdktn.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsSymantecEventExportSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsSymantecEventExportSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsSymantecEventExportSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._refreshToken = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._refreshToken = value.refreshToken;
      this._tokenEndpoint = value.tokenEndpoint;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface ChronicleFeedDetailsSymantecEventExportSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsSymantecEventExportSettingsAuthentication;
}

export function chronicleFeedDetailsSymantecEventExportSettingsToTerraform(struct?: ChronicleFeedDetailsSymantecEventExportSettingsOutputReference | ChronicleFeedDetailsSymantecEventExportSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication: chronicleFeedDetailsSymantecEventExportSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsSymantecEventExportSettingsToHclTerraform(struct?: ChronicleFeedDetailsSymantecEventExportSettingsOutputReference | ChronicleFeedDetailsSymantecEventExportSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication: {
      value: chronicleFeedDetailsSymantecEventExportSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsSymantecEventExportSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsSymantecEventExportSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsSymantecEventExportSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsSymantecEventExportSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsSymantecEventExportSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsSymantecEventExportSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#key ChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#value ChronicleFeed#value}
  */
  readonly value?: string;
}

export function chronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesToTerraform(struct?: ChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: ChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesOutputReference {
    return new ChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleFeedDetailsThinkstCanarySettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#header_key_values ChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: ChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable;
}

export function chronicleFeedDetailsThinkstCanarySettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsThinkstCanarySettingsAuthenticationOutputReference | ChronicleFeedDetailsThinkstCanarySettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_key_values: cdktn.listMapper(chronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function chronicleFeedDetailsThinkstCanarySettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsThinkstCanarySettingsAuthenticationOutputReference | ChronicleFeedDetailsThinkstCanarySettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_key_values: {
      value: cdktn.listMapperHcl(chronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsThinkstCanarySettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsThinkstCanarySettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsThinkstCanarySettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new ChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: ChronicleFeedDetailsThinkstCanarySettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface ChronicleFeedDetailsThinkstCanarySettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsThinkstCanarySettingsAuthentication;
}

export function chronicleFeedDetailsThinkstCanarySettingsToTerraform(struct?: ChronicleFeedDetailsThinkstCanarySettingsOutputReference | ChronicleFeedDetailsThinkstCanarySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    authentication: chronicleFeedDetailsThinkstCanarySettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsThinkstCanarySettingsToHclTerraform(struct?: ChronicleFeedDetailsThinkstCanarySettingsOutputReference | ChronicleFeedDetailsThinkstCanarySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsThinkstCanarySettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsThinkstCanarySettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsThinkstCanarySettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsThinkstCanarySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsThinkstCanarySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsThinkstCanarySettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsThinkstCanarySettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsThreatConnectIocSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#secret ChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsThreatConnectIocSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsThreatConnectIocSettingsAuthenticationOutputReference | ChronicleFeedDetailsThreatConnectIocSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsThreatConnectIocSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsThreatConnectIocSettingsAuthenticationOutputReference | ChronicleFeedDetailsThreatConnectIocSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsThreatConnectIocSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsThreatConnectIocSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsThreatConnectIocSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsThreatConnectIocSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Owners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#owners ChronicleFeed#owners}
  */
  readonly owners?: string[];
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsThreatConnectIocSettingsAuthentication;
}

export function chronicleFeedDetailsThreatConnectIocSettingsToTerraform(struct?: ChronicleFeedDetailsThreatConnectIocSettingsOutputReference | ChronicleFeedDetailsThreatConnectIocSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    owners: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.owners),
    authentication: chronicleFeedDetailsThreatConnectIocSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsThreatConnectIocSettingsToHclTerraform(struct?: ChronicleFeedDetailsThreatConnectIocSettingsOutputReference | ChronicleFeedDetailsThreatConnectIocSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owners: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.owners),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    authentication: {
      value: chronicleFeedDetailsThreatConnectIocSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsThreatConnectIocSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsThreatConnectIocSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsThreatConnectIocSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._owners !== undefined) {
      hasAnyValues = true;
      internalValueResult.owners = this._owners;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsThreatConnectIocSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._owners = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._owners = value.owners;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsThreatConnectIocSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsThreatConnectIocSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsThreatConnectIocV3SettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#secret ChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationOutputReference | ChronicleFeedDetailsThreatConnectIocV3SettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationOutputReference | ChronicleFeedDetailsThreatConnectIocV3SettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsThreatConnectIocV3SettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsThreatConnectIocV3SettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsThreatConnectIocV3Settings {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#fields ChronicleFeed#fields}
  */
  readonly fields?: string[];
  /**
  * hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Owners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#owners ChronicleFeed#owners}
  */
  readonly owners?: string[];
  /**
  * Schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#schedule ChronicleFeed#schedule}
  */
  readonly schedule?: number;
  /**
  * ThreatConnect Query Language filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#tql_query ChronicleFeed#tql_query}
  */
  readonly tqlQuery?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsThreatConnectIocV3SettingsAuthentication;
}

export function chronicleFeedDetailsThreatConnectIocV3SettingsToTerraform(struct?: ChronicleFeedDetailsThreatConnectIocV3SettingsOutputReference | ChronicleFeedDetailsThreatConnectIocV3Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    owners: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.owners),
    schedule: cdktn.numberToTerraform(struct!.schedule),
    tql_query: cdktn.stringToTerraform(struct!.tqlQuery),
    authentication: chronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsThreatConnectIocV3SettingsToHclTerraform(struct?: ChronicleFeedDetailsThreatConnectIocV3SettingsOutputReference | ChronicleFeedDetailsThreatConnectIocV3Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owners: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.owners),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schedule: {
      value: cdktn.numberToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tql_query: {
      value: cdktn.stringToHclTerraform(struct!.tqlQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsThreatConnectIocV3SettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsThreatConnectIocV3Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._owners !== undefined) {
      hasAnyValues = true;
      internalValueResult.owners = this._owners;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._tqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.tqlQuery = this._tqlQuery;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsThreatConnectIocV3Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
      this._hostname = undefined;
      this._owners = undefined;
      this._schedule = undefined;
      this._tqlQuery = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
      this._hostname = value.hostname;
      this._owners = value.owners;
      this._schedule = value.schedule;
      this._tqlQuery = value.tqlQuery;
      this._authentication.internalValue = value.authentication;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: number; 
  public get schedule() {
    return this.getNumberAttribute('schedule');
  }
  public set schedule(value: number) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // tql_query - computed: false, optional: true, required: false
  private _tqlQuery?: string; 
  public get tqlQuery() {
    return this.getStringAttribute('tql_query');
  }
  public set tqlQuery(value: string) {
    this._tqlQuery = value;
  }
  public resetTqlQuery() {
    this._tqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tqlQueryInput() {
    return this._tqlQuery;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsThreatConnectIocV3SettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsThreatConnectIocV3SettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMsso {
  /**
  * The login api endpoint url.
  * This must be a valid URL with an http or https scheme. It has no default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#api_endpoint ChronicleFeed#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * Password of the account identified by username.
  * There are no restrictions on the format of the password. It has no default,
  * specifically enforced min / max length or character set. The password
  * will have been provided by an MSSO administrator and it is assumed that
  * they have provided a password that is internally consistent with MSSO
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#password ChronicleFeed#password}
  */
  readonly password?: string;
  /**
  * Username for MSSO authentication.
  * There are no restrictions on the format of the username. It has no default,
  * specifically enforced min / max length or character set. The username
  * will have been provided by an MSSO administrator and it is assumed that
  * they have provided a username that is internally consistent with MSSO
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#username ChronicleFeed#username}
  */
  readonly username?: string;
}

export function chronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoToTerraform(struct?: ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoOutputReference | ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMsso): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_endpoint: cdktn.stringToTerraform(struct!.apiEndpoint),
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function chronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoToHclTerraform(struct?: ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoOutputReference | ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMsso): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.apiEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMsso | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMsso | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEndpoint = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEndpoint = value.apiEndpoint;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }
  public set apiEndpoint(value: string) {
    this._apiEndpoint = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIam {
  /**
  * Client ID generated in Trellix IAM.
  * This is a unique identifier for the user that is generated in Trellix IAM.
  * It has no default, specifically enforced min / max length or character set.
  * It is assumed that the Client ID generated in Trellix IAM is internally
  * consistent with Trellix IAM authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Secret associated with the Client ID.
  * This is the secret generated in Trellix IAM for the Client ID. It has no
  * default, specifically enforced min / max length or character set. It is
  * assumed that the secret generated in Trellix IAM is internally
  * consistent with Trellix IAM authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * OAUTH 2 scope to request for the authentication token.
  * This is the OAUTH 2 scope to request for the authentication token. It has
  * no default, specifically enforced min / max length or character set. It is
  * assumed that the scope provided is internally consistent with Trellix IAM
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#scope ChronicleFeed#scope}
  */
  readonly scope?: string;
}

export function chronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamToTerraform(struct?: ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamOutputReference | ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIam): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function chronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamToHclTerraform(struct?: ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamOutputReference | ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIam): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._scope = value.scope;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface ChronicleFeedDetailsTrellixHxAlertsSettingsAuthentication {
  /**
  * msso block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#msso ChronicleFeed#msso}
  */
  readonly msso?: ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMsso;
  /**
  * trellix_iam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#trellix_iam ChronicleFeed#trellix_iam}
  */
  readonly trellixIam?: ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIam;
}

export function chronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationOutputReference | ChronicleFeedDetailsTrellixHxAlertsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    msso: chronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoToTerraform(struct!.msso),
    trellix_iam: chronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamToTerraform(struct!.trellixIam),
  }
}


export function chronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationOutputReference | ChronicleFeedDetailsTrellixHxAlertsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    msso: {
      value: chronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoToHclTerraform(struct!.msso),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoList",
    },
    trellix_iam: {
      value: chronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamToHclTerraform(struct!.trellixIam),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsTrellixHxAlertsSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._msso?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msso = this._msso?.internalValue;
    }
    if (this._trellixIam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trellixIam = this._trellixIam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsTrellixHxAlertsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._msso.internalValue = undefined;
      this._trellixIam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._msso.internalValue = value.msso;
      this._trellixIam.internalValue = value.trellixIam;
    }
  }

  // msso - computed: false, optional: true, required: false
  private _msso = new ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMssoOutputReference(this, "msso");
  public get msso() {
    return this._msso;
  }
  public putMsso(value: ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationMsso) {
    this._msso.internalValue = value;
  }
  public resetMsso() {
    this._msso.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssoInput() {
    return this._msso.internalValue;
  }

  // trellix_iam - computed: false, optional: true, required: false
  private _trellixIam = new ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIamOutputReference(this, "trellix_iam");
  public get trellixIam() {
    return this._trellixIam;
  }
  public putTrellixIam(value: ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationTrellixIam) {
    this._trellixIam.internalValue = value;
  }
  public resetTrellixIam() {
    this._trellixIam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trellixIamInput() {
    return this._trellixIam.internalValue;
  }
}
export interface ChronicleFeedDetailsTrellixHxAlertsSettings {
  /**
  * Trellix HX Device URL.
  * This must be a valid URL with an http or https scheme. It has no default.
  * Usually a device URL is in the form of either:
  * https://xxx.trellix.com/hx/id//
  * - or -
  * https://htapdeviceproxy.md.mandiant.net/dphb/hx//
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#endpoint ChronicleFeed#endpoint}
  */
  readonly endpoint?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsTrellixHxAlertsSettingsAuthentication;
}

export function chronicleFeedDetailsTrellixHxAlertsSettingsToTerraform(struct?: ChronicleFeedDetailsTrellixHxAlertsSettingsOutputReference | ChronicleFeedDetailsTrellixHxAlertsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    authentication: chronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsTrellixHxAlertsSettingsToHclTerraform(struct?: ChronicleFeedDetailsTrellixHxAlertsSettingsOutputReference | ChronicleFeedDetailsTrellixHxAlertsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsTrellixHxAlertsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsTrellixHxAlertsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsTrellixHxAlertsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._authentication.internalValue = value.authentication;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsTrellixHxAlertsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsTrellixHxAlertsSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMsso {
  /**
  * The login api endpoint url.
  * This must be a valid URL with an http or https scheme. It has no default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#api_endpoint ChronicleFeed#api_endpoint}
  */
  readonly apiEndpoint: string;
  /**
  * Password of the account identified by username.
  * There are no restrictions on the format of the password. It has no default,
  * specifically enforced min / max length or character set. The password
  * will have been provided by an MSSO administrator and it is assumed that
  * they have provided a password that is internally consistent with MSSO
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#password ChronicleFeed#password}
  */
  readonly password: string;
  /**
  * Username for MSSO authentication.
  * There are no restrictions on the format of the username. It has no default,
  * specifically enforced min / max length or character set. The username
  * will have been provided by an MSSO administrator and it is assumed that
  * they have provided a username that is internally consistent with MSSO
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#username ChronicleFeed#username}
  */
  readonly username: string;
}

export function chronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoToTerraform(struct?: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoOutputReference | ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMsso): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_endpoint: cdktn.stringToTerraform(struct!.apiEndpoint),
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function chronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoToHclTerraform(struct?: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoOutputReference | ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMsso): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.apiEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMsso | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMsso | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEndpoint = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEndpoint = value.apiEndpoint;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // api_endpoint - computed: false, optional: false, required: true
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }
  public set apiEndpoint(value: string) {
    this._apiEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIam {
  /**
  * Client ID generated in Trellix IAM.
  * This is a unique identifier for the user that is generated in Trellix IAM.
  * It has no default, specifically enforced min / max length or character set.
  * It is assumed that the Client ID generated in Trellix IAM is internally
  * consistent with Trellix IAM authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId: string;
  /**
  * Secret associated with the Client ID.
  * This is the secret generated in Trellix IAM for the Client ID. It has no
  * default, specifically enforced min / max length or character set. It is
  * assumed that the secret generated in Trellix IAM is internally
  * consistent with Trellix IAM authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret: string;
  /**
  * OAUTH 2 scope to request for the authentication token.
  * This is the OAUTH 2 scope to request for the authentication token. It has
  * no default, specifically enforced min / max length or character set. It is
  * assumed that the scope provided is internally consistent with Trellix IAM
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#scope ChronicleFeed#scope}
  */
  readonly scope: string;
}

export function chronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamToTerraform(struct?: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamOutputReference | ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIam): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function chronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamToHclTerraform(struct?: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamOutputReference | ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIam): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._scope = value.scope;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthentication {
  /**
  * msso block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#msso ChronicleFeed#msso}
  */
  readonly msso?: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMsso;
  /**
  * trellix_iam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#trellix_iam ChronicleFeed#trellix_iam}
  */
  readonly trellixIam?: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIam;
}

export function chronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationOutputReference | ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    msso: chronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoToTerraform(struct!.msso),
    trellix_iam: chronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamToTerraform(struct!.trellixIam),
  }
}


export function chronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationOutputReference | ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    msso: {
      value: chronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoToHclTerraform(struct!.msso),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoList",
    },
    trellix_iam: {
      value: chronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamToHclTerraform(struct!.trellixIam),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._msso?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msso = this._msso?.internalValue;
    }
    if (this._trellixIam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trellixIam = this._trellixIam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._msso.internalValue = undefined;
      this._trellixIam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._msso.internalValue = value.msso;
      this._trellixIam.internalValue = value.trellixIam;
    }
  }

  // msso - computed: false, optional: true, required: false
  private _msso = new ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMssoOutputReference(this, "msso");
  public get msso() {
    return this._msso;
  }
  public putMsso(value: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationMsso) {
    this._msso.internalValue = value;
  }
  public resetMsso() {
    this._msso.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssoInput() {
    return this._msso.internalValue;
  }

  // trellix_iam - computed: false, optional: true, required: false
  private _trellixIam = new ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIamOutputReference(this, "trellix_iam");
  public get trellixIam() {
    return this._trellixIam;
  }
  public putTrellixIam(value: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationTrellixIam) {
    this._trellixIam.internalValue = value;
  }
  public resetTrellixIam() {
    this._trellixIam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trellixIamInput() {
    return this._trellixIam.internalValue;
  }
}
export interface ChronicleFeedDetailsTrellixHxBulkAcqsSettings {
  /**
  * Trellix HX Device URL.
  * This must be a valid URL with an http or https scheme. It has no default.
  * Usually a device URL is in the form of either:
  * https://xxx.trellix.com/hx/id//
  * - or -
  * https://htapdeviceproxy.md.mandiant.net/dphb/hx//
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#endpoint ChronicleFeed#endpoint}
  */
  readonly endpoint: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthentication;
}

export function chronicleFeedDetailsTrellixHxBulkAcqsSettingsToTerraform(struct?: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsOutputReference | ChronicleFeedDetailsTrellixHxBulkAcqsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    authentication: chronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsTrellixHxBulkAcqsSettingsToHclTerraform(struct?: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsOutputReference | ChronicleFeedDetailsTrellixHxBulkAcqsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsTrellixHxBulkAcqsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsTrellixHxBulkAcqsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsTrellixHxBulkAcqsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._authentication.internalValue = value.authentication;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsTrellixHxBulkAcqsSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMsso {
  /**
  * The login api endpoint url.
  * This must be a valid URL with an http or https scheme. It has no default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#api_endpoint ChronicleFeed#api_endpoint}
  */
  readonly apiEndpoint: string;
  /**
  * Password of the account identified by username.
  * There are no restrictions on the format of the password. It has no default,
  * specifically enforced min / max length or character set. The password
  * will have been provided by an MSSO administrator and it is assumed that
  * they have provided a password that is internally consistent with MSSO
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#password ChronicleFeed#password}
  */
  readonly password: string;
  /**
  * Username for MSSO authentication.
  * There are no restrictions on the format of the username. It has no default,
  * specifically enforced min / max length or character set. The username
  * will have been provided by an MSSO administrator and it is assumed that
  * they have provided a username that is internally consistent with MSSO
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#username ChronicleFeed#username}
  */
  readonly username: string;
}

export function chronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoToTerraform(struct?: ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoOutputReference | ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMsso): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_endpoint: cdktn.stringToTerraform(struct!.apiEndpoint),
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function chronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoToHclTerraform(struct?: ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoOutputReference | ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMsso): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.apiEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMsso | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMsso | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEndpoint = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEndpoint = value.apiEndpoint;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // api_endpoint - computed: false, optional: false, required: true
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }
  public set apiEndpoint(value: string) {
    this._apiEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIam {
  /**
  * Client ID generated in Trellix IAM.
  * This is a unique identifier for the user that is generated in Trellix IAM.
  * It has no default, specifically enforced min / max length or character set.
  * It is assumed that the Client ID generated in Trellix IAM is internally
  * consistent with Trellix IAM authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId: string;
  /**
  * Secret associated with the Client ID.
  * This is the secret generated in Trellix IAM for the Client ID. It has no
  * default, specifically enforced min / max length or character set. It is
  * assumed that the secret generated in Trellix IAM is internally
  * consistent with Trellix IAM authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret: string;
  /**
  * OAUTH 2 scope to request for the authentication token.
  * This is the OAUTH 2 scope to request for the authentication token. It has
  * no default, specifically enforced min / max length or character set. It is
  * assumed that the scope provided is internally consistent with Trellix IAM
  * authentication requirements / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#scope ChronicleFeed#scope}
  */
  readonly scope: string;
}

export function chronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamToTerraform(struct?: ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamOutputReference | ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIam): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function chronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamToHclTerraform(struct?: ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamOutputReference | ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIam): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._scope = value.scope;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface ChronicleFeedDetailsTrellixHxHostsSettingsAuthentication {
  /**
  * msso block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#msso ChronicleFeed#msso}
  */
  readonly msso?: ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMsso;
  /**
  * trellix_iam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#trellix_iam ChronicleFeed#trellix_iam}
  */
  readonly trellixIam?: ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIam;
}

export function chronicleFeedDetailsTrellixHxHostsSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationOutputReference | ChronicleFeedDetailsTrellixHxHostsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    msso: chronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoToTerraform(struct!.msso),
    trellix_iam: chronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamToTerraform(struct!.trellixIam),
  }
}


export function chronicleFeedDetailsTrellixHxHostsSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationOutputReference | ChronicleFeedDetailsTrellixHxHostsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    msso: {
      value: chronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoToHclTerraform(struct!.msso),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoList",
    },
    trellix_iam: {
      value: chronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamToHclTerraform(struct!.trellixIam),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsTrellixHxHostsSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._msso?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msso = this._msso?.internalValue;
    }
    if (this._trellixIam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trellixIam = this._trellixIam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsTrellixHxHostsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._msso.internalValue = undefined;
      this._trellixIam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._msso.internalValue = value.msso;
      this._trellixIam.internalValue = value.trellixIam;
    }
  }

  // msso - computed: false, optional: true, required: false
  private _msso = new ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMssoOutputReference(this, "msso");
  public get msso() {
    return this._msso;
  }
  public putMsso(value: ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationMsso) {
    this._msso.internalValue = value;
  }
  public resetMsso() {
    this._msso.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssoInput() {
    return this._msso.internalValue;
  }

  // trellix_iam - computed: false, optional: true, required: false
  private _trellixIam = new ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIamOutputReference(this, "trellix_iam");
  public get trellixIam() {
    return this._trellixIam;
  }
  public putTrellixIam(value: ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationTrellixIam) {
    this._trellixIam.internalValue = value;
  }
  public resetTrellixIam() {
    this._trellixIam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trellixIamInput() {
    return this._trellixIam.internalValue;
  }
}
export interface ChronicleFeedDetailsTrellixHxHostsSettings {
  /**
  * Trellix HX Device URL.
  * This must be a valid URL with an http or https scheme. It has no default.
  * Usually a device URL is in the form of either:
  * https://xxx.trellix.com/hx/id//
  * - or -
  * https://htapdeviceproxy.md.mandiant.net/dphb/hx//
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#endpoint ChronicleFeed#endpoint}
  */
  readonly endpoint: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsTrellixHxHostsSettingsAuthentication;
}

export function chronicleFeedDetailsTrellixHxHostsSettingsToTerraform(struct?: ChronicleFeedDetailsTrellixHxHostsSettingsOutputReference | ChronicleFeedDetailsTrellixHxHostsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    authentication: chronicleFeedDetailsTrellixHxHostsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsTrellixHxHostsSettingsToHclTerraform(struct?: ChronicleFeedDetailsTrellixHxHostsSettingsOutputReference | ChronicleFeedDetailsTrellixHxHostsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsTrellixHxHostsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsTrellixHxHostsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsTrellixHxHostsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsTrellixHxHostsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._authentication.internalValue = value.authentication;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsTrellixHxHostsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsTrellixHxHostsSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsWebhookSettings {
}

export function chronicleFeedDetailsWebhookSettingsToTerraform(struct?: ChronicleFeedDetailsWebhookSettingsOutputReference | ChronicleFeedDetailsWebhookSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function chronicleFeedDetailsWebhookSettingsToHclTerraform(struct?: ChronicleFeedDetailsWebhookSettingsOutputReference | ChronicleFeedDetailsWebhookSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ChronicleFeedDetailsWebhookSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWebhookSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWebhookSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ChronicleFeedDetailsWorkdaySettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Refresh Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#refresh_token ChronicleFeed#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * The access token used to authenticate against Workday. This field is called
  * "secret" to maintain backwards compatibility. Workday was (only) configured
  * using username (which was unused) and secret (which is used as the access
  * token). Either this field or all of the other OAuth fields below must be
  * specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#secret ChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#token_endpoint ChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * Username. This is unused: Workday feeds were originally configured using a
  * username and secret authentication method, but only the secret field was
  * used, and it was used to supply the OAuth access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsWorkdaySettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsWorkdaySettingsAuthenticationOutputReference | ChronicleFeedDetailsWorkdaySettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
    secret: cdktn.stringToTerraform(struct!.secret),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsWorkdaySettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsWorkdaySettingsAuthenticationOutputReference | ChronicleFeedDetailsWorkdaySettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token: {
      value: cdktn.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkdaySettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkdaySettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkdaySettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._refreshToken = undefined;
      this._secret = undefined;
      this._tokenEndpoint = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._refreshToken = value.refreshToken;
      this._secret = value.secret;
      this._tokenEndpoint = value.tokenEndpoint;
      this._user = value.user;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsWorkdaySettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#tenant_id ChronicleFeed#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsWorkdaySettingsAuthentication;
}

export function chronicleFeedDetailsWorkdaySettingsToTerraform(struct?: ChronicleFeedDetailsWorkdaySettingsOutputReference | ChronicleFeedDetailsWorkdaySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    authentication: chronicleFeedDetailsWorkdaySettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsWorkdaySettingsToHclTerraform(struct?: ChronicleFeedDetailsWorkdaySettingsOutputReference | ChronicleFeedDetailsWorkdaySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsWorkdaySettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkdaySettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkdaySettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkdaySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkdaySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._tenantId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._tenantId = value.tenantId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsWorkdaySettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsWorkdaySettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaims {
  /**
  * Audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#audience ChronicleFeed#audience}
  */
  readonly audience?: string;
  /**
  * Issuer. Usually the client_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#issuer ChronicleFeed#issuer}
  */
  readonly issuer?: string;
  /**
  * Subject. Usually the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#subject ChronicleFeed#subject}
  */
  readonly subject?: string;
}

export function chronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsToTerraform(struct?: ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audience: cdktn.stringToTerraform(struct!.audience),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    subject: cdktn.stringToTerraform(struct!.subject),
  }
}


export function chronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audience: {
      value: cdktn.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#private_key ChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function chronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsToTerraform(struct?: ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_key: cdktn.stringToTerraform(struct!.privateKey),
  }
}


export function chronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKey = value.privateKey;
    }
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface ChronicleFeedDetailsWorkspaceActivitySettingsAuthentication {
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#token_endpoint ChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#claims ChronicleFeed#claims}
  */
  readonly claims?: ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#rs_credentials ChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentials;
}

export function chronicleFeedDetailsWorkspaceActivitySettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationOutputReference | ChronicleFeedDetailsWorkspaceActivitySettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    claims: chronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: chronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function chronicleFeedDetailsWorkspaceActivitySettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationOutputReference | ChronicleFeedDetailsWorkspaceActivitySettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claims: {
      value: chronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: chronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceActivitySettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._rsCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsCredentials = this._rsCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceActivitySettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenEndpoint = undefined;
      this._claims.internalValue = undefined;
      this._rsCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenEndpoint = value.tokenEndpoint;
      this._claims.internalValue = value.claims;
      this._rsCredentials.internalValue = value.rsCredentials;
    }
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationClaims) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // rs_credentials - computed: false, optional: true, required: false
  private _rsCredentials = new ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationRsCredentials) {
    this._rsCredentials.internalValue = value;
  }
  public resetRsCredentials() {
    this._rsCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsCredentialsInput() {
    return this._rsCredentials.internalValue;
  }
}
export interface ChronicleFeedDetailsWorkspaceActivitySettings {
  /**
  * Applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#applications ChronicleFeed#applications}
  */
  readonly applications?: string[];
  /**
  * Customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#workspace_customer_id ChronicleFeed#workspace_customer_id}
  */
  readonly workspaceCustomerId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsWorkspaceActivitySettingsAuthentication;
}

export function chronicleFeedDetailsWorkspaceActivitySettingsToTerraform(struct?: ChronicleFeedDetailsWorkspaceActivitySettingsOutputReference | ChronicleFeedDetailsWorkspaceActivitySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    applications: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.applications),
    workspace_customer_id: cdktn.stringToTerraform(struct!.workspaceCustomerId),
    authentication: chronicleFeedDetailsWorkspaceActivitySettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsWorkspaceActivitySettingsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceActivitySettingsOutputReference | ChronicleFeedDetailsWorkspaceActivitySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    applications: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    workspace_customer_id: {
      value: cdktn.stringToHclTerraform(struct!.workspaceCustomerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsWorkspaceActivitySettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceActivitySettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceActivitySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._workspaceCustomerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceCustomerId = this._workspaceCustomerId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceActivitySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applications = undefined;
      this._workspaceCustomerId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applications = value.applications;
      this._workspaceCustomerId = value.workspaceCustomerId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // workspace_customer_id - computed: false, optional: true, required: false
  private _workspaceCustomerId?: string; 
  public get workspaceCustomerId() {
    return this.getStringAttribute('workspace_customer_id');
  }
  public set workspaceCustomerId(value: string) {
    this._workspaceCustomerId = value;
  }
  public resetWorkspaceCustomerId() {
    this._workspaceCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCustomerIdInput() {
    return this._workspaceCustomerId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsWorkspaceActivitySettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsWorkspaceActivitySettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaims {
  /**
  * Audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#audience ChronicleFeed#audience}
  */
  readonly audience?: string;
  /**
  * Issuer. Usually the client_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#issuer ChronicleFeed#issuer}
  */
  readonly issuer?: string;
  /**
  * Subject. Usually the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#subject ChronicleFeed#subject}
  */
  readonly subject?: string;
}

export function chronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsToTerraform(struct?: ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audience: cdktn.stringToTerraform(struct!.audience),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    subject: cdktn.stringToTerraform(struct!.subject),
  }
}


export function chronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audience: {
      value: cdktn.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#private_key ChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function chronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsToTerraform(struct?: ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_key: cdktn.stringToTerraform(struct!.privateKey),
  }
}


export function chronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKey = value.privateKey;
    }
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface ChronicleFeedDetailsWorkspaceAlertsSettingsAuthentication {
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#token_endpoint ChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#claims ChronicleFeed#claims}
  */
  readonly claims?: ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#rs_credentials ChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentials;
}

export function chronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationOutputReference | ChronicleFeedDetailsWorkspaceAlertsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    claims: chronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: chronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function chronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationOutputReference | ChronicleFeedDetailsWorkspaceAlertsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claims: {
      value: chronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: chronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceAlertsSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._rsCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsCredentials = this._rsCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceAlertsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenEndpoint = undefined;
      this._claims.internalValue = undefined;
      this._rsCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenEndpoint = value.tokenEndpoint;
      this._claims.internalValue = value.claims;
      this._rsCredentials.internalValue = value.rsCredentials;
    }
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationClaims) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // rs_credentials - computed: false, optional: true, required: false
  private _rsCredentials = new ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationRsCredentials) {
    this._rsCredentials.internalValue = value;
  }
  public resetRsCredentials() {
    this._rsCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsCredentialsInput() {
    return this._rsCredentials.internalValue;
  }
}
export interface ChronicleFeedDetailsWorkspaceAlertsSettings {
  /**
  * Customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#workspace_customer_id ChronicleFeed#workspace_customer_id}
  */
  readonly workspaceCustomerId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsWorkspaceAlertsSettingsAuthentication;
}

export function chronicleFeedDetailsWorkspaceAlertsSettingsToTerraform(struct?: ChronicleFeedDetailsWorkspaceAlertsSettingsOutputReference | ChronicleFeedDetailsWorkspaceAlertsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_customer_id: cdktn.stringToTerraform(struct!.workspaceCustomerId),
    authentication: chronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsWorkspaceAlertsSettingsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceAlertsSettingsOutputReference | ChronicleFeedDetailsWorkspaceAlertsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workspace_customer_id: {
      value: cdktn.stringToHclTerraform(struct!.workspaceCustomerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceAlertsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceAlertsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceCustomerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceCustomerId = this._workspaceCustomerId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceAlertsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceCustomerId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workspaceCustomerId = value.workspaceCustomerId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // workspace_customer_id - computed: false, optional: true, required: false
  private _workspaceCustomerId?: string; 
  public get workspaceCustomerId() {
    return this.getStringAttribute('workspace_customer_id');
  }
  public set workspaceCustomerId(value: string) {
    this._workspaceCustomerId = value;
  }
  public resetWorkspaceCustomerId() {
    this._workspaceCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCustomerIdInput() {
    return this._workspaceCustomerId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsWorkspaceAlertsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsWorkspaceAlertsSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaims {
  /**
  * Audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#audience ChronicleFeed#audience}
  */
  readonly audience?: string;
  /**
  * Issuer. Usually the client_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#issuer ChronicleFeed#issuer}
  */
  readonly issuer?: string;
  /**
  * Subject. Usually the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#subject ChronicleFeed#subject}
  */
  readonly subject?: string;
}

export function chronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsToTerraform(struct?: ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audience: cdktn.stringToTerraform(struct!.audience),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    subject: cdktn.stringToTerraform(struct!.subject),
  }
}


export function chronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audience: {
      value: cdktn.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#private_key ChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function chronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsToTerraform(struct?: ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_key: cdktn.stringToTerraform(struct!.privateKey),
  }
}


export function chronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKey = value.privateKey;
    }
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthentication {
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#token_endpoint ChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#claims ChronicleFeed#claims}
  */
  readonly claims?: ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#rs_credentials ChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentials;
}

export function chronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationOutputReference | ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    claims: chronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: chronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function chronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationOutputReference | ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claims: {
      value: chronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: chronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._rsCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsCredentials = this._rsCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenEndpoint = undefined;
      this._claims.internalValue = undefined;
      this._rsCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenEndpoint = value.tokenEndpoint;
      this._claims.internalValue = value.claims;
      this._rsCredentials.internalValue = value.rsCredentials;
    }
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationClaims) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // rs_credentials - computed: false, optional: true, required: false
  private _rsCredentials = new ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationRsCredentials) {
    this._rsCredentials.internalValue = value;
  }
  public resetRsCredentials() {
    this._rsCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsCredentialsInput() {
    return this._rsCredentials.internalValue;
  }
}
export interface ChronicleFeedDetailsWorkspaceChromeOsSettings {
  /**
  * Customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#workspace_customer_id ChronicleFeed#workspace_customer_id}
  */
  readonly workspaceCustomerId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthentication;
}

export function chronicleFeedDetailsWorkspaceChromeOsSettingsToTerraform(struct?: ChronicleFeedDetailsWorkspaceChromeOsSettingsOutputReference | ChronicleFeedDetailsWorkspaceChromeOsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_customer_id: cdktn.stringToTerraform(struct!.workspaceCustomerId),
    authentication: chronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsWorkspaceChromeOsSettingsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceChromeOsSettingsOutputReference | ChronicleFeedDetailsWorkspaceChromeOsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workspace_customer_id: {
      value: cdktn.stringToHclTerraform(struct!.workspaceCustomerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceChromeOsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceChromeOsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceCustomerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceCustomerId = this._workspaceCustomerId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceChromeOsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceCustomerId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workspaceCustomerId = value.workspaceCustomerId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // workspace_customer_id - computed: false, optional: true, required: false
  private _workspaceCustomerId?: string; 
  public get workspaceCustomerId() {
    return this.getStringAttribute('workspace_customer_id');
  }
  public set workspaceCustomerId(value: string) {
    this._workspaceCustomerId = value;
  }
  public resetWorkspaceCustomerId() {
    this._workspaceCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCustomerIdInput() {
    return this._workspaceCustomerId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsWorkspaceChromeOsSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaims {
  /**
  * Audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#audience ChronicleFeed#audience}
  */
  readonly audience?: string;
  /**
  * Issuer. Usually the client_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#issuer ChronicleFeed#issuer}
  */
  readonly issuer?: string;
  /**
  * Subject. Usually the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#subject ChronicleFeed#subject}
  */
  readonly subject?: string;
}

export function chronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsToTerraform(struct?: ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audience: cdktn.stringToTerraform(struct!.audience),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    subject: cdktn.stringToTerraform(struct!.subject),
  }
}


export function chronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audience: {
      value: cdktn.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#private_key ChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function chronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsToTerraform(struct?: ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_key: cdktn.stringToTerraform(struct!.privateKey),
  }
}


export function chronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKey = value.privateKey;
    }
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface ChronicleFeedDetailsWorkspaceGroupsSettingsAuthentication {
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#token_endpoint ChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#claims ChronicleFeed#claims}
  */
  readonly claims?: ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#rs_credentials ChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentials;
}

export function chronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationOutputReference | ChronicleFeedDetailsWorkspaceGroupsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    claims: chronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: chronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function chronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationOutputReference | ChronicleFeedDetailsWorkspaceGroupsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claims: {
      value: chronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: chronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceGroupsSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._rsCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsCredentials = this._rsCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceGroupsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenEndpoint = undefined;
      this._claims.internalValue = undefined;
      this._rsCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenEndpoint = value.tokenEndpoint;
      this._claims.internalValue = value.claims;
      this._rsCredentials.internalValue = value.rsCredentials;
    }
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationClaims) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // rs_credentials - computed: false, optional: true, required: false
  private _rsCredentials = new ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationRsCredentials) {
    this._rsCredentials.internalValue = value;
  }
  public resetRsCredentials() {
    this._rsCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsCredentialsInput() {
    return this._rsCredentials.internalValue;
  }
}
export interface ChronicleFeedDetailsWorkspaceGroupsSettings {
  /**
  * Customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#workspace_customer_id ChronicleFeed#workspace_customer_id}
  */
  readonly workspaceCustomerId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsWorkspaceGroupsSettingsAuthentication;
}

export function chronicleFeedDetailsWorkspaceGroupsSettingsToTerraform(struct?: ChronicleFeedDetailsWorkspaceGroupsSettingsOutputReference | ChronicleFeedDetailsWorkspaceGroupsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_customer_id: cdktn.stringToTerraform(struct!.workspaceCustomerId),
    authentication: chronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsWorkspaceGroupsSettingsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceGroupsSettingsOutputReference | ChronicleFeedDetailsWorkspaceGroupsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workspace_customer_id: {
      value: cdktn.stringToHclTerraform(struct!.workspaceCustomerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceGroupsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceGroupsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceCustomerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceCustomerId = this._workspaceCustomerId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceGroupsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceCustomerId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workspaceCustomerId = value.workspaceCustomerId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // workspace_customer_id - computed: false, optional: true, required: false
  private _workspaceCustomerId?: string; 
  public get workspaceCustomerId() {
    return this.getStringAttribute('workspace_customer_id');
  }
  public set workspaceCustomerId(value: string) {
    this._workspaceCustomerId = value;
  }
  public resetWorkspaceCustomerId() {
    this._workspaceCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCustomerIdInput() {
    return this._workspaceCustomerId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsWorkspaceGroupsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsWorkspaceGroupsSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaims {
  /**
  * Audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#audience ChronicleFeed#audience}
  */
  readonly audience?: string;
  /**
  * Issuer. Usually the client_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#issuer ChronicleFeed#issuer}
  */
  readonly issuer?: string;
  /**
  * Subject. Usually the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#subject ChronicleFeed#subject}
  */
  readonly subject?: string;
}

export function chronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsToTerraform(struct?: ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audience: cdktn.stringToTerraform(struct!.audience),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    subject: cdktn.stringToTerraform(struct!.subject),
  }
}


export function chronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audience: {
      value: cdktn.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#private_key ChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function chronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsToTerraform(struct?: ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_key: cdktn.stringToTerraform(struct!.privateKey),
  }
}


export function chronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKey = value.privateKey;
    }
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface ChronicleFeedDetailsWorkspaceMobileSettingsAuthentication {
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#token_endpoint ChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#claims ChronicleFeed#claims}
  */
  readonly claims?: ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#rs_credentials ChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentials;
}

export function chronicleFeedDetailsWorkspaceMobileSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationOutputReference | ChronicleFeedDetailsWorkspaceMobileSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    claims: chronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: chronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function chronicleFeedDetailsWorkspaceMobileSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationOutputReference | ChronicleFeedDetailsWorkspaceMobileSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claims: {
      value: chronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: chronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceMobileSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._rsCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsCredentials = this._rsCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceMobileSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenEndpoint = undefined;
      this._claims.internalValue = undefined;
      this._rsCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenEndpoint = value.tokenEndpoint;
      this._claims.internalValue = value.claims;
      this._rsCredentials.internalValue = value.rsCredentials;
    }
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationClaims) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // rs_credentials - computed: false, optional: true, required: false
  private _rsCredentials = new ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationRsCredentials) {
    this._rsCredentials.internalValue = value;
  }
  public resetRsCredentials() {
    this._rsCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsCredentialsInput() {
    return this._rsCredentials.internalValue;
  }
}
export interface ChronicleFeedDetailsWorkspaceMobileSettings {
  /**
  * Customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#workspace_customer_id ChronicleFeed#workspace_customer_id}
  */
  readonly workspaceCustomerId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsWorkspaceMobileSettingsAuthentication;
}

export function chronicleFeedDetailsWorkspaceMobileSettingsToTerraform(struct?: ChronicleFeedDetailsWorkspaceMobileSettingsOutputReference | ChronicleFeedDetailsWorkspaceMobileSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_customer_id: cdktn.stringToTerraform(struct!.workspaceCustomerId),
    authentication: chronicleFeedDetailsWorkspaceMobileSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsWorkspaceMobileSettingsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceMobileSettingsOutputReference | ChronicleFeedDetailsWorkspaceMobileSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workspace_customer_id: {
      value: cdktn.stringToHclTerraform(struct!.workspaceCustomerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsWorkspaceMobileSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceMobileSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceMobileSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceCustomerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceCustomerId = this._workspaceCustomerId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceMobileSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceCustomerId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workspaceCustomerId = value.workspaceCustomerId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // workspace_customer_id - computed: false, optional: true, required: false
  private _workspaceCustomerId?: string; 
  public get workspaceCustomerId() {
    return this.getStringAttribute('workspace_customer_id');
  }
  public set workspaceCustomerId(value: string) {
    this._workspaceCustomerId = value;
  }
  public resetWorkspaceCustomerId() {
    this._workspaceCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCustomerIdInput() {
    return this._workspaceCustomerId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsWorkspaceMobileSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsWorkspaceMobileSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaims {
  /**
  * Audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#audience ChronicleFeed#audience}
  */
  readonly audience?: string;
  /**
  * Issuer. Usually the client_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#issuer ChronicleFeed#issuer}
  */
  readonly issuer?: string;
  /**
  * Subject. Usually the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#subject ChronicleFeed#subject}
  */
  readonly subject?: string;
}

export function chronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsToTerraform(struct?: ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audience: cdktn.stringToTerraform(struct!.audience),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    subject: cdktn.stringToTerraform(struct!.subject),
  }
}


export function chronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsToHclTerraform(struct?: ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audience: {
      value: cdktn.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#private_key ChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function chronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsToTerraform(struct?: ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_key: cdktn.stringToTerraform(struct!.privateKey),
  }
}


export function chronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsToHclTerraform(struct?: ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKey = value.privateKey;
    }
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthentication {
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#token_endpoint ChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#claims ChronicleFeed#claims}
  */
  readonly claims?: ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#rs_credentials ChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentials;
}

export function chronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationOutputReference | ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    claims: chronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: chronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function chronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationOutputReference | ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claims: {
      value: chronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: chronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._rsCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsCredentials = this._rsCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenEndpoint = undefined;
      this._claims.internalValue = undefined;
      this._rsCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenEndpoint = value.tokenEndpoint;
      this._claims.internalValue = value.claims;
      this._rsCredentials.internalValue = value.rsCredentials;
    }
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationClaims) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // rs_credentials - computed: false, optional: true, required: false
  private _rsCredentials = new ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationRsCredentials) {
    this._rsCredentials.internalValue = value;
  }
  public resetRsCredentials() {
    this._rsCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsCredentialsInput() {
    return this._rsCredentials.internalValue;
  }
}
export interface ChronicleFeedDetailsWorkspacePrivilegesSettings {
  /**
  * Customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#workspace_customer_id ChronicleFeed#workspace_customer_id}
  */
  readonly workspaceCustomerId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthentication;
}

export function chronicleFeedDetailsWorkspacePrivilegesSettingsToTerraform(struct?: ChronicleFeedDetailsWorkspacePrivilegesSettingsOutputReference | ChronicleFeedDetailsWorkspacePrivilegesSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_customer_id: cdktn.stringToTerraform(struct!.workspaceCustomerId),
    authentication: chronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsWorkspacePrivilegesSettingsToHclTerraform(struct?: ChronicleFeedDetailsWorkspacePrivilegesSettingsOutputReference | ChronicleFeedDetailsWorkspacePrivilegesSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workspace_customer_id: {
      value: cdktn.stringToHclTerraform(struct!.workspaceCustomerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspacePrivilegesSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspacePrivilegesSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceCustomerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceCustomerId = this._workspaceCustomerId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspacePrivilegesSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceCustomerId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workspaceCustomerId = value.workspaceCustomerId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // workspace_customer_id - computed: false, optional: true, required: false
  private _workspaceCustomerId?: string; 
  public get workspaceCustomerId() {
    return this.getStringAttribute('workspace_customer_id');
  }
  public set workspaceCustomerId(value: string) {
    this._workspaceCustomerId = value;
  }
  public resetWorkspaceCustomerId() {
    this._workspaceCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCustomerIdInput() {
    return this._workspaceCustomerId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsWorkspacePrivilegesSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaims {
  /**
  * Audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#audience ChronicleFeed#audience}
  */
  readonly audience?: string;
  /**
  * Issuer. Usually the client_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#issuer ChronicleFeed#issuer}
  */
  readonly issuer?: string;
  /**
  * Subject. Usually the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#subject ChronicleFeed#subject}
  */
  readonly subject?: string;
}

export function chronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsToTerraform(struct?: ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audience: cdktn.stringToTerraform(struct!.audience),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    subject: cdktn.stringToTerraform(struct!.subject),
  }
}


export function chronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audience: {
      value: cdktn.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#private_key ChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function chronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsToTerraform(struct?: ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_key: cdktn.stringToTerraform(struct!.privateKey),
  }
}


export function chronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKey = value.privateKey;
    }
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface ChronicleFeedDetailsWorkspaceUsersSettingsAuthentication {
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#token_endpoint ChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#claims ChronicleFeed#claims}
  */
  readonly claims?: ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#rs_credentials ChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentials;
}

export function chronicleFeedDetailsWorkspaceUsersSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationOutputReference | ChronicleFeedDetailsWorkspaceUsersSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    claims: chronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: chronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function chronicleFeedDetailsWorkspaceUsersSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationOutputReference | ChronicleFeedDetailsWorkspaceUsersSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claims: {
      value: chronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: chronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceUsersSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._rsCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsCredentials = this._rsCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceUsersSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenEndpoint = undefined;
      this._claims.internalValue = undefined;
      this._rsCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenEndpoint = value.tokenEndpoint;
      this._claims.internalValue = value.claims;
      this._rsCredentials.internalValue = value.rsCredentials;
    }
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationClaims) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // rs_credentials - computed: false, optional: true, required: false
  private _rsCredentials = new ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationRsCredentials) {
    this._rsCredentials.internalValue = value;
  }
  public resetRsCredentials() {
    this._rsCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsCredentialsInput() {
    return this._rsCredentials.internalValue;
  }
}
export interface ChronicleFeedDetailsWorkspaceUsersSettings {
  /**
  * Projection Type.
  * Possible values:
  * BASIC_PROJECTION
  * FULL_PROJECTION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#projection_type ChronicleFeed#projection_type}
  */
  readonly projectionType?: string;
  /**
  * Customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#workspace_customer_id ChronicleFeed#workspace_customer_id}
  */
  readonly workspaceCustomerId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsWorkspaceUsersSettingsAuthentication;
}

export function chronicleFeedDetailsWorkspaceUsersSettingsToTerraform(struct?: ChronicleFeedDetailsWorkspaceUsersSettingsOutputReference | ChronicleFeedDetailsWorkspaceUsersSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    projection_type: cdktn.stringToTerraform(struct!.projectionType),
    workspace_customer_id: cdktn.stringToTerraform(struct!.workspaceCustomerId),
    authentication: chronicleFeedDetailsWorkspaceUsersSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsWorkspaceUsersSettingsToHclTerraform(struct?: ChronicleFeedDetailsWorkspaceUsersSettingsOutputReference | ChronicleFeedDetailsWorkspaceUsersSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    projection_type: {
      value: cdktn.stringToHclTerraform(struct!.projectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_customer_id: {
      value: cdktn.stringToHclTerraform(struct!.workspaceCustomerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsWorkspaceUsersSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsWorkspaceUsersSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsWorkspaceUsersSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectionType = this._projectionType;
    }
    if (this._workspaceCustomerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceCustomerId = this._workspaceCustomerId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsWorkspaceUsersSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectionType = undefined;
      this._workspaceCustomerId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectionType = value.projectionType;
      this._workspaceCustomerId = value.workspaceCustomerId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // projection_type - computed: false, optional: true, required: false
  private _projectionType?: string; 
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }
  public set projectionType(value: string) {
    this._projectionType = value;
  }
  public resetProjectionType() {
    this._projectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionTypeInput() {
    return this._projectionType;
  }

  // workspace_customer_id - computed: false, optional: true, required: false
  private _workspaceCustomerId?: string; 
  public get workspaceCustomerId() {
    return this.getStringAttribute('workspace_customer_id');
  }
  public set workspaceCustomerId(value: string) {
    this._workspaceCustomerId = value;
  }
  public resetWorkspaceCustomerId() {
    this._workspaceCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCustomerIdInput() {
    return this._workspaceCustomerId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsWorkspaceUsersSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsWorkspaceUsersSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetails {
  /**
  * The asset namespace to apply to all logs ingested through this feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#asset_namespace ChronicleFeed#asset_namespace}
  */
  readonly assetNamespace?: string;
  /**
  * Source Type of the feed.
  * Possible values:
  * GOOGLE_CLOUD_STORAGE
  * HTTP
  * SFTP
  * AMAZON_S3
  * AZURE_BLOBSTORE
  * API
  * AMAZON_SQS
  * PUBSUB
  * AMAZON_KINESIS_FIREHOSE
  * WEBHOOK
  * HTTPS_PUSH_GOOGLE_CLOUD_PUBSUB
  * HTTPS_PUSH_AMAZON_KINESIS_FIREHOSE
  * HTTPS_PUSH_WEBHOOK
  * AZURE_EVENT_HUB
  * GOOGLE_CLOUD_STORAGE_V2
  * AMAZON_S3_V2
  * AMAZON_SQS_V2
  * AZURE_BLOBSTORE_V2
  * GOOGLE_CLOUD_STORAGE_EVENT_DRIVEN Possible values: ["GOOGLE_CLOUD_STORAGE", "HTTP", "SFTP", "AMAZON_S3", "AZURE_BLOBSTORE", "API", "AMAZON_SQS", "PUBSUB", "AMAZON_KINESIS_FIREHOSE", "WEBHOOK", "HTTPS_PUSH_GOOGLE_CLOUD_PUBSUB", "HTTPS_PUSH_AMAZON_KINESIS_FIREHOSE", "HTTPS_PUSH_WEBHOOK", "AZURE_EVENT_HUB", "GOOGLE_CLOUD_STORAGE_V2", "AMAZON_S3_V2", "AMAZON_SQS_V2", "AZURE_BLOBSTORE_V2", "GOOGLE_CLOUD_STORAGE_EVENT_DRIVEN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#feed_source_type ChronicleFeed#feed_source_type}
  */
  readonly feedSourceType?: string;
  /**
  * The ingestion metadata labels to apply to all logs ingested through this
  * feed, and the resulting normalized data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#labels ChronicleFeed#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * LogType.
  * Format:
  * projects/{project}/locations/{location}/instances/{instance}/logTypes/{log_type}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#log_type ChronicleFeed#log_type}
  */
  readonly logType: string;
  /**
  * amazon_kinesis_firehose_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#amazon_kinesis_firehose_settings ChronicleFeed#amazon_kinesis_firehose_settings}
  */
  readonly amazonKinesisFirehoseSettings?: ChronicleFeedDetailsAmazonKinesisFirehoseSettings;
  /**
  * amazon_s3_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#amazon_s3_settings ChronicleFeed#amazon_s3_settings}
  */
  readonly amazonS3Settings?: ChronicleFeedDetailsAmazonS3Settings;
  /**
  * amazon_s3_v2_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#amazon_s3_v2_settings ChronicleFeed#amazon_s3_v2_settings}
  */
  readonly amazonS3V2Settings?: ChronicleFeedDetailsAmazonS3V2Settings;
  /**
  * amazon_sqs_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#amazon_sqs_settings ChronicleFeed#amazon_sqs_settings}
  */
  readonly amazonSqsSettings?: ChronicleFeedDetailsAmazonSqsSettings;
  /**
  * amazon_sqs_v2_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#amazon_sqs_v2_settings ChronicleFeed#amazon_sqs_v2_settings}
  */
  readonly amazonSqsV2Settings?: ChronicleFeedDetailsAmazonSqsV2Settings;
  /**
  * anomali_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#anomali_settings ChronicleFeed#anomali_settings}
  */
  readonly anomaliSettings?: ChronicleFeedDetailsAnomaliSettings;
  /**
  * aws_ec2_hosts_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#aws_ec2_hosts_settings ChronicleFeed#aws_ec2_hosts_settings}
  */
  readonly awsEc2HostsSettings?: ChronicleFeedDetailsAwsEc2HostsSettings;
  /**
  * aws_ec2_instances_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#aws_ec2_instances_settings ChronicleFeed#aws_ec2_instances_settings}
  */
  readonly awsEc2InstancesSettings?: ChronicleFeedDetailsAwsEc2InstancesSettings;
  /**
  * aws_ec2_vpcs_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#aws_ec2_vpcs_settings ChronicleFeed#aws_ec2_vpcs_settings}
  */
  readonly awsEc2VpcsSettings?: ChronicleFeedDetailsAwsEc2VpcsSettings;
  /**
  * aws_iam_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#aws_iam_settings ChronicleFeed#aws_iam_settings}
  */
  readonly awsIamSettings?: ChronicleFeedDetailsAwsIamSettings;
  /**
  * azure_ad_audit_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#azure_ad_audit_settings ChronicleFeed#azure_ad_audit_settings}
  */
  readonly azureAdAuditSettings?: ChronicleFeedDetailsAzureAdAuditSettings;
  /**
  * azure_ad_context_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#azure_ad_context_settings ChronicleFeed#azure_ad_context_settings}
  */
  readonly azureAdContextSettings?: ChronicleFeedDetailsAzureAdContextSettings;
  /**
  * azure_ad_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#azure_ad_settings ChronicleFeed#azure_ad_settings}
  */
  readonly azureAdSettings?: ChronicleFeedDetailsAzureAdSettings;
  /**
  * azure_blob_store_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#azure_blob_store_settings ChronicleFeed#azure_blob_store_settings}
  */
  readonly azureBlobStoreSettings?: ChronicleFeedDetailsAzureBlobStoreSettings;
  /**
  * azure_blob_store_v2_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#azure_blob_store_v2_settings ChronicleFeed#azure_blob_store_v2_settings}
  */
  readonly azureBlobStoreV2Settings?: ChronicleFeedDetailsAzureBlobStoreV2Settings;
  /**
  * azure_event_hub_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#azure_event_hub_settings ChronicleFeed#azure_event_hub_settings}
  */
  readonly azureEventHubSettings?: ChronicleFeedDetailsAzureEventHubSettings;
  /**
  * azure_mdm_intune_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#azure_mdm_intune_settings ChronicleFeed#azure_mdm_intune_settings}
  */
  readonly azureMdmIntuneSettings?: ChronicleFeedDetailsAzureMdmIntuneSettings;
  /**
  * cloud_passage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#cloud_passage_settings ChronicleFeed#cloud_passage_settings}
  */
  readonly cloudPassageSettings?: ChronicleFeedDetailsCloudPassageSettings;
  /**
  * cortex_xdr_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#cortex_xdr_settings ChronicleFeed#cortex_xdr_settings}
  */
  readonly cortexXdrSettings?: ChronicleFeedDetailsCortexXdrSettings;
  /**
  * crowdstrike_alerts_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#crowdstrike_alerts_settings ChronicleFeed#crowdstrike_alerts_settings}
  */
  readonly crowdstrikeAlertsSettings?: ChronicleFeedDetailsCrowdstrikeAlertsSettings;
  /**
  * crowdstrike_detects_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#crowdstrike_detects_settings ChronicleFeed#crowdstrike_detects_settings}
  */
  readonly crowdstrikeDetectsSettings?: ChronicleFeedDetailsCrowdstrikeDetectsSettings;
  /**
  * dummy_log_type_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#dummy_log_type_settings ChronicleFeed#dummy_log_type_settings}
  */
  readonly dummyLogTypeSettings?: ChronicleFeedDetailsDummyLogTypeSettings;
  /**
  * duo_auth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#duo_auth_settings ChronicleFeed#duo_auth_settings}
  */
  readonly duoAuthSettings?: ChronicleFeedDetailsDuoAuthSettings;
  /**
  * duo_user_context_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#duo_user_context_settings ChronicleFeed#duo_user_context_settings}
  */
  readonly duoUserContextSettings?: ChronicleFeedDetailsDuoUserContextSettings;
  /**
  * fox_it_stix_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#fox_it_stix_settings ChronicleFeed#fox_it_stix_settings}
  */
  readonly foxItStixSettings?: ChronicleFeedDetailsFoxItStixSettings;
  /**
  * gcs_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#gcs_settings ChronicleFeed#gcs_settings}
  */
  readonly gcsSettings?: ChronicleFeedDetailsGcsSettings;
  /**
  * gcs_v2_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#gcs_v2_settings ChronicleFeed#gcs_v2_settings}
  */
  readonly gcsV2Settings?: ChronicleFeedDetailsGcsV2Settings;
  /**
  * google_cloud_identity_device_users_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#google_cloud_identity_device_users_settings ChronicleFeed#google_cloud_identity_device_users_settings}
  */
  readonly googleCloudIdentityDeviceUsersSettings?: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettings;
  /**
  * google_cloud_identity_devices_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#google_cloud_identity_devices_settings ChronicleFeed#google_cloud_identity_devices_settings}
  */
  readonly googleCloudIdentityDevicesSettings?: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettings;
  /**
  * google_cloud_storage_event_driven_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#google_cloud_storage_event_driven_settings ChronicleFeed#google_cloud_storage_event_driven_settings}
  */
  readonly googleCloudStorageEventDrivenSettings?: ChronicleFeedDetailsGoogleCloudStorageEventDrivenSettings;
  /**
  * http_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#http_settings ChronicleFeed#http_settings}
  */
  readonly httpSettings?: ChronicleFeedDetailsHttpSettings;
  /**
  * https_push_amazon_kinesis_firehose_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#https_push_amazon_kinesis_firehose_settings ChronicleFeed#https_push_amazon_kinesis_firehose_settings}
  */
  readonly httpsPushAmazonKinesisFirehoseSettings?: ChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettings;
  /**
  * https_push_google_cloud_pubsub_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#https_push_google_cloud_pubsub_settings ChronicleFeed#https_push_google_cloud_pubsub_settings}
  */
  readonly httpsPushGoogleCloudPubsubSettings?: ChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettings;
  /**
  * https_push_webhook_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#https_push_webhook_settings ChronicleFeed#https_push_webhook_settings}
  */
  readonly httpsPushWebhookSettings?: ChronicleFeedDetailsHttpsPushWebhookSettings;
  /**
  * imperva_waf_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#imperva_waf_settings ChronicleFeed#imperva_waf_settings}
  */
  readonly impervaWafSettings?: ChronicleFeedDetailsImpervaWafSettings;
  /**
  * mandiant_ioc_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#mandiant_ioc_settings ChronicleFeed#mandiant_ioc_settings}
  */
  readonly mandiantIocSettings?: ChronicleFeedDetailsMandiantIocSettings;
  /**
  * microsoft_graph_alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#microsoft_graph_alert_settings ChronicleFeed#microsoft_graph_alert_settings}
  */
  readonly microsoftGraphAlertSettings?: ChronicleFeedDetailsMicrosoftGraphAlertSettings;
  /**
  * microsoft_security_center_alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#microsoft_security_center_alert_settings ChronicleFeed#microsoft_security_center_alert_settings}
  */
  readonly microsoftSecurityCenterAlertSettings?: ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettings;
  /**
  * mimecast_mail_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#mimecast_mail_settings ChronicleFeed#mimecast_mail_settings}
  */
  readonly mimecastMailSettings?: ChronicleFeedDetailsMimecastMailSettings;
  /**
  * mimecast_mail_v2_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#mimecast_mail_v2_settings ChronicleFeed#mimecast_mail_v2_settings}
  */
  readonly mimecastMailV2Settings?: ChronicleFeedDetailsMimecastMailV2Settings;
  /**
  * netskope_alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#netskope_alert_settings ChronicleFeed#netskope_alert_settings}
  */
  readonly netskopeAlertSettings?: ChronicleFeedDetailsNetskopeAlertSettings;
  /**
  * netskope_alert_v2_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#netskope_alert_v2_settings ChronicleFeed#netskope_alert_v2_settings}
  */
  readonly netskopeAlertV2Settings?: ChronicleFeedDetailsNetskopeAlertV2Settings;
  /**
  * office365_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#office365_settings ChronicleFeed#office365_settings}
  */
  readonly office365Settings?: ChronicleFeedDetailsOffice365Settings;
  /**
  * okta_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#okta_settings ChronicleFeed#okta_settings}
  */
  readonly oktaSettings?: ChronicleFeedDetailsOktaSettings;
  /**
  * okta_user_context_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#okta_user_context_settings ChronicleFeed#okta_user_context_settings}
  */
  readonly oktaUserContextSettings?: ChronicleFeedDetailsOktaUserContextSettings;
  /**
  * pan_ioc_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#pan_ioc_settings ChronicleFeed#pan_ioc_settings}
  */
  readonly panIocSettings?: ChronicleFeedDetailsPanIocSettings;
  /**
  * pan_prisma_cloud_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#pan_prisma_cloud_settings ChronicleFeed#pan_prisma_cloud_settings}
  */
  readonly panPrismaCloudSettings?: ChronicleFeedDetailsPanPrismaCloudSettings;
  /**
  * proofpoint_mail_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#proofpoint_mail_settings ChronicleFeed#proofpoint_mail_settings}
  */
  readonly proofpointMailSettings?: ChronicleFeedDetailsProofpointMailSettings;
  /**
  * proofpoint_on_demand_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#proofpoint_on_demand_settings ChronicleFeed#proofpoint_on_demand_settings}
  */
  readonly proofpointOnDemandSettings?: ChronicleFeedDetailsProofpointOnDemandSettings;
  /**
  * pubsub_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#pubsub_settings ChronicleFeed#pubsub_settings}
  */
  readonly pubsubSettings?: ChronicleFeedDetailsPubsubSettings;
  /**
  * qualys_scan_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#qualys_scan_settings ChronicleFeed#qualys_scan_settings}
  */
  readonly qualysScanSettings?: ChronicleFeedDetailsQualysScanSettings;
  /**
  * qualys_vm_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#qualys_vm_settings ChronicleFeed#qualys_vm_settings}
  */
  readonly qualysVmSettings?: ChronicleFeedDetailsQualysVmSettings;
  /**
  * rapid7_insight_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#rapid7_insight_settings ChronicleFeed#rapid7_insight_settings}
  */
  readonly rapid7InsightSettings?: ChronicleFeedDetailsRapid7InsightSettings;
  /**
  * recorded_future_ioc_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#recorded_future_ioc_settings ChronicleFeed#recorded_future_ioc_settings}
  */
  readonly recordedFutureIocSettings?: ChronicleFeedDetailsRecordedFutureIocSettings;
  /**
  * rh_isac_ioc_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#rh_isac_ioc_settings ChronicleFeed#rh_isac_ioc_settings}
  */
  readonly rhIsacIocSettings?: ChronicleFeedDetailsRhIsacIocSettings;
  /**
  * salesforce_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#salesforce_settings ChronicleFeed#salesforce_settings}
  */
  readonly salesforceSettings?: ChronicleFeedDetailsSalesforceSettings;
  /**
  * sentinelone_alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#sentinelone_alert_settings ChronicleFeed#sentinelone_alert_settings}
  */
  readonly sentineloneAlertSettings?: ChronicleFeedDetailsSentineloneAlertSettings;
  /**
  * service_now_cmdb_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#service_now_cmdb_settings ChronicleFeed#service_now_cmdb_settings}
  */
  readonly serviceNowCmdbSettings?: ChronicleFeedDetailsServiceNowCmdbSettings;
  /**
  * sftp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#sftp_settings ChronicleFeed#sftp_settings}
  */
  readonly sftpSettings?: ChronicleFeedDetailsSftpSettings;
  /**
  * symantec_event_export_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#symantec_event_export_settings ChronicleFeed#symantec_event_export_settings}
  */
  readonly symantecEventExportSettings?: ChronicleFeedDetailsSymantecEventExportSettings;
  /**
  * thinkst_canary_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#thinkst_canary_settings ChronicleFeed#thinkst_canary_settings}
  */
  readonly thinkstCanarySettings?: ChronicleFeedDetailsThinkstCanarySettings;
  /**
  * threat_connect_ioc_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#threat_connect_ioc_settings ChronicleFeed#threat_connect_ioc_settings}
  */
  readonly threatConnectIocSettings?: ChronicleFeedDetailsThreatConnectIocSettings;
  /**
  * threat_connect_ioc_v3_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#threat_connect_ioc_v3_settings ChronicleFeed#threat_connect_ioc_v3_settings}
  */
  readonly threatConnectIocV3Settings?: ChronicleFeedDetailsThreatConnectIocV3Settings;
  /**
  * trellix_hx_alerts_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#trellix_hx_alerts_settings ChronicleFeed#trellix_hx_alerts_settings}
  */
  readonly trellixHxAlertsSettings?: ChronicleFeedDetailsTrellixHxAlertsSettings;
  /**
  * trellix_hx_bulk_acqs_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#trellix_hx_bulk_acqs_settings ChronicleFeed#trellix_hx_bulk_acqs_settings}
  */
  readonly trellixHxBulkAcqsSettings?: ChronicleFeedDetailsTrellixHxBulkAcqsSettings;
  /**
  * trellix_hx_hosts_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#trellix_hx_hosts_settings ChronicleFeed#trellix_hx_hosts_settings}
  */
  readonly trellixHxHostsSettings?: ChronicleFeedDetailsTrellixHxHostsSettings;
  /**
  * webhook_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#webhook_settings ChronicleFeed#webhook_settings}
  */
  readonly webhookSettings?: ChronicleFeedDetailsWebhookSettings;
  /**
  * workday_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#workday_settings ChronicleFeed#workday_settings}
  */
  readonly workdaySettings?: ChronicleFeedDetailsWorkdaySettings;
  /**
  * workspace_activity_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#workspace_activity_settings ChronicleFeed#workspace_activity_settings}
  */
  readonly workspaceActivitySettings?: ChronicleFeedDetailsWorkspaceActivitySettings;
  /**
  * workspace_alerts_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#workspace_alerts_settings ChronicleFeed#workspace_alerts_settings}
  */
  readonly workspaceAlertsSettings?: ChronicleFeedDetailsWorkspaceAlertsSettings;
  /**
  * workspace_chrome_os_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#workspace_chrome_os_settings ChronicleFeed#workspace_chrome_os_settings}
  */
  readonly workspaceChromeOsSettings?: ChronicleFeedDetailsWorkspaceChromeOsSettings;
  /**
  * workspace_groups_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#workspace_groups_settings ChronicleFeed#workspace_groups_settings}
  */
  readonly workspaceGroupsSettings?: ChronicleFeedDetailsWorkspaceGroupsSettings;
  /**
  * workspace_mobile_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#workspace_mobile_settings ChronicleFeed#workspace_mobile_settings}
  */
  readonly workspaceMobileSettings?: ChronicleFeedDetailsWorkspaceMobileSettings;
  /**
  * workspace_privileges_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#workspace_privileges_settings ChronicleFeed#workspace_privileges_settings}
  */
  readonly workspacePrivilegesSettings?: ChronicleFeedDetailsWorkspacePrivilegesSettings;
  /**
  * workspace_users_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#workspace_users_settings ChronicleFeed#workspace_users_settings}
  */
  readonly workspaceUsersSettings?: ChronicleFeedDetailsWorkspaceUsersSettings;
}

export function chronicleFeedDetailsToTerraform(struct?: ChronicleFeedDetailsOutputReference | ChronicleFeedDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    asset_namespace: cdktn.stringToTerraform(struct!.assetNamespace),
    feed_source_type: cdktn.stringToTerraform(struct!.feedSourceType),
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
    log_type: cdktn.stringToTerraform(struct!.logType),
    amazon_kinesis_firehose_settings: chronicleFeedDetailsAmazonKinesisFirehoseSettingsToTerraform(struct!.amazonKinesisFirehoseSettings),
    amazon_s3_settings: chronicleFeedDetailsAmazonS3SettingsToTerraform(struct!.amazonS3Settings),
    amazon_s3_v2_settings: chronicleFeedDetailsAmazonS3V2SettingsToTerraform(struct!.amazonS3V2Settings),
    amazon_sqs_settings: chronicleFeedDetailsAmazonSqsSettingsToTerraform(struct!.amazonSqsSettings),
    amazon_sqs_v2_settings: chronicleFeedDetailsAmazonSqsV2SettingsToTerraform(struct!.amazonSqsV2Settings),
    anomali_settings: chronicleFeedDetailsAnomaliSettingsToTerraform(struct!.anomaliSettings),
    aws_ec2_hosts_settings: chronicleFeedDetailsAwsEc2HostsSettingsToTerraform(struct!.awsEc2HostsSettings),
    aws_ec2_instances_settings: chronicleFeedDetailsAwsEc2InstancesSettingsToTerraform(struct!.awsEc2InstancesSettings),
    aws_ec2_vpcs_settings: chronicleFeedDetailsAwsEc2VpcsSettingsToTerraform(struct!.awsEc2VpcsSettings),
    aws_iam_settings: chronicleFeedDetailsAwsIamSettingsToTerraform(struct!.awsIamSettings),
    azure_ad_audit_settings: chronicleFeedDetailsAzureAdAuditSettingsToTerraform(struct!.azureAdAuditSettings),
    azure_ad_context_settings: chronicleFeedDetailsAzureAdContextSettingsToTerraform(struct!.azureAdContextSettings),
    azure_ad_settings: chronicleFeedDetailsAzureAdSettingsToTerraform(struct!.azureAdSettings),
    azure_blob_store_settings: chronicleFeedDetailsAzureBlobStoreSettingsToTerraform(struct!.azureBlobStoreSettings),
    azure_blob_store_v2_settings: chronicleFeedDetailsAzureBlobStoreV2SettingsToTerraform(struct!.azureBlobStoreV2Settings),
    azure_event_hub_settings: chronicleFeedDetailsAzureEventHubSettingsToTerraform(struct!.azureEventHubSettings),
    azure_mdm_intune_settings: chronicleFeedDetailsAzureMdmIntuneSettingsToTerraform(struct!.azureMdmIntuneSettings),
    cloud_passage_settings: chronicleFeedDetailsCloudPassageSettingsToTerraform(struct!.cloudPassageSettings),
    cortex_xdr_settings: chronicleFeedDetailsCortexXdrSettingsToTerraform(struct!.cortexXdrSettings),
    crowdstrike_alerts_settings: chronicleFeedDetailsCrowdstrikeAlertsSettingsToTerraform(struct!.crowdstrikeAlertsSettings),
    crowdstrike_detects_settings: chronicleFeedDetailsCrowdstrikeDetectsSettingsToTerraform(struct!.crowdstrikeDetectsSettings),
    dummy_log_type_settings: chronicleFeedDetailsDummyLogTypeSettingsToTerraform(struct!.dummyLogTypeSettings),
    duo_auth_settings: chronicleFeedDetailsDuoAuthSettingsToTerraform(struct!.duoAuthSettings),
    duo_user_context_settings: chronicleFeedDetailsDuoUserContextSettingsToTerraform(struct!.duoUserContextSettings),
    fox_it_stix_settings: chronicleFeedDetailsFoxItStixSettingsToTerraform(struct!.foxItStixSettings),
    gcs_settings: chronicleFeedDetailsGcsSettingsToTerraform(struct!.gcsSettings),
    gcs_v2_settings: chronicleFeedDetailsGcsV2SettingsToTerraform(struct!.gcsV2Settings),
    google_cloud_identity_device_users_settings: chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsToTerraform(struct!.googleCloudIdentityDeviceUsersSettings),
    google_cloud_identity_devices_settings: chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsToTerraform(struct!.googleCloudIdentityDevicesSettings),
    google_cloud_storage_event_driven_settings: chronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsToTerraform(struct!.googleCloudStorageEventDrivenSettings),
    http_settings: chronicleFeedDetailsHttpSettingsToTerraform(struct!.httpSettings),
    https_push_amazon_kinesis_firehose_settings: chronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsToTerraform(struct!.httpsPushAmazonKinesisFirehoseSettings),
    https_push_google_cloud_pubsub_settings: chronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsToTerraform(struct!.httpsPushGoogleCloudPubsubSettings),
    https_push_webhook_settings: chronicleFeedDetailsHttpsPushWebhookSettingsToTerraform(struct!.httpsPushWebhookSettings),
    imperva_waf_settings: chronicleFeedDetailsImpervaWafSettingsToTerraform(struct!.impervaWafSettings),
    mandiant_ioc_settings: chronicleFeedDetailsMandiantIocSettingsToTerraform(struct!.mandiantIocSettings),
    microsoft_graph_alert_settings: chronicleFeedDetailsMicrosoftGraphAlertSettingsToTerraform(struct!.microsoftGraphAlertSettings),
    microsoft_security_center_alert_settings: chronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsToTerraform(struct!.microsoftSecurityCenterAlertSettings),
    mimecast_mail_settings: chronicleFeedDetailsMimecastMailSettingsToTerraform(struct!.mimecastMailSettings),
    mimecast_mail_v2_settings: chronicleFeedDetailsMimecastMailV2SettingsToTerraform(struct!.mimecastMailV2Settings),
    netskope_alert_settings: chronicleFeedDetailsNetskopeAlertSettingsToTerraform(struct!.netskopeAlertSettings),
    netskope_alert_v2_settings: chronicleFeedDetailsNetskopeAlertV2SettingsToTerraform(struct!.netskopeAlertV2Settings),
    office365_settings: chronicleFeedDetailsOffice365SettingsToTerraform(struct!.office365Settings),
    okta_settings: chronicleFeedDetailsOktaSettingsToTerraform(struct!.oktaSettings),
    okta_user_context_settings: chronicleFeedDetailsOktaUserContextSettingsToTerraform(struct!.oktaUserContextSettings),
    pan_ioc_settings: chronicleFeedDetailsPanIocSettingsToTerraform(struct!.panIocSettings),
    pan_prisma_cloud_settings: chronicleFeedDetailsPanPrismaCloudSettingsToTerraform(struct!.panPrismaCloudSettings),
    proofpoint_mail_settings: chronicleFeedDetailsProofpointMailSettingsToTerraform(struct!.proofpointMailSettings),
    proofpoint_on_demand_settings: chronicleFeedDetailsProofpointOnDemandSettingsToTerraform(struct!.proofpointOnDemandSettings),
    pubsub_settings: chronicleFeedDetailsPubsubSettingsToTerraform(struct!.pubsubSettings),
    qualys_scan_settings: chronicleFeedDetailsQualysScanSettingsToTerraform(struct!.qualysScanSettings),
    qualys_vm_settings: chronicleFeedDetailsQualysVmSettingsToTerraform(struct!.qualysVmSettings),
    rapid7_insight_settings: chronicleFeedDetailsRapid7InsightSettingsToTerraform(struct!.rapid7InsightSettings),
    recorded_future_ioc_settings: chronicleFeedDetailsRecordedFutureIocSettingsToTerraform(struct!.recordedFutureIocSettings),
    rh_isac_ioc_settings: chronicleFeedDetailsRhIsacIocSettingsToTerraform(struct!.rhIsacIocSettings),
    salesforce_settings: chronicleFeedDetailsSalesforceSettingsToTerraform(struct!.salesforceSettings),
    sentinelone_alert_settings: chronicleFeedDetailsSentineloneAlertSettingsToTerraform(struct!.sentineloneAlertSettings),
    service_now_cmdb_settings: chronicleFeedDetailsServiceNowCmdbSettingsToTerraform(struct!.serviceNowCmdbSettings),
    sftp_settings: chronicleFeedDetailsSftpSettingsToTerraform(struct!.sftpSettings),
    symantec_event_export_settings: chronicleFeedDetailsSymantecEventExportSettingsToTerraform(struct!.symantecEventExportSettings),
    thinkst_canary_settings: chronicleFeedDetailsThinkstCanarySettingsToTerraform(struct!.thinkstCanarySettings),
    threat_connect_ioc_settings: chronicleFeedDetailsThreatConnectIocSettingsToTerraform(struct!.threatConnectIocSettings),
    threat_connect_ioc_v3_settings: chronicleFeedDetailsThreatConnectIocV3SettingsToTerraform(struct!.threatConnectIocV3Settings),
    trellix_hx_alerts_settings: chronicleFeedDetailsTrellixHxAlertsSettingsToTerraform(struct!.trellixHxAlertsSettings),
    trellix_hx_bulk_acqs_settings: chronicleFeedDetailsTrellixHxBulkAcqsSettingsToTerraform(struct!.trellixHxBulkAcqsSettings),
    trellix_hx_hosts_settings: chronicleFeedDetailsTrellixHxHostsSettingsToTerraform(struct!.trellixHxHostsSettings),
    webhook_settings: chronicleFeedDetailsWebhookSettingsToTerraform(struct!.webhookSettings),
    workday_settings: chronicleFeedDetailsWorkdaySettingsToTerraform(struct!.workdaySettings),
    workspace_activity_settings: chronicleFeedDetailsWorkspaceActivitySettingsToTerraform(struct!.workspaceActivitySettings),
    workspace_alerts_settings: chronicleFeedDetailsWorkspaceAlertsSettingsToTerraform(struct!.workspaceAlertsSettings),
    workspace_chrome_os_settings: chronicleFeedDetailsWorkspaceChromeOsSettingsToTerraform(struct!.workspaceChromeOsSettings),
    workspace_groups_settings: chronicleFeedDetailsWorkspaceGroupsSettingsToTerraform(struct!.workspaceGroupsSettings),
    workspace_mobile_settings: chronicleFeedDetailsWorkspaceMobileSettingsToTerraform(struct!.workspaceMobileSettings),
    workspace_privileges_settings: chronicleFeedDetailsWorkspacePrivilegesSettingsToTerraform(struct!.workspacePrivilegesSettings),
    workspace_users_settings: chronicleFeedDetailsWorkspaceUsersSettingsToTerraform(struct!.workspaceUsersSettings),
  }
}


export function chronicleFeedDetailsToHclTerraform(struct?: ChronicleFeedDetailsOutputReference | ChronicleFeedDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    asset_namespace: {
      value: cdktn.stringToHclTerraform(struct!.assetNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feed_source_type: {
      value: cdktn.stringToHclTerraform(struct!.feedSourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    log_type: {
      value: cdktn.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amazon_kinesis_firehose_settings: {
      value: chronicleFeedDetailsAmazonKinesisFirehoseSettingsToHclTerraform(struct!.amazonKinesisFirehoseSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAmazonKinesisFirehoseSettingsList",
    },
    amazon_s3_settings: {
      value: chronicleFeedDetailsAmazonS3SettingsToHclTerraform(struct!.amazonS3Settings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAmazonS3SettingsList",
    },
    amazon_s3_v2_settings: {
      value: chronicleFeedDetailsAmazonS3V2SettingsToHclTerraform(struct!.amazonS3V2Settings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAmazonS3V2SettingsList",
    },
    amazon_sqs_settings: {
      value: chronicleFeedDetailsAmazonSqsSettingsToHclTerraform(struct!.amazonSqsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAmazonSqsSettingsList",
    },
    amazon_sqs_v2_settings: {
      value: chronicleFeedDetailsAmazonSqsV2SettingsToHclTerraform(struct!.amazonSqsV2Settings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAmazonSqsV2SettingsList",
    },
    anomali_settings: {
      value: chronicleFeedDetailsAnomaliSettingsToHclTerraform(struct!.anomaliSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAnomaliSettingsList",
    },
    aws_ec2_hosts_settings: {
      value: chronicleFeedDetailsAwsEc2HostsSettingsToHclTerraform(struct!.awsEc2HostsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAwsEc2HostsSettingsList",
    },
    aws_ec2_instances_settings: {
      value: chronicleFeedDetailsAwsEc2InstancesSettingsToHclTerraform(struct!.awsEc2InstancesSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAwsEc2InstancesSettingsList",
    },
    aws_ec2_vpcs_settings: {
      value: chronicleFeedDetailsAwsEc2VpcsSettingsToHclTerraform(struct!.awsEc2VpcsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAwsEc2VpcsSettingsList",
    },
    aws_iam_settings: {
      value: chronicleFeedDetailsAwsIamSettingsToHclTerraform(struct!.awsIamSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAwsIamSettingsList",
    },
    azure_ad_audit_settings: {
      value: chronicleFeedDetailsAzureAdAuditSettingsToHclTerraform(struct!.azureAdAuditSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAzureAdAuditSettingsList",
    },
    azure_ad_context_settings: {
      value: chronicleFeedDetailsAzureAdContextSettingsToHclTerraform(struct!.azureAdContextSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAzureAdContextSettingsList",
    },
    azure_ad_settings: {
      value: chronicleFeedDetailsAzureAdSettingsToHclTerraform(struct!.azureAdSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAzureAdSettingsList",
    },
    azure_blob_store_settings: {
      value: chronicleFeedDetailsAzureBlobStoreSettingsToHclTerraform(struct!.azureBlobStoreSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAzureBlobStoreSettingsList",
    },
    azure_blob_store_v2_settings: {
      value: chronicleFeedDetailsAzureBlobStoreV2SettingsToHclTerraform(struct!.azureBlobStoreV2Settings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAzureBlobStoreV2SettingsList",
    },
    azure_event_hub_settings: {
      value: chronicleFeedDetailsAzureEventHubSettingsToHclTerraform(struct!.azureEventHubSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAzureEventHubSettingsList",
    },
    azure_mdm_intune_settings: {
      value: chronicleFeedDetailsAzureMdmIntuneSettingsToHclTerraform(struct!.azureMdmIntuneSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAzureMdmIntuneSettingsList",
    },
    cloud_passage_settings: {
      value: chronicleFeedDetailsCloudPassageSettingsToHclTerraform(struct!.cloudPassageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsCloudPassageSettingsList",
    },
    cortex_xdr_settings: {
      value: chronicleFeedDetailsCortexXdrSettingsToHclTerraform(struct!.cortexXdrSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsCortexXdrSettingsList",
    },
    crowdstrike_alerts_settings: {
      value: chronicleFeedDetailsCrowdstrikeAlertsSettingsToHclTerraform(struct!.crowdstrikeAlertsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsCrowdstrikeAlertsSettingsList",
    },
    crowdstrike_detects_settings: {
      value: chronicleFeedDetailsCrowdstrikeDetectsSettingsToHclTerraform(struct!.crowdstrikeDetectsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsCrowdstrikeDetectsSettingsList",
    },
    dummy_log_type_settings: {
      value: chronicleFeedDetailsDummyLogTypeSettingsToHclTerraform(struct!.dummyLogTypeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsDummyLogTypeSettingsList",
    },
    duo_auth_settings: {
      value: chronicleFeedDetailsDuoAuthSettingsToHclTerraform(struct!.duoAuthSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsDuoAuthSettingsList",
    },
    duo_user_context_settings: {
      value: chronicleFeedDetailsDuoUserContextSettingsToHclTerraform(struct!.duoUserContextSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsDuoUserContextSettingsList",
    },
    fox_it_stix_settings: {
      value: chronicleFeedDetailsFoxItStixSettingsToHclTerraform(struct!.foxItStixSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsFoxItStixSettingsList",
    },
    gcs_settings: {
      value: chronicleFeedDetailsGcsSettingsToHclTerraform(struct!.gcsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsGcsSettingsList",
    },
    gcs_v2_settings: {
      value: chronicleFeedDetailsGcsV2SettingsToHclTerraform(struct!.gcsV2Settings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsGcsV2SettingsList",
    },
    google_cloud_identity_device_users_settings: {
      value: chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsToHclTerraform(struct!.googleCloudIdentityDeviceUsersSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsList",
    },
    google_cloud_identity_devices_settings: {
      value: chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsToHclTerraform(struct!.googleCloudIdentityDevicesSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsList",
    },
    google_cloud_storage_event_driven_settings: {
      value: chronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsToHclTerraform(struct!.googleCloudStorageEventDrivenSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsList",
    },
    http_settings: {
      value: chronicleFeedDetailsHttpSettingsToHclTerraform(struct!.httpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsHttpSettingsList",
    },
    https_push_amazon_kinesis_firehose_settings: {
      value: chronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsToHclTerraform(struct!.httpsPushAmazonKinesisFirehoseSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsList",
    },
    https_push_google_cloud_pubsub_settings: {
      value: chronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsToHclTerraform(struct!.httpsPushGoogleCloudPubsubSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsList",
    },
    https_push_webhook_settings: {
      value: chronicleFeedDetailsHttpsPushWebhookSettingsToHclTerraform(struct!.httpsPushWebhookSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsHttpsPushWebhookSettingsList",
    },
    imperva_waf_settings: {
      value: chronicleFeedDetailsImpervaWafSettingsToHclTerraform(struct!.impervaWafSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsImpervaWafSettingsList",
    },
    mandiant_ioc_settings: {
      value: chronicleFeedDetailsMandiantIocSettingsToHclTerraform(struct!.mandiantIocSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsMandiantIocSettingsList",
    },
    microsoft_graph_alert_settings: {
      value: chronicleFeedDetailsMicrosoftGraphAlertSettingsToHclTerraform(struct!.microsoftGraphAlertSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsMicrosoftGraphAlertSettingsList",
    },
    microsoft_security_center_alert_settings: {
      value: chronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsToHclTerraform(struct!.microsoftSecurityCenterAlertSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsList",
    },
    mimecast_mail_settings: {
      value: chronicleFeedDetailsMimecastMailSettingsToHclTerraform(struct!.mimecastMailSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsMimecastMailSettingsList",
    },
    mimecast_mail_v2_settings: {
      value: chronicleFeedDetailsMimecastMailV2SettingsToHclTerraform(struct!.mimecastMailV2Settings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsMimecastMailV2SettingsList",
    },
    netskope_alert_settings: {
      value: chronicleFeedDetailsNetskopeAlertSettingsToHclTerraform(struct!.netskopeAlertSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsNetskopeAlertSettingsList",
    },
    netskope_alert_v2_settings: {
      value: chronicleFeedDetailsNetskopeAlertV2SettingsToHclTerraform(struct!.netskopeAlertV2Settings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsNetskopeAlertV2SettingsList",
    },
    office365_settings: {
      value: chronicleFeedDetailsOffice365SettingsToHclTerraform(struct!.office365Settings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsOffice365SettingsList",
    },
    okta_settings: {
      value: chronicleFeedDetailsOktaSettingsToHclTerraform(struct!.oktaSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsOktaSettingsList",
    },
    okta_user_context_settings: {
      value: chronicleFeedDetailsOktaUserContextSettingsToHclTerraform(struct!.oktaUserContextSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsOktaUserContextSettingsList",
    },
    pan_ioc_settings: {
      value: chronicleFeedDetailsPanIocSettingsToHclTerraform(struct!.panIocSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsPanIocSettingsList",
    },
    pan_prisma_cloud_settings: {
      value: chronicleFeedDetailsPanPrismaCloudSettingsToHclTerraform(struct!.panPrismaCloudSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsPanPrismaCloudSettingsList",
    },
    proofpoint_mail_settings: {
      value: chronicleFeedDetailsProofpointMailSettingsToHclTerraform(struct!.proofpointMailSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsProofpointMailSettingsList",
    },
    proofpoint_on_demand_settings: {
      value: chronicleFeedDetailsProofpointOnDemandSettingsToHclTerraform(struct!.proofpointOnDemandSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsProofpointOnDemandSettingsList",
    },
    pubsub_settings: {
      value: chronicleFeedDetailsPubsubSettingsToHclTerraform(struct!.pubsubSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsPubsubSettingsList",
    },
    qualys_scan_settings: {
      value: chronicleFeedDetailsQualysScanSettingsToHclTerraform(struct!.qualysScanSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsQualysScanSettingsList",
    },
    qualys_vm_settings: {
      value: chronicleFeedDetailsQualysVmSettingsToHclTerraform(struct!.qualysVmSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsQualysVmSettingsList",
    },
    rapid7_insight_settings: {
      value: chronicleFeedDetailsRapid7InsightSettingsToHclTerraform(struct!.rapid7InsightSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsRapid7InsightSettingsList",
    },
    recorded_future_ioc_settings: {
      value: chronicleFeedDetailsRecordedFutureIocSettingsToHclTerraform(struct!.recordedFutureIocSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsRecordedFutureIocSettingsList",
    },
    rh_isac_ioc_settings: {
      value: chronicleFeedDetailsRhIsacIocSettingsToHclTerraform(struct!.rhIsacIocSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsRhIsacIocSettingsList",
    },
    salesforce_settings: {
      value: chronicleFeedDetailsSalesforceSettingsToHclTerraform(struct!.salesforceSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsSalesforceSettingsList",
    },
    sentinelone_alert_settings: {
      value: chronicleFeedDetailsSentineloneAlertSettingsToHclTerraform(struct!.sentineloneAlertSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsSentineloneAlertSettingsList",
    },
    service_now_cmdb_settings: {
      value: chronicleFeedDetailsServiceNowCmdbSettingsToHclTerraform(struct!.serviceNowCmdbSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsServiceNowCmdbSettingsList",
    },
    sftp_settings: {
      value: chronicleFeedDetailsSftpSettingsToHclTerraform(struct!.sftpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsSftpSettingsList",
    },
    symantec_event_export_settings: {
      value: chronicleFeedDetailsSymantecEventExportSettingsToHclTerraform(struct!.symantecEventExportSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsSymantecEventExportSettingsList",
    },
    thinkst_canary_settings: {
      value: chronicleFeedDetailsThinkstCanarySettingsToHclTerraform(struct!.thinkstCanarySettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsThinkstCanarySettingsList",
    },
    threat_connect_ioc_settings: {
      value: chronicleFeedDetailsThreatConnectIocSettingsToHclTerraform(struct!.threatConnectIocSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsThreatConnectIocSettingsList",
    },
    threat_connect_ioc_v3_settings: {
      value: chronicleFeedDetailsThreatConnectIocV3SettingsToHclTerraform(struct!.threatConnectIocV3Settings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsThreatConnectIocV3SettingsList",
    },
    trellix_hx_alerts_settings: {
      value: chronicleFeedDetailsTrellixHxAlertsSettingsToHclTerraform(struct!.trellixHxAlertsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsTrellixHxAlertsSettingsList",
    },
    trellix_hx_bulk_acqs_settings: {
      value: chronicleFeedDetailsTrellixHxBulkAcqsSettingsToHclTerraform(struct!.trellixHxBulkAcqsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsTrellixHxBulkAcqsSettingsList",
    },
    trellix_hx_hosts_settings: {
      value: chronicleFeedDetailsTrellixHxHostsSettingsToHclTerraform(struct!.trellixHxHostsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsTrellixHxHostsSettingsList",
    },
    webhook_settings: {
      value: chronicleFeedDetailsWebhookSettingsToHclTerraform(struct!.webhookSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWebhookSettingsList",
    },
    workday_settings: {
      value: chronicleFeedDetailsWorkdaySettingsToHclTerraform(struct!.workdaySettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkdaySettingsList",
    },
    workspace_activity_settings: {
      value: chronicleFeedDetailsWorkspaceActivitySettingsToHclTerraform(struct!.workspaceActivitySettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceActivitySettingsList",
    },
    workspace_alerts_settings: {
      value: chronicleFeedDetailsWorkspaceAlertsSettingsToHclTerraform(struct!.workspaceAlertsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceAlertsSettingsList",
    },
    workspace_chrome_os_settings: {
      value: chronicleFeedDetailsWorkspaceChromeOsSettingsToHclTerraform(struct!.workspaceChromeOsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceChromeOsSettingsList",
    },
    workspace_groups_settings: {
      value: chronicleFeedDetailsWorkspaceGroupsSettingsToHclTerraform(struct!.workspaceGroupsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceGroupsSettingsList",
    },
    workspace_mobile_settings: {
      value: chronicleFeedDetailsWorkspaceMobileSettingsToHclTerraform(struct!.workspaceMobileSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceMobileSettingsList",
    },
    workspace_privileges_settings: {
      value: chronicleFeedDetailsWorkspacePrivilegesSettingsToHclTerraform(struct!.workspacePrivilegesSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspacePrivilegesSettingsList",
    },
    workspace_users_settings: {
      value: chronicleFeedDetailsWorkspaceUsersSettingsToHclTerraform(struct!.workspaceUsersSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsWorkspaceUsersSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetNamespace = this._assetNamespace;
    }
    if (this._feedSourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedSourceType = this._feedSourceType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._amazonKinesisFirehoseSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonKinesisFirehoseSettings = this._amazonKinesisFirehoseSettings?.internalValue;
    }
    if (this._amazonS3Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonS3Settings = this._amazonS3Settings?.internalValue;
    }
    if (this._amazonS3V2Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonS3V2Settings = this._amazonS3V2Settings?.internalValue;
    }
    if (this._amazonSqsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonSqsSettings = this._amazonSqsSettings?.internalValue;
    }
    if (this._amazonSqsV2Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonSqsV2Settings = this._amazonSqsV2Settings?.internalValue;
    }
    if (this._anomaliSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anomaliSettings = this._anomaliSettings?.internalValue;
    }
    if (this._awsEc2HostsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEc2HostsSettings = this._awsEc2HostsSettings?.internalValue;
    }
    if (this._awsEc2InstancesSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEc2InstancesSettings = this._awsEc2InstancesSettings?.internalValue;
    }
    if (this._awsEc2VpcsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEc2VpcsSettings = this._awsEc2VpcsSettings?.internalValue;
    }
    if (this._awsIamSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIamSettings = this._awsIamSettings?.internalValue;
    }
    if (this._azureAdAuditSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAdAuditSettings = this._azureAdAuditSettings?.internalValue;
    }
    if (this._azureAdContextSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAdContextSettings = this._azureAdContextSettings?.internalValue;
    }
    if (this._azureAdSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAdSettings = this._azureAdSettings?.internalValue;
    }
    if (this._azureBlobStoreSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlobStoreSettings = this._azureBlobStoreSettings?.internalValue;
    }
    if (this._azureBlobStoreV2Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlobStoreV2Settings = this._azureBlobStoreV2Settings?.internalValue;
    }
    if (this._azureEventHubSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureEventHubSettings = this._azureEventHubSettings?.internalValue;
    }
    if (this._azureMdmIntuneSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureMdmIntuneSettings = this._azureMdmIntuneSettings?.internalValue;
    }
    if (this._cloudPassageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudPassageSettings = this._cloudPassageSettings?.internalValue;
    }
    if (this._cortexXdrSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cortexXdrSettings = this._cortexXdrSettings?.internalValue;
    }
    if (this._crowdstrikeAlertsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crowdstrikeAlertsSettings = this._crowdstrikeAlertsSettings?.internalValue;
    }
    if (this._crowdstrikeDetectsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crowdstrikeDetectsSettings = this._crowdstrikeDetectsSettings?.internalValue;
    }
    if (this._dummyLogTypeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummyLogTypeSettings = this._dummyLogTypeSettings?.internalValue;
    }
    if (this._duoAuthSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duoAuthSettings = this._duoAuthSettings?.internalValue;
    }
    if (this._duoUserContextSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duoUserContextSettings = this._duoUserContextSettings?.internalValue;
    }
    if (this._foxItStixSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foxItStixSettings = this._foxItStixSettings?.internalValue;
    }
    if (this._gcsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsSettings = this._gcsSettings?.internalValue;
    }
    if (this._gcsV2Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsV2Settings = this._gcsV2Settings?.internalValue;
    }
    if (this._googleCloudIdentityDeviceUsersSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudIdentityDeviceUsersSettings = this._googleCloudIdentityDeviceUsersSettings?.internalValue;
    }
    if (this._googleCloudIdentityDevicesSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudIdentityDevicesSettings = this._googleCloudIdentityDevicesSettings?.internalValue;
    }
    if (this._googleCloudStorageEventDrivenSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageEventDrivenSettings = this._googleCloudStorageEventDrivenSettings?.internalValue;
    }
    if (this._httpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSettings = this._httpSettings?.internalValue;
    }
    if (this._httpsPushAmazonKinesisFirehoseSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPushAmazonKinesisFirehoseSettings = this._httpsPushAmazonKinesisFirehoseSettings?.internalValue;
    }
    if (this._httpsPushGoogleCloudPubsubSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPushGoogleCloudPubsubSettings = this._httpsPushGoogleCloudPubsubSettings?.internalValue;
    }
    if (this._httpsPushWebhookSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPushWebhookSettings = this._httpsPushWebhookSettings?.internalValue;
    }
    if (this._impervaWafSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.impervaWafSettings = this._impervaWafSettings?.internalValue;
    }
    if (this._mandiantIocSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandiantIocSettings = this._mandiantIocSettings?.internalValue;
    }
    if (this._microsoftGraphAlertSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftGraphAlertSettings = this._microsoftGraphAlertSettings?.internalValue;
    }
    if (this._microsoftSecurityCenterAlertSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftSecurityCenterAlertSettings = this._microsoftSecurityCenterAlertSettings?.internalValue;
    }
    if (this._mimecastMailSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimecastMailSettings = this._mimecastMailSettings?.internalValue;
    }
    if (this._mimecastMailV2Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimecastMailV2Settings = this._mimecastMailV2Settings?.internalValue;
    }
    if (this._netskopeAlertSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netskopeAlertSettings = this._netskopeAlertSettings?.internalValue;
    }
    if (this._netskopeAlertV2Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netskopeAlertV2Settings = this._netskopeAlertV2Settings?.internalValue;
    }
    if (this._office365Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.office365Settings = this._office365Settings?.internalValue;
    }
    if (this._oktaSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaSettings = this._oktaSettings?.internalValue;
    }
    if (this._oktaUserContextSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaUserContextSettings = this._oktaUserContextSettings?.internalValue;
    }
    if (this._panIocSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panIocSettings = this._panIocSettings?.internalValue;
    }
    if (this._panPrismaCloudSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panPrismaCloudSettings = this._panPrismaCloudSettings?.internalValue;
    }
    if (this._proofpointMailSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proofpointMailSettings = this._proofpointMailSettings?.internalValue;
    }
    if (this._proofpointOnDemandSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proofpointOnDemandSettings = this._proofpointOnDemandSettings?.internalValue;
    }
    if (this._pubsubSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubSettings = this._pubsubSettings?.internalValue;
    }
    if (this._qualysScanSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualysScanSettings = this._qualysScanSettings?.internalValue;
    }
    if (this._qualysVmSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualysVmSettings = this._qualysVmSettings?.internalValue;
    }
    if (this._rapid7InsightSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rapid7InsightSettings = this._rapid7InsightSettings?.internalValue;
    }
    if (this._recordedFutureIocSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordedFutureIocSettings = this._recordedFutureIocSettings?.internalValue;
    }
    if (this._rhIsacIocSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rhIsacIocSettings = this._rhIsacIocSettings?.internalValue;
    }
    if (this._salesforceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceSettings = this._salesforceSettings?.internalValue;
    }
    if (this._sentineloneAlertSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentineloneAlertSettings = this._sentineloneAlertSettings?.internalValue;
    }
    if (this._serviceNowCmdbSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNowCmdbSettings = this._serviceNowCmdbSettings?.internalValue;
    }
    if (this._sftpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpSettings = this._sftpSettings?.internalValue;
    }
    if (this._symantecEventExportSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.symantecEventExportSettings = this._symantecEventExportSettings?.internalValue;
    }
    if (this._thinkstCanarySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thinkstCanarySettings = this._thinkstCanarySettings?.internalValue;
    }
    if (this._threatConnectIocSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatConnectIocSettings = this._threatConnectIocSettings?.internalValue;
    }
    if (this._threatConnectIocV3Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatConnectIocV3Settings = this._threatConnectIocV3Settings?.internalValue;
    }
    if (this._trellixHxAlertsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trellixHxAlertsSettings = this._trellixHxAlertsSettings?.internalValue;
    }
    if (this._trellixHxBulkAcqsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trellixHxBulkAcqsSettings = this._trellixHxBulkAcqsSettings?.internalValue;
    }
    if (this._trellixHxHostsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trellixHxHostsSettings = this._trellixHxHostsSettings?.internalValue;
    }
    if (this._webhookSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSettings = this._webhookSettings?.internalValue;
    }
    if (this._workdaySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workdaySettings = this._workdaySettings?.internalValue;
    }
    if (this._workspaceActivitySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceActivitySettings = this._workspaceActivitySettings?.internalValue;
    }
    if (this._workspaceAlertsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceAlertsSettings = this._workspaceAlertsSettings?.internalValue;
    }
    if (this._workspaceChromeOsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceChromeOsSettings = this._workspaceChromeOsSettings?.internalValue;
    }
    if (this._workspaceGroupsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceGroupsSettings = this._workspaceGroupsSettings?.internalValue;
    }
    if (this._workspaceMobileSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceMobileSettings = this._workspaceMobileSettings?.internalValue;
    }
    if (this._workspacePrivilegesSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspacePrivilegesSettings = this._workspacePrivilegesSettings?.internalValue;
    }
    if (this._workspaceUsersSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceUsersSettings = this._workspaceUsersSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assetNamespace = undefined;
      this._feedSourceType = undefined;
      this._labels = undefined;
      this._logType = undefined;
      this._amazonKinesisFirehoseSettings.internalValue = undefined;
      this._amazonS3Settings.internalValue = undefined;
      this._amazonS3V2Settings.internalValue = undefined;
      this._amazonSqsSettings.internalValue = undefined;
      this._amazonSqsV2Settings.internalValue = undefined;
      this._anomaliSettings.internalValue = undefined;
      this._awsEc2HostsSettings.internalValue = undefined;
      this._awsEc2InstancesSettings.internalValue = undefined;
      this._awsEc2VpcsSettings.internalValue = undefined;
      this._awsIamSettings.internalValue = undefined;
      this._azureAdAuditSettings.internalValue = undefined;
      this._azureAdContextSettings.internalValue = undefined;
      this._azureAdSettings.internalValue = undefined;
      this._azureBlobStoreSettings.internalValue = undefined;
      this._azureBlobStoreV2Settings.internalValue = undefined;
      this._azureEventHubSettings.internalValue = undefined;
      this._azureMdmIntuneSettings.internalValue = undefined;
      this._cloudPassageSettings.internalValue = undefined;
      this._cortexXdrSettings.internalValue = undefined;
      this._crowdstrikeAlertsSettings.internalValue = undefined;
      this._crowdstrikeDetectsSettings.internalValue = undefined;
      this._dummyLogTypeSettings.internalValue = undefined;
      this._duoAuthSettings.internalValue = undefined;
      this._duoUserContextSettings.internalValue = undefined;
      this._foxItStixSettings.internalValue = undefined;
      this._gcsSettings.internalValue = undefined;
      this._gcsV2Settings.internalValue = undefined;
      this._googleCloudIdentityDeviceUsersSettings.internalValue = undefined;
      this._googleCloudIdentityDevicesSettings.internalValue = undefined;
      this._googleCloudStorageEventDrivenSettings.internalValue = undefined;
      this._httpSettings.internalValue = undefined;
      this._httpsPushAmazonKinesisFirehoseSettings.internalValue = undefined;
      this._httpsPushGoogleCloudPubsubSettings.internalValue = undefined;
      this._httpsPushWebhookSettings.internalValue = undefined;
      this._impervaWafSettings.internalValue = undefined;
      this._mandiantIocSettings.internalValue = undefined;
      this._microsoftGraphAlertSettings.internalValue = undefined;
      this._microsoftSecurityCenterAlertSettings.internalValue = undefined;
      this._mimecastMailSettings.internalValue = undefined;
      this._mimecastMailV2Settings.internalValue = undefined;
      this._netskopeAlertSettings.internalValue = undefined;
      this._netskopeAlertV2Settings.internalValue = undefined;
      this._office365Settings.internalValue = undefined;
      this._oktaSettings.internalValue = undefined;
      this._oktaUserContextSettings.internalValue = undefined;
      this._panIocSettings.internalValue = undefined;
      this._panPrismaCloudSettings.internalValue = undefined;
      this._proofpointMailSettings.internalValue = undefined;
      this._proofpointOnDemandSettings.internalValue = undefined;
      this._pubsubSettings.internalValue = undefined;
      this._qualysScanSettings.internalValue = undefined;
      this._qualysVmSettings.internalValue = undefined;
      this._rapid7InsightSettings.internalValue = undefined;
      this._recordedFutureIocSettings.internalValue = undefined;
      this._rhIsacIocSettings.internalValue = undefined;
      this._salesforceSettings.internalValue = undefined;
      this._sentineloneAlertSettings.internalValue = undefined;
      this._serviceNowCmdbSettings.internalValue = undefined;
      this._sftpSettings.internalValue = undefined;
      this._symantecEventExportSettings.internalValue = undefined;
      this._thinkstCanarySettings.internalValue = undefined;
      this._threatConnectIocSettings.internalValue = undefined;
      this._threatConnectIocV3Settings.internalValue = undefined;
      this._trellixHxAlertsSettings.internalValue = undefined;
      this._trellixHxBulkAcqsSettings.internalValue = undefined;
      this._trellixHxHostsSettings.internalValue = undefined;
      this._webhookSettings.internalValue = undefined;
      this._workdaySettings.internalValue = undefined;
      this._workspaceActivitySettings.internalValue = undefined;
      this._workspaceAlertsSettings.internalValue = undefined;
      this._workspaceChromeOsSettings.internalValue = undefined;
      this._workspaceGroupsSettings.internalValue = undefined;
      this._workspaceMobileSettings.internalValue = undefined;
      this._workspacePrivilegesSettings.internalValue = undefined;
      this._workspaceUsersSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assetNamespace = value.assetNamespace;
      this._feedSourceType = value.feedSourceType;
      this._labels = value.labels;
      this._logType = value.logType;
      this._amazonKinesisFirehoseSettings.internalValue = value.amazonKinesisFirehoseSettings;
      this._amazonS3Settings.internalValue = value.amazonS3Settings;
      this._amazonS3V2Settings.internalValue = value.amazonS3V2Settings;
      this._amazonSqsSettings.internalValue = value.amazonSqsSettings;
      this._amazonSqsV2Settings.internalValue = value.amazonSqsV2Settings;
      this._anomaliSettings.internalValue = value.anomaliSettings;
      this._awsEc2HostsSettings.internalValue = value.awsEc2HostsSettings;
      this._awsEc2InstancesSettings.internalValue = value.awsEc2InstancesSettings;
      this._awsEc2VpcsSettings.internalValue = value.awsEc2VpcsSettings;
      this._awsIamSettings.internalValue = value.awsIamSettings;
      this._azureAdAuditSettings.internalValue = value.azureAdAuditSettings;
      this._azureAdContextSettings.internalValue = value.azureAdContextSettings;
      this._azureAdSettings.internalValue = value.azureAdSettings;
      this._azureBlobStoreSettings.internalValue = value.azureBlobStoreSettings;
      this._azureBlobStoreV2Settings.internalValue = value.azureBlobStoreV2Settings;
      this._azureEventHubSettings.internalValue = value.azureEventHubSettings;
      this._azureMdmIntuneSettings.internalValue = value.azureMdmIntuneSettings;
      this._cloudPassageSettings.internalValue = value.cloudPassageSettings;
      this._cortexXdrSettings.internalValue = value.cortexXdrSettings;
      this._crowdstrikeAlertsSettings.internalValue = value.crowdstrikeAlertsSettings;
      this._crowdstrikeDetectsSettings.internalValue = value.crowdstrikeDetectsSettings;
      this._dummyLogTypeSettings.internalValue = value.dummyLogTypeSettings;
      this._duoAuthSettings.internalValue = value.duoAuthSettings;
      this._duoUserContextSettings.internalValue = value.duoUserContextSettings;
      this._foxItStixSettings.internalValue = value.foxItStixSettings;
      this._gcsSettings.internalValue = value.gcsSettings;
      this._gcsV2Settings.internalValue = value.gcsV2Settings;
      this._googleCloudIdentityDeviceUsersSettings.internalValue = value.googleCloudIdentityDeviceUsersSettings;
      this._googleCloudIdentityDevicesSettings.internalValue = value.googleCloudIdentityDevicesSettings;
      this._googleCloudStorageEventDrivenSettings.internalValue = value.googleCloudStorageEventDrivenSettings;
      this._httpSettings.internalValue = value.httpSettings;
      this._httpsPushAmazonKinesisFirehoseSettings.internalValue = value.httpsPushAmazonKinesisFirehoseSettings;
      this._httpsPushGoogleCloudPubsubSettings.internalValue = value.httpsPushGoogleCloudPubsubSettings;
      this._httpsPushWebhookSettings.internalValue = value.httpsPushWebhookSettings;
      this._impervaWafSettings.internalValue = value.impervaWafSettings;
      this._mandiantIocSettings.internalValue = value.mandiantIocSettings;
      this._microsoftGraphAlertSettings.internalValue = value.microsoftGraphAlertSettings;
      this._microsoftSecurityCenterAlertSettings.internalValue = value.microsoftSecurityCenterAlertSettings;
      this._mimecastMailSettings.internalValue = value.mimecastMailSettings;
      this._mimecastMailV2Settings.internalValue = value.mimecastMailV2Settings;
      this._netskopeAlertSettings.internalValue = value.netskopeAlertSettings;
      this._netskopeAlertV2Settings.internalValue = value.netskopeAlertV2Settings;
      this._office365Settings.internalValue = value.office365Settings;
      this._oktaSettings.internalValue = value.oktaSettings;
      this._oktaUserContextSettings.internalValue = value.oktaUserContextSettings;
      this._panIocSettings.internalValue = value.panIocSettings;
      this._panPrismaCloudSettings.internalValue = value.panPrismaCloudSettings;
      this._proofpointMailSettings.internalValue = value.proofpointMailSettings;
      this._proofpointOnDemandSettings.internalValue = value.proofpointOnDemandSettings;
      this._pubsubSettings.internalValue = value.pubsubSettings;
      this._qualysScanSettings.internalValue = value.qualysScanSettings;
      this._qualysVmSettings.internalValue = value.qualysVmSettings;
      this._rapid7InsightSettings.internalValue = value.rapid7InsightSettings;
      this._recordedFutureIocSettings.internalValue = value.recordedFutureIocSettings;
      this._rhIsacIocSettings.internalValue = value.rhIsacIocSettings;
      this._salesforceSettings.internalValue = value.salesforceSettings;
      this._sentineloneAlertSettings.internalValue = value.sentineloneAlertSettings;
      this._serviceNowCmdbSettings.internalValue = value.serviceNowCmdbSettings;
      this._sftpSettings.internalValue = value.sftpSettings;
      this._symantecEventExportSettings.internalValue = value.symantecEventExportSettings;
      this._thinkstCanarySettings.internalValue = value.thinkstCanarySettings;
      this._threatConnectIocSettings.internalValue = value.threatConnectIocSettings;
      this._threatConnectIocV3Settings.internalValue = value.threatConnectIocV3Settings;
      this._trellixHxAlertsSettings.internalValue = value.trellixHxAlertsSettings;
      this._trellixHxBulkAcqsSettings.internalValue = value.trellixHxBulkAcqsSettings;
      this._trellixHxHostsSettings.internalValue = value.trellixHxHostsSettings;
      this._webhookSettings.internalValue = value.webhookSettings;
      this._workdaySettings.internalValue = value.workdaySettings;
      this._workspaceActivitySettings.internalValue = value.workspaceActivitySettings;
      this._workspaceAlertsSettings.internalValue = value.workspaceAlertsSettings;
      this._workspaceChromeOsSettings.internalValue = value.workspaceChromeOsSettings;
      this._workspaceGroupsSettings.internalValue = value.workspaceGroupsSettings;
      this._workspaceMobileSettings.internalValue = value.workspaceMobileSettings;
      this._workspacePrivilegesSettings.internalValue = value.workspacePrivilegesSettings;
      this._workspaceUsersSettings.internalValue = value.workspaceUsersSettings;
    }
  }

  // asset_namespace - computed: false, optional: true, required: false
  private _assetNamespace?: string; 
  public get assetNamespace() {
    return this.getStringAttribute('asset_namespace');
  }
  public set assetNamespace(value: string) {
    this._assetNamespace = value;
  }
  public resetAssetNamespace() {
    this._assetNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetNamespaceInput() {
    return this._assetNamespace;
  }

  // feed_source_type - computed: false, optional: true, required: false
  private _feedSourceType?: string; 
  public get feedSourceType() {
    return this.getStringAttribute('feed_source_type');
  }
  public set feedSourceType(value: string) {
    this._feedSourceType = value;
  }
  public resetFeedSourceType() {
    this._feedSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedSourceTypeInput() {
    return this._feedSourceType;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // log_type - computed: false, optional: false, required: true
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // sts_migration_readiness - computed: true, optional: false, required: false
  public get stsMigrationReadiness() {
    return this.getStringAttribute('sts_migration_readiness');
  }

  // amazon_kinesis_firehose_settings - computed: false, optional: true, required: false
  private _amazonKinesisFirehoseSettings = new ChronicleFeedDetailsAmazonKinesisFirehoseSettingsOutputReference(this, "amazon_kinesis_firehose_settings");
  public get amazonKinesisFirehoseSettings() {
    return this._amazonKinesisFirehoseSettings;
  }
  public putAmazonKinesisFirehoseSettings(value: ChronicleFeedDetailsAmazonKinesisFirehoseSettings) {
    this._amazonKinesisFirehoseSettings.internalValue = value;
  }
  public resetAmazonKinesisFirehoseSettings() {
    this._amazonKinesisFirehoseSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonKinesisFirehoseSettingsInput() {
    return this._amazonKinesisFirehoseSettings.internalValue;
  }

  // amazon_s3_settings - computed: false, optional: true, required: false
  private _amazonS3Settings = new ChronicleFeedDetailsAmazonS3SettingsOutputReference(this, "amazon_s3_settings");
  public get amazonS3Settings() {
    return this._amazonS3Settings;
  }
  public putAmazonS3Settings(value: ChronicleFeedDetailsAmazonS3Settings) {
    this._amazonS3Settings.internalValue = value;
  }
  public resetAmazonS3Settings() {
    this._amazonS3Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonS3SettingsInput() {
    return this._amazonS3Settings.internalValue;
  }

  // amazon_s3_v2_settings - computed: false, optional: true, required: false
  private _amazonS3V2Settings = new ChronicleFeedDetailsAmazonS3V2SettingsOutputReference(this, "amazon_s3_v2_settings");
  public get amazonS3V2Settings() {
    return this._amazonS3V2Settings;
  }
  public putAmazonS3V2Settings(value: ChronicleFeedDetailsAmazonS3V2Settings) {
    this._amazonS3V2Settings.internalValue = value;
  }
  public resetAmazonS3V2Settings() {
    this._amazonS3V2Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonS3V2SettingsInput() {
    return this._amazonS3V2Settings.internalValue;
  }

  // amazon_sqs_settings - computed: false, optional: true, required: false
  private _amazonSqsSettings = new ChronicleFeedDetailsAmazonSqsSettingsOutputReference(this, "amazon_sqs_settings");
  public get amazonSqsSettings() {
    return this._amazonSqsSettings;
  }
  public putAmazonSqsSettings(value: ChronicleFeedDetailsAmazonSqsSettings) {
    this._amazonSqsSettings.internalValue = value;
  }
  public resetAmazonSqsSettings() {
    this._amazonSqsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonSqsSettingsInput() {
    return this._amazonSqsSettings.internalValue;
  }

  // amazon_sqs_v2_settings - computed: false, optional: true, required: false
  private _amazonSqsV2Settings = new ChronicleFeedDetailsAmazonSqsV2SettingsOutputReference(this, "amazon_sqs_v2_settings");
  public get amazonSqsV2Settings() {
    return this._amazonSqsV2Settings;
  }
  public putAmazonSqsV2Settings(value: ChronicleFeedDetailsAmazonSqsV2Settings) {
    this._amazonSqsV2Settings.internalValue = value;
  }
  public resetAmazonSqsV2Settings() {
    this._amazonSqsV2Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonSqsV2SettingsInput() {
    return this._amazonSqsV2Settings.internalValue;
  }

  // anomali_settings - computed: false, optional: true, required: false
  private _anomaliSettings = new ChronicleFeedDetailsAnomaliSettingsOutputReference(this, "anomali_settings");
  public get anomaliSettings() {
    return this._anomaliSettings;
  }
  public putAnomaliSettings(value: ChronicleFeedDetailsAnomaliSettings) {
    this._anomaliSettings.internalValue = value;
  }
  public resetAnomaliSettings() {
    this._anomaliSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomaliSettingsInput() {
    return this._anomaliSettings.internalValue;
  }

  // aws_ec2_hosts_settings - computed: false, optional: true, required: false
  private _awsEc2HostsSettings = new ChronicleFeedDetailsAwsEc2HostsSettingsOutputReference(this, "aws_ec2_hosts_settings");
  public get awsEc2HostsSettings() {
    return this._awsEc2HostsSettings;
  }
  public putAwsEc2HostsSettings(value: ChronicleFeedDetailsAwsEc2HostsSettings) {
    this._awsEc2HostsSettings.internalValue = value;
  }
  public resetAwsEc2HostsSettings() {
    this._awsEc2HostsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEc2HostsSettingsInput() {
    return this._awsEc2HostsSettings.internalValue;
  }

  // aws_ec2_instances_settings - computed: false, optional: true, required: false
  private _awsEc2InstancesSettings = new ChronicleFeedDetailsAwsEc2InstancesSettingsOutputReference(this, "aws_ec2_instances_settings");
  public get awsEc2InstancesSettings() {
    return this._awsEc2InstancesSettings;
  }
  public putAwsEc2InstancesSettings(value: ChronicleFeedDetailsAwsEc2InstancesSettings) {
    this._awsEc2InstancesSettings.internalValue = value;
  }
  public resetAwsEc2InstancesSettings() {
    this._awsEc2InstancesSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEc2InstancesSettingsInput() {
    return this._awsEc2InstancesSettings.internalValue;
  }

  // aws_ec2_vpcs_settings - computed: false, optional: true, required: false
  private _awsEc2VpcsSettings = new ChronicleFeedDetailsAwsEc2VpcsSettingsOutputReference(this, "aws_ec2_vpcs_settings");
  public get awsEc2VpcsSettings() {
    return this._awsEc2VpcsSettings;
  }
  public putAwsEc2VpcsSettings(value: ChronicleFeedDetailsAwsEc2VpcsSettings) {
    this._awsEc2VpcsSettings.internalValue = value;
  }
  public resetAwsEc2VpcsSettings() {
    this._awsEc2VpcsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEc2VpcsSettingsInput() {
    return this._awsEc2VpcsSettings.internalValue;
  }

  // aws_iam_settings - computed: false, optional: true, required: false
  private _awsIamSettings = new ChronicleFeedDetailsAwsIamSettingsOutputReference(this, "aws_iam_settings");
  public get awsIamSettings() {
    return this._awsIamSettings;
  }
  public putAwsIamSettings(value: ChronicleFeedDetailsAwsIamSettings) {
    this._awsIamSettings.internalValue = value;
  }
  public resetAwsIamSettings() {
    this._awsIamSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamSettingsInput() {
    return this._awsIamSettings.internalValue;
  }

  // azure_ad_audit_settings - computed: false, optional: true, required: false
  private _azureAdAuditSettings = new ChronicleFeedDetailsAzureAdAuditSettingsOutputReference(this, "azure_ad_audit_settings");
  public get azureAdAuditSettings() {
    return this._azureAdAuditSettings;
  }
  public putAzureAdAuditSettings(value: ChronicleFeedDetailsAzureAdAuditSettings) {
    this._azureAdAuditSettings.internalValue = value;
  }
  public resetAzureAdAuditSettings() {
    this._azureAdAuditSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdAuditSettingsInput() {
    return this._azureAdAuditSettings.internalValue;
  }

  // azure_ad_context_settings - computed: false, optional: true, required: false
  private _azureAdContextSettings = new ChronicleFeedDetailsAzureAdContextSettingsOutputReference(this, "azure_ad_context_settings");
  public get azureAdContextSettings() {
    return this._azureAdContextSettings;
  }
  public putAzureAdContextSettings(value: ChronicleFeedDetailsAzureAdContextSettings) {
    this._azureAdContextSettings.internalValue = value;
  }
  public resetAzureAdContextSettings() {
    this._azureAdContextSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdContextSettingsInput() {
    return this._azureAdContextSettings.internalValue;
  }

  // azure_ad_settings - computed: false, optional: true, required: false
  private _azureAdSettings = new ChronicleFeedDetailsAzureAdSettingsOutputReference(this, "azure_ad_settings");
  public get azureAdSettings() {
    return this._azureAdSettings;
  }
  public putAzureAdSettings(value: ChronicleFeedDetailsAzureAdSettings) {
    this._azureAdSettings.internalValue = value;
  }
  public resetAzureAdSettings() {
    this._azureAdSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdSettingsInput() {
    return this._azureAdSettings.internalValue;
  }

  // azure_blob_store_settings - computed: false, optional: true, required: false
  private _azureBlobStoreSettings = new ChronicleFeedDetailsAzureBlobStoreSettingsOutputReference(this, "azure_blob_store_settings");
  public get azureBlobStoreSettings() {
    return this._azureBlobStoreSettings;
  }
  public putAzureBlobStoreSettings(value: ChronicleFeedDetailsAzureBlobStoreSettings) {
    this._azureBlobStoreSettings.internalValue = value;
  }
  public resetAzureBlobStoreSettings() {
    this._azureBlobStoreSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStoreSettingsInput() {
    return this._azureBlobStoreSettings.internalValue;
  }

  // azure_blob_store_v2_settings - computed: false, optional: true, required: false
  private _azureBlobStoreV2Settings = new ChronicleFeedDetailsAzureBlobStoreV2SettingsOutputReference(this, "azure_blob_store_v2_settings");
  public get azureBlobStoreV2Settings() {
    return this._azureBlobStoreV2Settings;
  }
  public putAzureBlobStoreV2Settings(value: ChronicleFeedDetailsAzureBlobStoreV2Settings) {
    this._azureBlobStoreV2Settings.internalValue = value;
  }
  public resetAzureBlobStoreV2Settings() {
    this._azureBlobStoreV2Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStoreV2SettingsInput() {
    return this._azureBlobStoreV2Settings.internalValue;
  }

  // azure_event_hub_settings - computed: false, optional: true, required: false
  private _azureEventHubSettings = new ChronicleFeedDetailsAzureEventHubSettingsOutputReference(this, "azure_event_hub_settings");
  public get azureEventHubSettings() {
    return this._azureEventHubSettings;
  }
  public putAzureEventHubSettings(value: ChronicleFeedDetailsAzureEventHubSettings) {
    this._azureEventHubSettings.internalValue = value;
  }
  public resetAzureEventHubSettings() {
    this._azureEventHubSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEventHubSettingsInput() {
    return this._azureEventHubSettings.internalValue;
  }

  // azure_mdm_intune_settings - computed: false, optional: true, required: false
  private _azureMdmIntuneSettings = new ChronicleFeedDetailsAzureMdmIntuneSettingsOutputReference(this, "azure_mdm_intune_settings");
  public get azureMdmIntuneSettings() {
    return this._azureMdmIntuneSettings;
  }
  public putAzureMdmIntuneSettings(value: ChronicleFeedDetailsAzureMdmIntuneSettings) {
    this._azureMdmIntuneSettings.internalValue = value;
  }
  public resetAzureMdmIntuneSettings() {
    this._azureMdmIntuneSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMdmIntuneSettingsInput() {
    return this._azureMdmIntuneSettings.internalValue;
  }

  // cloud_passage_settings - computed: false, optional: true, required: false
  private _cloudPassageSettings = new ChronicleFeedDetailsCloudPassageSettingsOutputReference(this, "cloud_passage_settings");
  public get cloudPassageSettings() {
    return this._cloudPassageSettings;
  }
  public putCloudPassageSettings(value: ChronicleFeedDetailsCloudPassageSettings) {
    this._cloudPassageSettings.internalValue = value;
  }
  public resetCloudPassageSettings() {
    this._cloudPassageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudPassageSettingsInput() {
    return this._cloudPassageSettings.internalValue;
  }

  // cortex_xdr_settings - computed: false, optional: true, required: false
  private _cortexXdrSettings = new ChronicleFeedDetailsCortexXdrSettingsOutputReference(this, "cortex_xdr_settings");
  public get cortexXdrSettings() {
    return this._cortexXdrSettings;
  }
  public putCortexXdrSettings(value: ChronicleFeedDetailsCortexXdrSettings) {
    this._cortexXdrSettings.internalValue = value;
  }
  public resetCortexXdrSettings() {
    this._cortexXdrSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cortexXdrSettingsInput() {
    return this._cortexXdrSettings.internalValue;
  }

  // crowdstrike_alerts_settings - computed: false, optional: true, required: false
  private _crowdstrikeAlertsSettings = new ChronicleFeedDetailsCrowdstrikeAlertsSettingsOutputReference(this, "crowdstrike_alerts_settings");
  public get crowdstrikeAlertsSettings() {
    return this._crowdstrikeAlertsSettings;
  }
  public putCrowdstrikeAlertsSettings(value: ChronicleFeedDetailsCrowdstrikeAlertsSettings) {
    this._crowdstrikeAlertsSettings.internalValue = value;
  }
  public resetCrowdstrikeAlertsSettings() {
    this._crowdstrikeAlertsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crowdstrikeAlertsSettingsInput() {
    return this._crowdstrikeAlertsSettings.internalValue;
  }

  // crowdstrike_detects_settings - computed: false, optional: true, required: false
  private _crowdstrikeDetectsSettings = new ChronicleFeedDetailsCrowdstrikeDetectsSettingsOutputReference(this, "crowdstrike_detects_settings");
  public get crowdstrikeDetectsSettings() {
    return this._crowdstrikeDetectsSettings;
  }
  public putCrowdstrikeDetectsSettings(value: ChronicleFeedDetailsCrowdstrikeDetectsSettings) {
    this._crowdstrikeDetectsSettings.internalValue = value;
  }
  public resetCrowdstrikeDetectsSettings() {
    this._crowdstrikeDetectsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crowdstrikeDetectsSettingsInput() {
    return this._crowdstrikeDetectsSettings.internalValue;
  }

  // dummy_log_type_settings - computed: false, optional: true, required: false
  private _dummyLogTypeSettings = new ChronicleFeedDetailsDummyLogTypeSettingsOutputReference(this, "dummy_log_type_settings");
  public get dummyLogTypeSettings() {
    return this._dummyLogTypeSettings;
  }
  public putDummyLogTypeSettings(value: ChronicleFeedDetailsDummyLogTypeSettings) {
    this._dummyLogTypeSettings.internalValue = value;
  }
  public resetDummyLogTypeSettings() {
    this._dummyLogTypeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyLogTypeSettingsInput() {
    return this._dummyLogTypeSettings.internalValue;
  }

  // duo_auth_settings - computed: false, optional: true, required: false
  private _duoAuthSettings = new ChronicleFeedDetailsDuoAuthSettingsOutputReference(this, "duo_auth_settings");
  public get duoAuthSettings() {
    return this._duoAuthSettings;
  }
  public putDuoAuthSettings(value: ChronicleFeedDetailsDuoAuthSettings) {
    this._duoAuthSettings.internalValue = value;
  }
  public resetDuoAuthSettings() {
    this._duoAuthSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duoAuthSettingsInput() {
    return this._duoAuthSettings.internalValue;
  }

  // duo_user_context_settings - computed: false, optional: true, required: false
  private _duoUserContextSettings = new ChronicleFeedDetailsDuoUserContextSettingsOutputReference(this, "duo_user_context_settings");
  public get duoUserContextSettings() {
    return this._duoUserContextSettings;
  }
  public putDuoUserContextSettings(value: ChronicleFeedDetailsDuoUserContextSettings) {
    this._duoUserContextSettings.internalValue = value;
  }
  public resetDuoUserContextSettings() {
    this._duoUserContextSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duoUserContextSettingsInput() {
    return this._duoUserContextSettings.internalValue;
  }

  // fox_it_stix_settings - computed: false, optional: true, required: false
  private _foxItStixSettings = new ChronicleFeedDetailsFoxItStixSettingsOutputReference(this, "fox_it_stix_settings");
  public get foxItStixSettings() {
    return this._foxItStixSettings;
  }
  public putFoxItStixSettings(value: ChronicleFeedDetailsFoxItStixSettings) {
    this._foxItStixSettings.internalValue = value;
  }
  public resetFoxItStixSettings() {
    this._foxItStixSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foxItStixSettingsInput() {
    return this._foxItStixSettings.internalValue;
  }

  // gcs_settings - computed: false, optional: true, required: false
  private _gcsSettings = new ChronicleFeedDetailsGcsSettingsOutputReference(this, "gcs_settings");
  public get gcsSettings() {
    return this._gcsSettings;
  }
  public putGcsSettings(value: ChronicleFeedDetailsGcsSettings) {
    this._gcsSettings.internalValue = value;
  }
  public resetGcsSettings() {
    this._gcsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsSettingsInput() {
    return this._gcsSettings.internalValue;
  }

  // gcs_v2_settings - computed: false, optional: true, required: false
  private _gcsV2Settings = new ChronicleFeedDetailsGcsV2SettingsOutputReference(this, "gcs_v2_settings");
  public get gcsV2Settings() {
    return this._gcsV2Settings;
  }
  public putGcsV2Settings(value: ChronicleFeedDetailsGcsV2Settings) {
    this._gcsV2Settings.internalValue = value;
  }
  public resetGcsV2Settings() {
    this._gcsV2Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsV2SettingsInput() {
    return this._gcsV2Settings.internalValue;
  }

  // google_cloud_identity_device_users_settings - computed: false, optional: true, required: false
  private _googleCloudIdentityDeviceUsersSettings = new ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsOutputReference(this, "google_cloud_identity_device_users_settings");
  public get googleCloudIdentityDeviceUsersSettings() {
    return this._googleCloudIdentityDeviceUsersSettings;
  }
  public putGoogleCloudIdentityDeviceUsersSettings(value: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettings) {
    this._googleCloudIdentityDeviceUsersSettings.internalValue = value;
  }
  public resetGoogleCloudIdentityDeviceUsersSettings() {
    this._googleCloudIdentityDeviceUsersSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudIdentityDeviceUsersSettingsInput() {
    return this._googleCloudIdentityDeviceUsersSettings.internalValue;
  }

  // google_cloud_identity_devices_settings - computed: false, optional: true, required: false
  private _googleCloudIdentityDevicesSettings = new ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsOutputReference(this, "google_cloud_identity_devices_settings");
  public get googleCloudIdentityDevicesSettings() {
    return this._googleCloudIdentityDevicesSettings;
  }
  public putGoogleCloudIdentityDevicesSettings(value: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettings) {
    this._googleCloudIdentityDevicesSettings.internalValue = value;
  }
  public resetGoogleCloudIdentityDevicesSettings() {
    this._googleCloudIdentityDevicesSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudIdentityDevicesSettingsInput() {
    return this._googleCloudIdentityDevicesSettings.internalValue;
  }

  // google_cloud_storage_event_driven_settings - computed: false, optional: true, required: false
  private _googleCloudStorageEventDrivenSettings = new ChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsOutputReference(this, "google_cloud_storage_event_driven_settings");
  public get googleCloudStorageEventDrivenSettings() {
    return this._googleCloudStorageEventDrivenSettings;
  }
  public putGoogleCloudStorageEventDrivenSettings(value: ChronicleFeedDetailsGoogleCloudStorageEventDrivenSettings) {
    this._googleCloudStorageEventDrivenSettings.internalValue = value;
  }
  public resetGoogleCloudStorageEventDrivenSettings() {
    this._googleCloudStorageEventDrivenSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageEventDrivenSettingsInput() {
    return this._googleCloudStorageEventDrivenSettings.internalValue;
  }

  // http_settings - computed: false, optional: true, required: false
  private _httpSettings = new ChronicleFeedDetailsHttpSettingsOutputReference(this, "http_settings");
  public get httpSettings() {
    return this._httpSettings;
  }
  public putHttpSettings(value: ChronicleFeedDetailsHttpSettings) {
    this._httpSettings.internalValue = value;
  }
  public resetHttpSettings() {
    this._httpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSettingsInput() {
    return this._httpSettings.internalValue;
  }

  // https_push_amazon_kinesis_firehose_settings - computed: false, optional: true, required: false
  private _httpsPushAmazonKinesisFirehoseSettings = new ChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsOutputReference(this, "https_push_amazon_kinesis_firehose_settings");
  public get httpsPushAmazonKinesisFirehoseSettings() {
    return this._httpsPushAmazonKinesisFirehoseSettings;
  }
  public putHttpsPushAmazonKinesisFirehoseSettings(value: ChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettings) {
    this._httpsPushAmazonKinesisFirehoseSettings.internalValue = value;
  }
  public resetHttpsPushAmazonKinesisFirehoseSettings() {
    this._httpsPushAmazonKinesisFirehoseSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPushAmazonKinesisFirehoseSettingsInput() {
    return this._httpsPushAmazonKinesisFirehoseSettings.internalValue;
  }

  // https_push_google_cloud_pubsub_settings - computed: false, optional: true, required: false
  private _httpsPushGoogleCloudPubsubSettings = new ChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsOutputReference(this, "https_push_google_cloud_pubsub_settings");
  public get httpsPushGoogleCloudPubsubSettings() {
    return this._httpsPushGoogleCloudPubsubSettings;
  }
  public putHttpsPushGoogleCloudPubsubSettings(value: ChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettings) {
    this._httpsPushGoogleCloudPubsubSettings.internalValue = value;
  }
  public resetHttpsPushGoogleCloudPubsubSettings() {
    this._httpsPushGoogleCloudPubsubSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPushGoogleCloudPubsubSettingsInput() {
    return this._httpsPushGoogleCloudPubsubSettings.internalValue;
  }

  // https_push_webhook_settings - computed: false, optional: true, required: false
  private _httpsPushWebhookSettings = new ChronicleFeedDetailsHttpsPushWebhookSettingsOutputReference(this, "https_push_webhook_settings");
  public get httpsPushWebhookSettings() {
    return this._httpsPushWebhookSettings;
  }
  public putHttpsPushWebhookSettings(value: ChronicleFeedDetailsHttpsPushWebhookSettings) {
    this._httpsPushWebhookSettings.internalValue = value;
  }
  public resetHttpsPushWebhookSettings() {
    this._httpsPushWebhookSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPushWebhookSettingsInput() {
    return this._httpsPushWebhookSettings.internalValue;
  }

  // imperva_waf_settings - computed: false, optional: true, required: false
  private _impervaWafSettings = new ChronicleFeedDetailsImpervaWafSettingsOutputReference(this, "imperva_waf_settings");
  public get impervaWafSettings() {
    return this._impervaWafSettings;
  }
  public putImpervaWafSettings(value: ChronicleFeedDetailsImpervaWafSettings) {
    this._impervaWafSettings.internalValue = value;
  }
  public resetImpervaWafSettings() {
    this._impervaWafSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impervaWafSettingsInput() {
    return this._impervaWafSettings.internalValue;
  }

  // mandiant_ioc_settings - computed: false, optional: true, required: false
  private _mandiantIocSettings = new ChronicleFeedDetailsMandiantIocSettingsOutputReference(this, "mandiant_ioc_settings");
  public get mandiantIocSettings() {
    return this._mandiantIocSettings;
  }
  public putMandiantIocSettings(value: ChronicleFeedDetailsMandiantIocSettings) {
    this._mandiantIocSettings.internalValue = value;
  }
  public resetMandiantIocSettings() {
    this._mandiantIocSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandiantIocSettingsInput() {
    return this._mandiantIocSettings.internalValue;
  }

  // microsoft_graph_alert_settings - computed: false, optional: true, required: false
  private _microsoftGraphAlertSettings = new ChronicleFeedDetailsMicrosoftGraphAlertSettingsOutputReference(this, "microsoft_graph_alert_settings");
  public get microsoftGraphAlertSettings() {
    return this._microsoftGraphAlertSettings;
  }
  public putMicrosoftGraphAlertSettings(value: ChronicleFeedDetailsMicrosoftGraphAlertSettings) {
    this._microsoftGraphAlertSettings.internalValue = value;
  }
  public resetMicrosoftGraphAlertSettings() {
    this._microsoftGraphAlertSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftGraphAlertSettingsInput() {
    return this._microsoftGraphAlertSettings.internalValue;
  }

  // microsoft_security_center_alert_settings - computed: false, optional: true, required: false
  private _microsoftSecurityCenterAlertSettings = new ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsOutputReference(this, "microsoft_security_center_alert_settings");
  public get microsoftSecurityCenterAlertSettings() {
    return this._microsoftSecurityCenterAlertSettings;
  }
  public putMicrosoftSecurityCenterAlertSettings(value: ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettings) {
    this._microsoftSecurityCenterAlertSettings.internalValue = value;
  }
  public resetMicrosoftSecurityCenterAlertSettings() {
    this._microsoftSecurityCenterAlertSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftSecurityCenterAlertSettingsInput() {
    return this._microsoftSecurityCenterAlertSettings.internalValue;
  }

  // mimecast_mail_settings - computed: false, optional: true, required: false
  private _mimecastMailSettings = new ChronicleFeedDetailsMimecastMailSettingsOutputReference(this, "mimecast_mail_settings");
  public get mimecastMailSettings() {
    return this._mimecastMailSettings;
  }
  public putMimecastMailSettings(value: ChronicleFeedDetailsMimecastMailSettings) {
    this._mimecastMailSettings.internalValue = value;
  }
  public resetMimecastMailSettings() {
    this._mimecastMailSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimecastMailSettingsInput() {
    return this._mimecastMailSettings.internalValue;
  }

  // mimecast_mail_v2_settings - computed: false, optional: true, required: false
  private _mimecastMailV2Settings = new ChronicleFeedDetailsMimecastMailV2SettingsOutputReference(this, "mimecast_mail_v2_settings");
  public get mimecastMailV2Settings() {
    return this._mimecastMailV2Settings;
  }
  public putMimecastMailV2Settings(value: ChronicleFeedDetailsMimecastMailV2Settings) {
    this._mimecastMailV2Settings.internalValue = value;
  }
  public resetMimecastMailV2Settings() {
    this._mimecastMailV2Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimecastMailV2SettingsInput() {
    return this._mimecastMailV2Settings.internalValue;
  }

  // netskope_alert_settings - computed: false, optional: true, required: false
  private _netskopeAlertSettings = new ChronicleFeedDetailsNetskopeAlertSettingsOutputReference(this, "netskope_alert_settings");
  public get netskopeAlertSettings() {
    return this._netskopeAlertSettings;
  }
  public putNetskopeAlertSettings(value: ChronicleFeedDetailsNetskopeAlertSettings) {
    this._netskopeAlertSettings.internalValue = value;
  }
  public resetNetskopeAlertSettings() {
    this._netskopeAlertSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netskopeAlertSettingsInput() {
    return this._netskopeAlertSettings.internalValue;
  }

  // netskope_alert_v2_settings - computed: false, optional: true, required: false
  private _netskopeAlertV2Settings = new ChronicleFeedDetailsNetskopeAlertV2SettingsOutputReference(this, "netskope_alert_v2_settings");
  public get netskopeAlertV2Settings() {
    return this._netskopeAlertV2Settings;
  }
  public putNetskopeAlertV2Settings(value: ChronicleFeedDetailsNetskopeAlertV2Settings) {
    this._netskopeAlertV2Settings.internalValue = value;
  }
  public resetNetskopeAlertV2Settings() {
    this._netskopeAlertV2Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netskopeAlertV2SettingsInput() {
    return this._netskopeAlertV2Settings.internalValue;
  }

  // office365_settings - computed: false, optional: true, required: false
  private _office365Settings = new ChronicleFeedDetailsOffice365SettingsOutputReference(this, "office365_settings");
  public get office365Settings() {
    return this._office365Settings;
  }
  public putOffice365Settings(value: ChronicleFeedDetailsOffice365Settings) {
    this._office365Settings.internalValue = value;
  }
  public resetOffice365Settings() {
    this._office365Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get office365SettingsInput() {
    return this._office365Settings.internalValue;
  }

  // okta_settings - computed: false, optional: true, required: false
  private _oktaSettings = new ChronicleFeedDetailsOktaSettingsOutputReference(this, "okta_settings");
  public get oktaSettings() {
    return this._oktaSettings;
  }
  public putOktaSettings(value: ChronicleFeedDetailsOktaSettings) {
    this._oktaSettings.internalValue = value;
  }
  public resetOktaSettings() {
    this._oktaSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaSettingsInput() {
    return this._oktaSettings.internalValue;
  }

  // okta_user_context_settings - computed: false, optional: true, required: false
  private _oktaUserContextSettings = new ChronicleFeedDetailsOktaUserContextSettingsOutputReference(this, "okta_user_context_settings");
  public get oktaUserContextSettings() {
    return this._oktaUserContextSettings;
  }
  public putOktaUserContextSettings(value: ChronicleFeedDetailsOktaUserContextSettings) {
    this._oktaUserContextSettings.internalValue = value;
  }
  public resetOktaUserContextSettings() {
    this._oktaUserContextSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaUserContextSettingsInput() {
    return this._oktaUserContextSettings.internalValue;
  }

  // pan_ioc_settings - computed: false, optional: true, required: false
  private _panIocSettings = new ChronicleFeedDetailsPanIocSettingsOutputReference(this, "pan_ioc_settings");
  public get panIocSettings() {
    return this._panIocSettings;
  }
  public putPanIocSettings(value: ChronicleFeedDetailsPanIocSettings) {
    this._panIocSettings.internalValue = value;
  }
  public resetPanIocSettings() {
    this._panIocSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panIocSettingsInput() {
    return this._panIocSettings.internalValue;
  }

  // pan_prisma_cloud_settings - computed: false, optional: true, required: false
  private _panPrismaCloudSettings = new ChronicleFeedDetailsPanPrismaCloudSettingsOutputReference(this, "pan_prisma_cloud_settings");
  public get panPrismaCloudSettings() {
    return this._panPrismaCloudSettings;
  }
  public putPanPrismaCloudSettings(value: ChronicleFeedDetailsPanPrismaCloudSettings) {
    this._panPrismaCloudSettings.internalValue = value;
  }
  public resetPanPrismaCloudSettings() {
    this._panPrismaCloudSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panPrismaCloudSettingsInput() {
    return this._panPrismaCloudSettings.internalValue;
  }

  // proofpoint_mail_settings - computed: false, optional: true, required: false
  private _proofpointMailSettings = new ChronicleFeedDetailsProofpointMailSettingsOutputReference(this, "proofpoint_mail_settings");
  public get proofpointMailSettings() {
    return this._proofpointMailSettings;
  }
  public putProofpointMailSettings(value: ChronicleFeedDetailsProofpointMailSettings) {
    this._proofpointMailSettings.internalValue = value;
  }
  public resetProofpointMailSettings() {
    this._proofpointMailSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proofpointMailSettingsInput() {
    return this._proofpointMailSettings.internalValue;
  }

  // proofpoint_on_demand_settings - computed: false, optional: true, required: false
  private _proofpointOnDemandSettings = new ChronicleFeedDetailsProofpointOnDemandSettingsOutputReference(this, "proofpoint_on_demand_settings");
  public get proofpointOnDemandSettings() {
    return this._proofpointOnDemandSettings;
  }
  public putProofpointOnDemandSettings(value: ChronicleFeedDetailsProofpointOnDemandSettings) {
    this._proofpointOnDemandSettings.internalValue = value;
  }
  public resetProofpointOnDemandSettings() {
    this._proofpointOnDemandSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proofpointOnDemandSettingsInput() {
    return this._proofpointOnDemandSettings.internalValue;
  }

  // pubsub_settings - computed: false, optional: true, required: false
  private _pubsubSettings = new ChronicleFeedDetailsPubsubSettingsOutputReference(this, "pubsub_settings");
  public get pubsubSettings() {
    return this._pubsubSettings;
  }
  public putPubsubSettings(value: ChronicleFeedDetailsPubsubSettings) {
    this._pubsubSettings.internalValue = value;
  }
  public resetPubsubSettings() {
    this._pubsubSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubSettingsInput() {
    return this._pubsubSettings.internalValue;
  }

  // qualys_scan_settings - computed: false, optional: true, required: false
  private _qualysScanSettings = new ChronicleFeedDetailsQualysScanSettingsOutputReference(this, "qualys_scan_settings");
  public get qualysScanSettings() {
    return this._qualysScanSettings;
  }
  public putQualysScanSettings(value: ChronicleFeedDetailsQualysScanSettings) {
    this._qualysScanSettings.internalValue = value;
  }
  public resetQualysScanSettings() {
    this._qualysScanSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualysScanSettingsInput() {
    return this._qualysScanSettings.internalValue;
  }

  // qualys_vm_settings - computed: false, optional: true, required: false
  private _qualysVmSettings = new ChronicleFeedDetailsQualysVmSettingsOutputReference(this, "qualys_vm_settings");
  public get qualysVmSettings() {
    return this._qualysVmSettings;
  }
  public putQualysVmSettings(value: ChronicleFeedDetailsQualysVmSettings) {
    this._qualysVmSettings.internalValue = value;
  }
  public resetQualysVmSettings() {
    this._qualysVmSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualysVmSettingsInput() {
    return this._qualysVmSettings.internalValue;
  }

  // rapid7_insight_settings - computed: false, optional: true, required: false
  private _rapid7InsightSettings = new ChronicleFeedDetailsRapid7InsightSettingsOutputReference(this, "rapid7_insight_settings");
  public get rapid7InsightSettings() {
    return this._rapid7InsightSettings;
  }
  public putRapid7InsightSettings(value: ChronicleFeedDetailsRapid7InsightSettings) {
    this._rapid7InsightSettings.internalValue = value;
  }
  public resetRapid7InsightSettings() {
    this._rapid7InsightSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rapid7InsightSettingsInput() {
    return this._rapid7InsightSettings.internalValue;
  }

  // recorded_future_ioc_settings - computed: false, optional: true, required: false
  private _recordedFutureIocSettings = new ChronicleFeedDetailsRecordedFutureIocSettingsOutputReference(this, "recorded_future_ioc_settings");
  public get recordedFutureIocSettings() {
    return this._recordedFutureIocSettings;
  }
  public putRecordedFutureIocSettings(value: ChronicleFeedDetailsRecordedFutureIocSettings) {
    this._recordedFutureIocSettings.internalValue = value;
  }
  public resetRecordedFutureIocSettings() {
    this._recordedFutureIocSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordedFutureIocSettingsInput() {
    return this._recordedFutureIocSettings.internalValue;
  }

  // rh_isac_ioc_settings - computed: false, optional: true, required: false
  private _rhIsacIocSettings = new ChronicleFeedDetailsRhIsacIocSettingsOutputReference(this, "rh_isac_ioc_settings");
  public get rhIsacIocSettings() {
    return this._rhIsacIocSettings;
  }
  public putRhIsacIocSettings(value: ChronicleFeedDetailsRhIsacIocSettings) {
    this._rhIsacIocSettings.internalValue = value;
  }
  public resetRhIsacIocSettings() {
    this._rhIsacIocSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rhIsacIocSettingsInput() {
    return this._rhIsacIocSettings.internalValue;
  }

  // salesforce_settings - computed: false, optional: true, required: false
  private _salesforceSettings = new ChronicleFeedDetailsSalesforceSettingsOutputReference(this, "salesforce_settings");
  public get salesforceSettings() {
    return this._salesforceSettings;
  }
  public putSalesforceSettings(value: ChronicleFeedDetailsSalesforceSettings) {
    this._salesforceSettings.internalValue = value;
  }
  public resetSalesforceSettings() {
    this._salesforceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceSettingsInput() {
    return this._salesforceSettings.internalValue;
  }

  // sentinelone_alert_settings - computed: false, optional: true, required: false
  private _sentineloneAlertSettings = new ChronicleFeedDetailsSentineloneAlertSettingsOutputReference(this, "sentinelone_alert_settings");
  public get sentineloneAlertSettings() {
    return this._sentineloneAlertSettings;
  }
  public putSentineloneAlertSettings(value: ChronicleFeedDetailsSentineloneAlertSettings) {
    this._sentineloneAlertSettings.internalValue = value;
  }
  public resetSentineloneAlertSettings() {
    this._sentineloneAlertSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentineloneAlertSettingsInput() {
    return this._sentineloneAlertSettings.internalValue;
  }

  // service_now_cmdb_settings - computed: false, optional: true, required: false
  private _serviceNowCmdbSettings = new ChronicleFeedDetailsServiceNowCmdbSettingsOutputReference(this, "service_now_cmdb_settings");
  public get serviceNowCmdbSettings() {
    return this._serviceNowCmdbSettings;
  }
  public putServiceNowCmdbSettings(value: ChronicleFeedDetailsServiceNowCmdbSettings) {
    this._serviceNowCmdbSettings.internalValue = value;
  }
  public resetServiceNowCmdbSettings() {
    this._serviceNowCmdbSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowCmdbSettingsInput() {
    return this._serviceNowCmdbSettings.internalValue;
  }

  // sftp_settings - computed: false, optional: true, required: false
  private _sftpSettings = new ChronicleFeedDetailsSftpSettingsOutputReference(this, "sftp_settings");
  public get sftpSettings() {
    return this._sftpSettings;
  }
  public putSftpSettings(value: ChronicleFeedDetailsSftpSettings) {
    this._sftpSettings.internalValue = value;
  }
  public resetSftpSettings() {
    this._sftpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpSettingsInput() {
    return this._sftpSettings.internalValue;
  }

  // symantec_event_export_settings - computed: false, optional: true, required: false
  private _symantecEventExportSettings = new ChronicleFeedDetailsSymantecEventExportSettingsOutputReference(this, "symantec_event_export_settings");
  public get symantecEventExportSettings() {
    return this._symantecEventExportSettings;
  }
  public putSymantecEventExportSettings(value: ChronicleFeedDetailsSymantecEventExportSettings) {
    this._symantecEventExportSettings.internalValue = value;
  }
  public resetSymantecEventExportSettings() {
    this._symantecEventExportSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symantecEventExportSettingsInput() {
    return this._symantecEventExportSettings.internalValue;
  }

  // thinkst_canary_settings - computed: false, optional: true, required: false
  private _thinkstCanarySettings = new ChronicleFeedDetailsThinkstCanarySettingsOutputReference(this, "thinkst_canary_settings");
  public get thinkstCanarySettings() {
    return this._thinkstCanarySettings;
  }
  public putThinkstCanarySettings(value: ChronicleFeedDetailsThinkstCanarySettings) {
    this._thinkstCanarySettings.internalValue = value;
  }
  public resetThinkstCanarySettings() {
    this._thinkstCanarySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thinkstCanarySettingsInput() {
    return this._thinkstCanarySettings.internalValue;
  }

  // threat_connect_ioc_settings - computed: false, optional: true, required: false
  private _threatConnectIocSettings = new ChronicleFeedDetailsThreatConnectIocSettingsOutputReference(this, "threat_connect_ioc_settings");
  public get threatConnectIocSettings() {
    return this._threatConnectIocSettings;
  }
  public putThreatConnectIocSettings(value: ChronicleFeedDetailsThreatConnectIocSettings) {
    this._threatConnectIocSettings.internalValue = value;
  }
  public resetThreatConnectIocSettings() {
    this._threatConnectIocSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatConnectIocSettingsInput() {
    return this._threatConnectIocSettings.internalValue;
  }

  // threat_connect_ioc_v3_settings - computed: false, optional: true, required: false
  private _threatConnectIocV3Settings = new ChronicleFeedDetailsThreatConnectIocV3SettingsOutputReference(this, "threat_connect_ioc_v3_settings");
  public get threatConnectIocV3Settings() {
    return this._threatConnectIocV3Settings;
  }
  public putThreatConnectIocV3Settings(value: ChronicleFeedDetailsThreatConnectIocV3Settings) {
    this._threatConnectIocV3Settings.internalValue = value;
  }
  public resetThreatConnectIocV3Settings() {
    this._threatConnectIocV3Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatConnectIocV3SettingsInput() {
    return this._threatConnectIocV3Settings.internalValue;
  }

  // trellix_hx_alerts_settings - computed: false, optional: true, required: false
  private _trellixHxAlertsSettings = new ChronicleFeedDetailsTrellixHxAlertsSettingsOutputReference(this, "trellix_hx_alerts_settings");
  public get trellixHxAlertsSettings() {
    return this._trellixHxAlertsSettings;
  }
  public putTrellixHxAlertsSettings(value: ChronicleFeedDetailsTrellixHxAlertsSettings) {
    this._trellixHxAlertsSettings.internalValue = value;
  }
  public resetTrellixHxAlertsSettings() {
    this._trellixHxAlertsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trellixHxAlertsSettingsInput() {
    return this._trellixHxAlertsSettings.internalValue;
  }

  // trellix_hx_bulk_acqs_settings - computed: false, optional: true, required: false
  private _trellixHxBulkAcqsSettings = new ChronicleFeedDetailsTrellixHxBulkAcqsSettingsOutputReference(this, "trellix_hx_bulk_acqs_settings");
  public get trellixHxBulkAcqsSettings() {
    return this._trellixHxBulkAcqsSettings;
  }
  public putTrellixHxBulkAcqsSettings(value: ChronicleFeedDetailsTrellixHxBulkAcqsSettings) {
    this._trellixHxBulkAcqsSettings.internalValue = value;
  }
  public resetTrellixHxBulkAcqsSettings() {
    this._trellixHxBulkAcqsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trellixHxBulkAcqsSettingsInput() {
    return this._trellixHxBulkAcqsSettings.internalValue;
  }

  // trellix_hx_hosts_settings - computed: false, optional: true, required: false
  private _trellixHxHostsSettings = new ChronicleFeedDetailsTrellixHxHostsSettingsOutputReference(this, "trellix_hx_hosts_settings");
  public get trellixHxHostsSettings() {
    return this._trellixHxHostsSettings;
  }
  public putTrellixHxHostsSettings(value: ChronicleFeedDetailsTrellixHxHostsSettings) {
    this._trellixHxHostsSettings.internalValue = value;
  }
  public resetTrellixHxHostsSettings() {
    this._trellixHxHostsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trellixHxHostsSettingsInput() {
    return this._trellixHxHostsSettings.internalValue;
  }

  // webhook_settings - computed: false, optional: true, required: false
  private _webhookSettings = new ChronicleFeedDetailsWebhookSettingsOutputReference(this, "webhook_settings");
  public get webhookSettings() {
    return this._webhookSettings;
  }
  public putWebhookSettings(value: ChronicleFeedDetailsWebhookSettings) {
    this._webhookSettings.internalValue = value;
  }
  public resetWebhookSettings() {
    this._webhookSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSettingsInput() {
    return this._webhookSettings.internalValue;
  }

  // workday_settings - computed: false, optional: true, required: false
  private _workdaySettings = new ChronicleFeedDetailsWorkdaySettingsOutputReference(this, "workday_settings");
  public get workdaySettings() {
    return this._workdaySettings;
  }
  public putWorkdaySettings(value: ChronicleFeedDetailsWorkdaySettings) {
    this._workdaySettings.internalValue = value;
  }
  public resetWorkdaySettings() {
    this._workdaySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workdaySettingsInput() {
    return this._workdaySettings.internalValue;
  }

  // workspace_activity_settings - computed: false, optional: true, required: false
  private _workspaceActivitySettings = new ChronicleFeedDetailsWorkspaceActivitySettingsOutputReference(this, "workspace_activity_settings");
  public get workspaceActivitySettings() {
    return this._workspaceActivitySettings;
  }
  public putWorkspaceActivitySettings(value: ChronicleFeedDetailsWorkspaceActivitySettings) {
    this._workspaceActivitySettings.internalValue = value;
  }
  public resetWorkspaceActivitySettings() {
    this._workspaceActivitySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceActivitySettingsInput() {
    return this._workspaceActivitySettings.internalValue;
  }

  // workspace_alerts_settings - computed: false, optional: true, required: false
  private _workspaceAlertsSettings = new ChronicleFeedDetailsWorkspaceAlertsSettingsOutputReference(this, "workspace_alerts_settings");
  public get workspaceAlertsSettings() {
    return this._workspaceAlertsSettings;
  }
  public putWorkspaceAlertsSettings(value: ChronicleFeedDetailsWorkspaceAlertsSettings) {
    this._workspaceAlertsSettings.internalValue = value;
  }
  public resetWorkspaceAlertsSettings() {
    this._workspaceAlertsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceAlertsSettingsInput() {
    return this._workspaceAlertsSettings.internalValue;
  }

  // workspace_chrome_os_settings - computed: false, optional: true, required: false
  private _workspaceChromeOsSettings = new ChronicleFeedDetailsWorkspaceChromeOsSettingsOutputReference(this, "workspace_chrome_os_settings");
  public get workspaceChromeOsSettings() {
    return this._workspaceChromeOsSettings;
  }
  public putWorkspaceChromeOsSettings(value: ChronicleFeedDetailsWorkspaceChromeOsSettings) {
    this._workspaceChromeOsSettings.internalValue = value;
  }
  public resetWorkspaceChromeOsSettings() {
    this._workspaceChromeOsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceChromeOsSettingsInput() {
    return this._workspaceChromeOsSettings.internalValue;
  }

  // workspace_groups_settings - computed: false, optional: true, required: false
  private _workspaceGroupsSettings = new ChronicleFeedDetailsWorkspaceGroupsSettingsOutputReference(this, "workspace_groups_settings");
  public get workspaceGroupsSettings() {
    return this._workspaceGroupsSettings;
  }
  public putWorkspaceGroupsSettings(value: ChronicleFeedDetailsWorkspaceGroupsSettings) {
    this._workspaceGroupsSettings.internalValue = value;
  }
  public resetWorkspaceGroupsSettings() {
    this._workspaceGroupsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceGroupsSettingsInput() {
    return this._workspaceGroupsSettings.internalValue;
  }

  // workspace_mobile_settings - computed: false, optional: true, required: false
  private _workspaceMobileSettings = new ChronicleFeedDetailsWorkspaceMobileSettingsOutputReference(this, "workspace_mobile_settings");
  public get workspaceMobileSettings() {
    return this._workspaceMobileSettings;
  }
  public putWorkspaceMobileSettings(value: ChronicleFeedDetailsWorkspaceMobileSettings) {
    this._workspaceMobileSettings.internalValue = value;
  }
  public resetWorkspaceMobileSettings() {
    this._workspaceMobileSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceMobileSettingsInput() {
    return this._workspaceMobileSettings.internalValue;
  }

  // workspace_privileges_settings - computed: false, optional: true, required: false
  private _workspacePrivilegesSettings = new ChronicleFeedDetailsWorkspacePrivilegesSettingsOutputReference(this, "workspace_privileges_settings");
  public get workspacePrivilegesSettings() {
    return this._workspacePrivilegesSettings;
  }
  public putWorkspacePrivilegesSettings(value: ChronicleFeedDetailsWorkspacePrivilegesSettings) {
    this._workspacePrivilegesSettings.internalValue = value;
  }
  public resetWorkspacePrivilegesSettings() {
    this._workspacePrivilegesSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspacePrivilegesSettingsInput() {
    return this._workspacePrivilegesSettings.internalValue;
  }

  // workspace_users_settings - computed: false, optional: true, required: false
  private _workspaceUsersSettings = new ChronicleFeedDetailsWorkspaceUsersSettingsOutputReference(this, "workspace_users_settings");
  public get workspaceUsersSettings() {
    return this._workspaceUsersSettings;
  }
  public putWorkspaceUsersSettings(value: ChronicleFeedDetailsWorkspaceUsersSettings) {
    this._workspaceUsersSettings.internalValue = value;
  }
  public resetWorkspaceUsersSettings() {
    this._workspaceUsersSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceUsersSettingsInput() {
    return this._workspaceUsersSettings.internalValue;
  }
}
export interface ChronicleFeedFailureDetails {
}

export function chronicleFeedFailureDetailsToTerraform(struct?: ChronicleFeedFailureDetailsOutputReference | ChronicleFeedFailureDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function chronicleFeedFailureDetailsToHclTerraform(struct?: ChronicleFeedFailureDetailsOutputReference | ChronicleFeedFailureDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ChronicleFeedFailureDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedFailureDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedFailureDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_action - computed: true, optional: false, required: false
  public get errorAction() {
    return this.getStringAttribute('error_action');
  }

  // error_cause - computed: true, optional: false, required: false
  public get errorCause() {
    return this.getStringAttribute('error_cause');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // http_error_code - computed: true, optional: false, required: false
  public get httpErrorCode() {
    return this.getNumberAttribute('http_error_code');
  }
}
export interface ChronicleFeedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#create ChronicleFeed#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#delete ChronicleFeed#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#update ChronicleFeed#update}
  */
  readonly update?: string;
}

export function chronicleFeedTimeoutsToTerraform(struct?: ChronicleFeedTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function chronicleFeedTimeoutsToHclTerraform(struct?: ChronicleFeedTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChronicleFeedTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
