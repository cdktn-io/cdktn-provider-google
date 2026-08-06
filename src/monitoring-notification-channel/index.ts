/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MonitoringNotificationChannelConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#deletion_policy MonitoringNotificationChannel#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional human-readable description of this notification channel. This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#description MonitoringNotificationChannel#description}
  */
  readonly description?: string;
  /**
  * An optional human-readable name for this notification channel. It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#display_name MonitoringNotificationChannel#display_name}
  */
  readonly displayName?: string;
  /**
  * Whether notifications are forwarded to the described channel. This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#enabled MonitoringNotificationChannel#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * If true, the notification channel will be deleted regardless
  * of its use in alert policies (the policies will be updated
  * to remove the channel). If false, channels that are still
  * referenced by an existing alerting policy will fail to be
  * deleted in a delete operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#force_delete MonitoringNotificationChannel#force_delete}
  */
  readonly forceDelete?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#id MonitoringNotificationChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configuration fields that define the channel and its behavior. The
  * permissible and required labels are specified in the
  * NotificationChannelDescriptor corresponding to the type field.
  * 
  * Labels with sensitive data are obfuscated by the API and therefore Terraform cannot
  * determine if there are upstream changes to these fields. They can also be configured via
  * the sensitive_labels block, but cannot be configured in both places.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#labels MonitoringNotificationChannel#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#project MonitoringNotificationChannel#project}
  */
  readonly project?: string;
  /**
  * The type of the notification channel. This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#type MonitoringNotificationChannel#type}
  */
  readonly type: string;
  /**
  * User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#user_labels MonitoringNotificationChannel#user_labels}
  */
  readonly userLabels?: { [key: string]: string };
  /**
  * sensitive_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#sensitive_labels MonitoringNotificationChannel#sensitive_labels}
  */
  readonly sensitiveLabels?: MonitoringNotificationChannelSensitiveLabels;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#timeouts MonitoringNotificationChannel#timeouts}
  */
  readonly timeouts?: MonitoringNotificationChannelTimeouts;
}
export interface MonitoringNotificationChannelSensitiveLabels {
  /**
  * An authorization token for a notification channel. Channel types that support this field include: slack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#auth_token MonitoringNotificationChannel#auth_token}
  */
  readonly authToken?: string;
  /**
  * An authorization token for a notification channel. Channel types that support this field include: slack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#auth_token_wo MonitoringNotificationChannel#auth_token_wo}
  */
  readonly authTokenWo?: string;
  /**
  * Triggers update of 'auth_token_wo' write-only. Increment this value when an update to 'auth_token_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#auth_token_wo_version MonitoringNotificationChannel#auth_token_wo_version}
  */
  readonly authTokenWoVersion?: string;
  /**
  * An password for a notification channel. Channel types that support this field include: webhook_basicauth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#password MonitoringNotificationChannel#password}
  */
  readonly password?: string;
  /**
  * An password for a notification channel. Channel types that support this field include: webhook_basicauth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#password_wo MonitoringNotificationChannel#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Triggers update of 'password_wo' write-only. Increment this value when an update to 'password_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#password_wo_version MonitoringNotificationChannel#password_wo_version}
  */
  readonly passwordWoVersion?: string;
  /**
  * An servicekey token for a notification channel. Channel types that support this field include: pagerduty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#service_key MonitoringNotificationChannel#service_key}
  */
  readonly serviceKey?: string;
  /**
  * An servicekey token for a notification channel. Channel types that support this field include: pagerduty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#service_key_wo MonitoringNotificationChannel#service_key_wo}
  */
  readonly serviceKeyWo?: string;
  /**
  * Triggers update of 'service_key_wo' write-only. Increment this value when an update to 'service_key_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#service_key_wo_version MonitoringNotificationChannel#service_key_wo_version}
  */
  readonly serviceKeyWoVersion?: string;
}

