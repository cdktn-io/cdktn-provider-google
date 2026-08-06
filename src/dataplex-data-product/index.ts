/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataplexDataProductConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the data product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#data_product_id DataplexDataProduct#data_product_id}
  */
  readonly dataProductId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#deletion_policy DataplexDataProduct#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Description of the data product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#description DataplexDataProduct#description}
  */
  readonly description?: string;
  /**
  * User-friendly display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#display_name DataplexDataProduct#display_name}
  */
  readonly displayName: string;
  /**
  * Base64 encoded image representing the data product. Max Size: 3.0MiB
  * Expected image dimensions are 512x512 pixels, however the API only
  * performs validation on size of the encoded data.
  * Note: For byte fields, the content of the fields are base64-encoded (which
  * increases the size of the data by 33-36%) when using JSON on the wire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#icon DataplexDataProduct#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#labels DataplexDataProduct#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the data product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#location DataplexDataProduct#location}
  */
  readonly location: string;
  /**
  * Emails of the owners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#owner_emails DataplexDataProduct#owner_emails}
  */
  readonly ownerEmails: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#project DataplexDataProduct#project}
  */
  readonly project?: string;
  /**
  * access_approval_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#access_approval_config DataplexDataProduct#access_approval_config}
  */
  readonly accessApprovalConfig?: DataplexDataProductAccessApprovalConfig;
  /**
  * access_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#access_groups DataplexDataProduct#access_groups}
  */
  readonly accessGroups?: DataplexDataProductAccessGroups[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#timeouts DataplexDataProduct#timeouts}
  */
  readonly timeouts?: DataplexDataProductTimeouts;
}
export interface DataplexDataProductAccessApprovalConfig {
  /**
  * Specifies the email addresses of users who are potential approvers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#approver_emails DataplexDataProduct#approver_emails}
  */
  readonly approverEmails?: string[];
}

export function dataplexDataProductAccessApprovalConfigToTerraform(struct?: DataplexDataProductAccessApprovalConfigOutputReference | DataplexDataProductAccessApprovalConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    approver_emails: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.approverEmails),
  }
}


export function dataplexDataProductAccessApprovalConfigToHclTerraform(struct?: DataplexDataProductAccessApprovalConfigOutputReference | DataplexDataProductAccessApprovalConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    approver_emails: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.approverEmails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDataProductAccessApprovalConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDataProductAccessApprovalConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approverEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.approverEmails = this._approverEmails;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDataProductAccessApprovalConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._approverEmails = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._approverEmails = value.approverEmails;
    }
  }

  // approver_emails - computed: false, optional: true, required: false
  private _approverEmails?: string[]; 
  public get approverEmails() {
    return this.getListAttribute('approver_emails');
  }
  public set approverEmails(value: string[]) {
    this._approverEmails = value;
  }
  public resetApproverEmails() {
    this._approverEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverEmailsInput() {
    return this._approverEmails;
  }
}
export interface DataplexDataProductAccessGroupsPrincipal {
  /**
  * Email of the Google Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#google_group DataplexDataProduct#google_group}
  */
  readonly googleGroup?: string;
  /**
  * Specifies the email of the producer service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#service_account DataplexDataProduct#service_account}
  */
  readonly serviceAccount?: string;
}

export function dataplexDataProductAccessGroupsPrincipalToTerraform(struct?: DataplexDataProductAccessGroupsPrincipalOutputReference | DataplexDataProductAccessGroupsPrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    google_group: cdktn.stringToTerraform(struct!.googleGroup),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
  }
}


export function dataplexDataProductAccessGroupsPrincipalToHclTerraform(struct?: DataplexDataProductAccessGroupsPrincipalOutputReference | DataplexDataProductAccessGroupsPrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    google_group: {
      value: cdktn.stringToHclTerraform(struct!.googleGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDataProductAccessGroupsPrincipalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDataProductAccessGroupsPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._googleGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleGroup = this._googleGroup;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDataProductAccessGroupsPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._googleGroup = undefined;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._googleGroup = value.googleGroup;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // google_group - computed: false, optional: true, required: false
  private _googleGroup?: string; 
  public get googleGroup() {
    return this.getStringAttribute('google_group');
  }
  public set googleGroup(value: string) {
    this._googleGroup = value;
  }
  public resetGoogleGroup() {
    this._googleGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleGroupInput() {
    return this._googleGroup;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface DataplexDataProductAccessGroups {
  /**
  * Description of the access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#description DataplexDataProduct#description}
  */
  readonly description?: string;
  /**
  * User friendly display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#display_name DataplexDataProduct#display_name}
  */
  readonly displayName: string;
  /**
  * Unique identifier of the access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#group_id DataplexDataProduct#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#principal DataplexDataProduct#principal}
  */
  readonly principal: DataplexDataProductAccessGroupsPrincipal;
}

export function dataplexDataProductAccessGroupsToTerraform(struct?: DataplexDataProductAccessGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    group_id: cdktn.stringToTerraform(struct!.groupId),
    id: cdktn.stringToTerraform(struct!.id),
    principal: dataplexDataProductAccessGroupsPrincipalToTerraform(struct!.principal),
  }
}


export function dataplexDataProductAccessGroupsToHclTerraform(struct?: DataplexDataProductAccessGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktn.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: dataplexDataProductAccessGroupsPrincipalToHclTerraform(struct!.principal),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDataProductAccessGroupsPrincipalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDataProductAccessGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataplexDataProductAccessGroups | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._principal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDataProductAccessGroups | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._groupId = undefined;
      this._id = undefined;
      this._principal.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._groupId = value.groupId;
      this._id = value.id;
      this._principal.internalValue = value.principal;
    }
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // principal - computed: false, optional: false, required: true
  private _principal = new DataplexDataProductAccessGroupsPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: DataplexDataProductAccessGroupsPrincipal) {
    this._principal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }
}

export class DataplexDataProductAccessGroupsList extends cdktn.ComplexList {
  public internalValue? : DataplexDataProductAccessGroups[] | cdktn.IResolvable

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
  public get(index: number): DataplexDataProductAccessGroupsOutputReference {
    return new DataplexDataProductAccessGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDataProductTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#create DataplexDataProduct#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#delete DataplexDataProduct#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#update DataplexDataProduct#update}
  */
  readonly update?: string;
}

export function dataplexDataProductTimeoutsToTerraform(struct?: DataplexDataProductTimeouts | cdktn.IResolvable): any {
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


export function dataplexDataProductTimeoutsToHclTerraform(struct?: DataplexDataProductTimeouts | cdktn.IResolvable): any {
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

export class DataplexDataProductTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataplexDataProductTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataplexDataProductTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product google_dataplex_data_product}
*/
export class DataplexDataProduct extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataplex_data_product";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataplexDataProduct resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataplexDataProduct to import
  * @param importFromId The id of the existing DataplexDataProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataplexDataProduct to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dataplex_data_product", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dataplex_data_product google_dataplex_data_product} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataplexDataProductConfig
  */
  public constructor(scope: Construct, id: string, config: DataplexDataProductConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataplex_data_product',
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
    this._dataProductId = config.dataProductId;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._icon = config.icon;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._ownerEmails = config.ownerEmails;
    this._project = config.project;
    this._accessApprovalConfig.internalValue = config.accessApprovalConfig;
    this._accessGroups.internalValue = config.accessGroups;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_count - computed: true, optional: false, required: false
  public get assetCount() {
    return this.getNumberAttribute('asset_count');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_product_id - computed: false, optional: false, required: true
  private _dataProductId?: string; 
  public get dataProductId() {
    return this.getStringAttribute('data_product_id');
  }
  public set dataProductId(value: string) {
    this._dataProductId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProductIdInput() {
    return this._dataProductId;
  }

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_emails - computed: false, optional: false, required: true
  private _ownerEmails?: string[]; 
  public get ownerEmails() {
    return this.getListAttribute('owner_emails');
  }
  public set ownerEmails(value: string[]) {
    this._ownerEmails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerEmailsInput() {
    return this._ownerEmails;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // access_approval_config - computed: false, optional: true, required: false
  private _accessApprovalConfig = new DataplexDataProductAccessApprovalConfigOutputReference(this, "access_approval_config");
  public get accessApprovalConfig() {
    return this._accessApprovalConfig;
  }
  public putAccessApprovalConfig(value: DataplexDataProductAccessApprovalConfig) {
    this._accessApprovalConfig.internalValue = value;
  }
  public resetAccessApprovalConfig() {
    this._accessApprovalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessApprovalConfigInput() {
    return this._accessApprovalConfig.internalValue;
  }

  // access_groups - computed: false, optional: true, required: false
  private _accessGroups = new DataplexDataProductAccessGroupsList(this, "access_groups", true);
  public get accessGroups() {
    return this._accessGroups;
  }
  public putAccessGroups(value: DataplexDataProductAccessGroups[] | cdktn.IResolvable) {
    this._accessGroups.internalValue = value;
  }
  public resetAccessGroups() {
    this._accessGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupsInput() {
    return this._accessGroups.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataplexDataProductTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataplexDataProductTimeouts) {
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
      data_product_id: cdktn.stringToTerraform(this._dataProductId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      icon: cdktn.stringToTerraform(this._icon),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      owner_emails: cdktn.listMapper(cdktn.stringToTerraform, false)(this._ownerEmails),
      project: cdktn.stringToTerraform(this._project),
      access_approval_config: dataplexDataProductAccessApprovalConfigToTerraform(this._accessApprovalConfig.internalValue),
      access_groups: cdktn.listMapper(dataplexDataProductAccessGroupsToTerraform, true)(this._accessGroups.internalValue),
      timeouts: dataplexDataProductTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_product_id: {
        value: cdktn.stringToHclTerraform(this._dataProductId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      icon: {
        value: cdktn.stringToHclTerraform(this._icon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_emails: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._ownerEmails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_approval_config: {
        value: dataplexDataProductAccessApprovalConfigToHclTerraform(this._accessApprovalConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataplexDataProductAccessApprovalConfigList",
      },
      access_groups: {
        value: cdktn.listMapperHcl(dataplexDataProductAccessGroupsToHclTerraform, true)(this._accessGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataplexDataProductAccessGroupsList",
      },
      timeouts: {
        value: dataplexDataProductTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataplexDataProductTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