export function monitoringNotificationChannelSensitiveLabelsToTerraform(struct?: MonitoringNotificationChannelSensitiveLabelsOutputReference | MonitoringNotificationChannelSensitiveLabels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_token: cdktn.stringToTerraform(struct!.authToken),
    auth_token_wo: cdktn.stringToTerraform(struct!.authTokenWo),
    auth_token_wo_version: cdktn.stringToTerraform(struct!.authTokenWoVersion),
    password: cdktn.stringToTerraform(struct!.password),
    password_wo: cdktn.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktn.stringToTerraform(struct!.passwordWoVersion),
    service_key: cdktn.stringToTerraform(struct!.serviceKey),
    service_key_wo: cdktn.stringToTerraform(struct!.serviceKeyWo),
    service_key_wo_version: cdktn.stringToTerraform(struct!.serviceKeyWoVersion),
  }
}


export function monitoringNotificationChannelSensitiveLabelsToHclTerraform(struct?: MonitoringNotificationChannelSensitiveLabelsOutputReference | MonitoringNotificationChannelSensitiveLabels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_token: {
      value: cdktn.stringToHclTerraform(struct!.authToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_token_wo: {
      value: cdktn.stringToHclTerraform(struct!.authTokenWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_token_wo_version: {
      value: cdktn.stringToHclTerraform(struct!.authTokenWoVersion),
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
    password_wo: {
      value: cdktn.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_key: {
      value: cdktn.stringToHclTerraform(struct!.serviceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_key_wo: {
      value: cdktn.stringToHclTerraform(struct!.serviceKeyWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_key_wo_version: {
      value: cdktn.stringToHclTerraform(struct!.serviceKeyWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringNotificationChannelSensitiveLabelsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringNotificationChannelSensitiveLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken;
    }
    if (this._authTokenWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.authTokenWo = this._authTokenWo;
    }
    if (this._authTokenWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.authTokenWoVersion = this._authTokenWoVersion;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
    }
    if (this._serviceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceKey = this._serviceKey;
    }
    if (this._serviceKeyWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceKeyWo = this._serviceKeyWo;
    }
    if (this._serviceKeyWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceKeyWoVersion = this._serviceKeyWoVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringNotificationChannelSensitiveLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authToken = undefined;
      this._authTokenWo = undefined;
      this._authTokenWoVersion = undefined;
      this._password = undefined;
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
      this._serviceKey = undefined;
      this._serviceKeyWo = undefined;
      this._serviceKeyWoVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authToken = value.authToken;
      this._authTokenWo = value.authTokenWo;
      this._authTokenWoVersion = value.authTokenWoVersion;
      this._password = value.password;
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
      this._serviceKey = value.serviceKey;
      this._serviceKeyWo = value.serviceKeyWo;
      this._serviceKeyWoVersion = value.serviceKeyWoVersion;
    }
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // auth_token_wo - computed: false, optional: true, required: false
  private _authTokenWo?: string; 
  public get authTokenWo() {
    return this.getStringAttribute('auth_token_wo');
  }
  public set authTokenWo(value: string) {
    this._authTokenWo = value;
  }
  public resetAuthTokenWo() {
    this._authTokenWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenWoInput() {
    return this._authTokenWo;
  }

  // auth_token_wo_version - computed: false, optional: true, required: false
  private _authTokenWoVersion?: string; 
  public get authTokenWoVersion() {
    return this.getStringAttribute('auth_token_wo_version');
  }
  public set authTokenWoVersion(value: string) {
    this._authTokenWoVersion = value;
  }
  public resetAuthTokenWoVersion() {
    this._authTokenWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenWoVersionInput() {
    return this._authTokenWoVersion;
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

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: string; 
  public get passwordWoVersion() {
    return this.getStringAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: string) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
  }

  // service_key - computed: false, optional: true, required: false
  private _serviceKey?: string; 
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }
  public set serviceKey(value: string) {
    this._serviceKey = value;
  }
  public resetServiceKey() {
    this._serviceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyInput() {
    return this._serviceKey;
  }

  // service_key_wo - computed: false, optional: true, required: false
  private _serviceKeyWo?: string; 
  public get serviceKeyWo() {
    return this.getStringAttribute('service_key_wo');
  }
  public set serviceKeyWo(value: string) {
    this._serviceKeyWo = value;
  }
  public resetServiceKeyWo() {
    this._serviceKeyWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyWoInput() {
    return this._serviceKeyWo;
  }

  // service_key_wo_version - computed: false, optional: true, required: false
  private _serviceKeyWoVersion?: string; 
  public get serviceKeyWoVersion() {
    return this.getStringAttribute('service_key_wo_version');
  }
  public set serviceKeyWoVersion(value: string) {
    this._serviceKeyWoVersion = value;
  }
  public resetServiceKeyWoVersion() {
    this._serviceKeyWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyWoVersionInput() {
    return this._serviceKeyWoVersion;
  }
}
export interface MonitoringNotificationChannelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#create MonitoringNotificationChannel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#delete MonitoringNotificationChannel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#update MonitoringNotificationChannel#update}
  */
  readonly update?: string;
}

export function monitoringNotificationChannelTimeoutsToTerraform(struct?: MonitoringNotificationChannelTimeouts | cdktn.IResolvable): any {
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


export function monitoringNotificationChannelTimeoutsToHclTerraform(struct?: MonitoringNotificationChannelTimeouts | cdktn.IResolvable): any {
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

export class MonitoringNotificationChannelTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitoringNotificationChannelTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MonitoringNotificationChannelTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel google_monitoring_notification_channel}
*/
export class MonitoringNotificationChannel extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_monitoring_notification_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MonitoringNotificationChannel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitoringNotificationChannel to import
  * @param importFromId The id of the existing MonitoringNotificationChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitoringNotificationChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_monitoring_notification_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/monitoring_notification_channel google_monitoring_notification_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoringNotificationChannelConfig
  */
  public constructor(scope: Construct, id: string, config: MonitoringNotificationChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_notification_channel',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.43.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._labels = config.labels;
    this._project = config.project;
    this._type = config.type;
    this._userLabels = config.userLabels;
    this._sensitiveLabels.internalValue = config.sensitiveLabels;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktn.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktn.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_labels - computed: false, optional: true, required: false
  private _userLabels?: { [key: string]: string }; 
  public get userLabels() {
    return this.getStringMapAttribute('user_labels');
  }
  public set userLabels(value: { [key: string]: string }) {
    this._userLabels = value;
  }
  public resetUserLabels() {
    this._userLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLabelsInput() {
    return this._userLabels;
  }

  // verification_status - computed: true, optional: false, required: false
  public get verificationStatus() {
    return this.getStringAttribute('verification_status');
  }

  // sensitive_labels - computed: false, optional: true, required: false
  private _sensitiveLabels = new MonitoringNotificationChannelSensitiveLabelsOutputReference(this, "sensitive_labels");
  public get sensitiveLabels() {
    return this._sensitiveLabels;
  }
  public putSensitiveLabels(value: MonitoringNotificationChannelSensitiveLabels) {
    this._sensitiveLabels.internalValue = value;
  }
  public resetSensitiveLabels() {
    this._sensitiveLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveLabelsInput() {
    return this._sensitiveLabels.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitoringNotificationChannelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitoringNotificationChannelTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      enabled: cdktn.booleanToTerraform(this._enabled),
      force_delete: cdktn.booleanToTerraform(this._forceDelete),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      project: cdktn.stringToTerraform(this._project),
      type: cdktn.stringToTerraform(this._type),
      user_labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._userLabels),
      sensitive_labels: monitoringNotificationChannelSensitiveLabelsToTerraform(this._sensitiveLabels.internalValue),
      timeouts: monitoringNotificationChannelTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete: {
        value: cdktn.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._userLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      sensitive_labels: {
        value: monitoringNotificationChannelSensitiveLabelsToHclTerraform(this._sensitiveLabels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitoringNotificationChannelSensitiveLabelsList",
      },
      timeouts: {
        value: monitoringNotificationChannelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitoringNotificationChannelTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
