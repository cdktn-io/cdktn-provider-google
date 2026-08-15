/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComputeImageConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#deletion_policy ComputeImage#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of this resource. Provide this property when
  * you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#description ComputeImage#description}
  */
  readonly description?: string;
  /**
  * Size of the image when restored onto a persistent disk (in GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#disk_size_gb ComputeImage#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * The name of the image family to which this image belongs. You can
  * create disks by specifying an image family instead of a specific
  * image name. The image family always returns its latest image that is
  * not deprecated. The name of the image family must comply with
  * RFC1035.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#family ComputeImage#family}
  */
  readonly family?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#id ComputeImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels to apply to this Image.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#labels ComputeImage#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Any applicable license URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#licenses ComputeImage#licenses}
  */
  readonly licenses?: string[];
  /**
  * Name of the resource; provided by the client when the resource is
  * created. The name must be 1-63 characters long, and comply with
  * RFC1035. Specifically, the name must be 1-63 characters long and
  * match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
  * the first character must be a lowercase letter, and all following
  * characters must be a dash, lowercase letter, or digit, except the
  * last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#name ComputeImage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#project ComputeImage#project}
  */
  readonly project?: string;
  /**
  * The source disk to create this image based on.
  * You must provide either this property or the
  * rawDisk.source property but not both to create an image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#source_disk ComputeImage#source_disk}
  */
  readonly sourceDisk?: string;
  /**
  * URL of the source image used to create this image. In order to create an image, you must provide the full or partial
  * URL of one of the following:
  * 
  * * The selfLink URL
  * * This property
  * * The rawDisk.source URL
  * * The sourceDisk URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#source_image ComputeImage#source_image}
  */
  readonly sourceImage?: string;
  /**
  * URL of the source snapshot used to create this image.
  * 
  * In order to create an image, you must provide the full or partial URL of one of the following:
  * 
  * * The selfLink URL
  * * This property
  * * The sourceImage URL
  * * The rawDisk.source URL
  * * The sourceDisk URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#source_snapshot ComputeImage#source_snapshot}
  */
  readonly sourceSnapshot?: string;
  /**
  * Cloud Storage bucket storage location of the image
  * (regional or multi-regional).
  * Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#storage_locations ComputeImage#storage_locations}
  */
  readonly storageLocations?: string[];
  /**
  * guest_os_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#guest_os_features ComputeImage#guest_os_features}
  */
  readonly guestOsFeatures?: ComputeImageGuestOsFeatures[] | cdktn.IResolvable;
  /**
  * image_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#image_encryption_key ComputeImage#image_encryption_key}
  */
  readonly imageEncryptionKey?: ComputeImageImageEncryptionKey;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#params ComputeImage#params}
  */
  readonly params?: ComputeImageParams;
  /**
  * raw_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#raw_disk ComputeImage#raw_disk}
  */
  readonly rawDisk?: ComputeImageRawDisk;
  /**
  * shielded_instance_initial_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#shielded_instance_initial_state ComputeImage#shielded_instance_initial_state}
  */
  readonly shieldedInstanceInitialState?: ComputeImageShieldedInstanceInitialState;
  /**
  * source_disk_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#source_disk_encryption_key ComputeImage#source_disk_encryption_key}
  */
  readonly sourceDiskEncryptionKey?: ComputeImageSourceDiskEncryptionKey;
  /**
  * source_image_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#source_image_encryption_key ComputeImage#source_image_encryption_key}
  */
  readonly sourceImageEncryptionKey?: ComputeImageSourceImageEncryptionKey;
  /**
  * source_snapshot_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#source_snapshot_encryption_key ComputeImage#source_snapshot_encryption_key}
  */
  readonly sourceSnapshotEncryptionKey?: ComputeImageSourceSnapshotEncryptionKey;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#timeouts ComputeImage#timeouts}
  */
  readonly timeouts?: ComputeImageTimeouts;
}
export interface ComputeImageGuestOsFeatures {
  /**
  * The type of supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Possible values: ["MULTI_IP_SUBNET", "SECURE_BOOT", "SEV_CAPABLE", "UEFI_COMPATIBLE", "VIRTIO_SCSI_MULTIQUEUE", "WINDOWS", "GVNIC", "IDPF", "SEV_LIVE_MIGRATABLE", "SEV_SNP_CAPABLE", "SUSPEND_RESUME_COMPATIBLE", "TDX_CAPABLE", "SEV_LIVE_MIGRATABLE_V2", "SNP_SVSM_CAPABLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#type ComputeImage#type}
  */
  readonly type: string;
}

export function computeImageGuestOsFeaturesToTerraform(struct?: ComputeImageGuestOsFeatures | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function computeImageGuestOsFeaturesToHclTerraform(struct?: ComputeImageGuestOsFeatures | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeImageGuestOsFeaturesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeImageGuestOsFeatures | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeImageGuestOsFeatures | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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
}

export class ComputeImageGuestOsFeaturesList extends cdktn.ComplexList {
  public internalValue? : ComputeImageGuestOsFeatures[] | cdktn.IResolvable

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
  public get(index: number): ComputeImageGuestOsFeaturesOutputReference {
    return new ComputeImageGuestOsFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeImageImageEncryptionKey {
  /**
  * The self link of the encryption key that is stored in Google Cloud
  * KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}
  */
  readonly kmsKeySelfLink?: string;
  /**
  * The service account being used for the encryption request for the
  * given KMS key. If absent, the Compute Engine default service
  * account is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Specifies a 256-bit customer-supplied encryption key, encoded in
  * RFC 4648 base64 to either encrypt or decrypt this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}
  */
  readonly rawKey?: string;
  /**
  * Specifies a 256-bit customer-supplied encryption key, encoded in
  * RFC 4648 base64 to either encrypt or decrypt this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}
  */
  readonly rsaEncryptedKey?: string;
}

export function computeImageImageEncryptionKeyToTerraform(struct?: ComputeImageImageEncryptionKeyOutputReference | ComputeImageImageEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_self_link: cdktn.stringToTerraform(struct!.kmsKeySelfLink),
    kms_key_service_account: cdktn.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktn.stringToTerraform(struct!.rawKey),
    rsa_encrypted_key: cdktn.stringToTerraform(struct!.rsaEncryptedKey),
  }
}


export function computeImageImageEncryptionKeyToHclTerraform(struct?: ComputeImageImageEncryptionKeyOutputReference | ComputeImageImageEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_self_link: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeySelfLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_key: {
      value: cdktn.stringToHclTerraform(struct!.rawKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_encrypted_key: {
      value: cdktn.stringToHclTerraform(struct!.rsaEncryptedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeImageImageEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeImageImageEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeySelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeySelfLink = this._kmsKeySelfLink;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    if (this._rsaEncryptedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaEncryptedKey = this._rsaEncryptedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeImageImageEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeySelfLink = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
      this._rsaEncryptedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeySelfLink = value.kmsKeySelfLink;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
      this._rsaEncryptedKey = value.rsaEncryptedKey;
    }
  }

  // kms_key_self_link - computed: false, optional: true, required: false
  private _kmsKeySelfLink?: string; 
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
  public set kmsKeySelfLink(value: string) {
    this._kmsKeySelfLink = value;
  }
  public resetKmsKeySelfLink() {
    this._kmsKeySelfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeySelfLinkInput() {
    return this._kmsKeySelfLink;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // rsa_encrypted_key - computed: false, optional: true, required: false
  private _rsaEncryptedKey?: string; 
  public get rsaEncryptedKey() {
    return this.getStringAttribute('rsa_encrypted_key');
  }
  public set rsaEncryptedKey(value: string) {
    this._rsaEncryptedKey = value;
  }
  public resetRsaEncryptedKey() {
    this._rsaEncryptedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaEncryptedKeyInput() {
    return this._rsaEncryptedKey;
  }
}
export interface ComputeImageParams {
  /**
  * Resource manager tags to be bound to the image. Tag keys and values have the
  * same definition as resource manager tags. Keys and values can be either in numeric format,
  * such as tagKeys/{tag_key_id} and tagValues/{tag_value_id} or in namespaced format such as
  * {org_id|projectId}/{tag_key_short_name} and {tag_value_short_name}. The field is ignored when empty.
  * The field is immutable and causes resource replacement when mutated. This field is only
  * set at create time and modifying this field after creation will trigger recreation.
  * To apply tags to an existing resource, see the google_tags_tag_binding resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#resource_manager_tags ComputeImage#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
}

export function computeImageParamsToTerraform(struct?: ComputeImageParamsOutputReference | ComputeImageParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_manager_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.resourceManagerTags),
  }
}


export function computeImageParamsToHclTerraform(struct?: ComputeImageParamsOutputReference | ComputeImageParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_manager_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeImageParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeImageParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeImageParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceManagerTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceManagerTags = value.resourceManagerTags;
    }
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags?: { [key: string]: string }; 
  public get resourceManagerTags() {
    return this.getStringMapAttribute('resource_manager_tags');
  }
  public set resourceManagerTags(value: { [key: string]: string }) {
    this._resourceManagerTags = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags;
  }
}
export interface ComputeImageRawDisk {
  /**
  * The format used to encode and transmit the block device, which
  * should be TAR. This is just a container and transmission format
  * and not a runtime format. Provided by the client when the disk
  * image is created. Default value: "TAR" Possible values: ["TAR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#container_type ComputeImage#container_type}
  */
  readonly containerType?: string;
  /**
  * An optional SHA1 checksum of the disk image before unpackaging.
  * This is provided by the client when the disk image is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#sha1 ComputeImage#sha1}
  */
  readonly sha1?: string;
  /**
  * The full Google Cloud Storage URL where disk storage is stored
  * You must provide either this property or the sourceDisk property
  * but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#source ComputeImage#source}
  */
  readonly source: string;
}

export function computeImageRawDiskToTerraform(struct?: ComputeImageRawDiskOutputReference | ComputeImageRawDisk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_type: cdktn.stringToTerraform(struct!.containerType),
    sha1: cdktn.stringToTerraform(struct!.sha1),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function computeImageRawDiskToHclTerraform(struct?: ComputeImageRawDiskOutputReference | ComputeImageRawDisk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_type: {
      value: cdktn.stringToHclTerraform(struct!.containerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sha1: {
      value: cdktn.stringToHclTerraform(struct!.sha1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeImageRawDiskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeImageRawDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerType = this._containerType;
    }
    if (this._sha1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1 = this._sha1;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeImageRawDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerType = undefined;
      this._sha1 = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerType = value.containerType;
      this._sha1 = value.sha1;
      this._source = value.source;
    }
  }

  // container_type - computed: false, optional: true, required: false
  private _containerType?: string; 
  public get containerType() {
    return this.getStringAttribute('container_type');
  }
  public set containerType(value: string) {
    this._containerType = value;
  }
  public resetContainerType() {
    this._containerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerTypeInput() {
    return this._containerType;
  }

  // sha1 - computed: false, optional: true, required: false
  private _sha1?: string; 
  public get sha1() {
    return this.getStringAttribute('sha1');
  }
  public set sha1(value: string) {
    this._sha1 = value;
  }
  public resetSha1() {
    this._sha1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface ComputeImageShieldedInstanceInitialStateDbs {
  /**
  * The raw content in the secure keys file.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#content ComputeImage#content}
  */
  readonly content: string;
  /**
  * The file type of source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#file_type ComputeImage#file_type}
  */
  readonly fileType?: string;
}

export function computeImageShieldedInstanceInitialStateDbsToTerraform(struct?: ComputeImageShieldedInstanceInitialStateDbs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    file_type: cdktn.stringToTerraform(struct!.fileType),
  }
}


export function computeImageShieldedInstanceInitialStateDbsToHclTerraform(struct?: ComputeImageShieldedInstanceInitialStateDbs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_type: {
      value: cdktn.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeImageShieldedInstanceInitialStateDbsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeImageShieldedInstanceInitialStateDbs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeImageShieldedInstanceInitialStateDbs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._fileType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._fileType = value.fileType;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }
}

export class ComputeImageShieldedInstanceInitialStateDbsList extends cdktn.ComplexList {
  public internalValue? : ComputeImageShieldedInstanceInitialStateDbs[] | cdktn.IResolvable

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
  public get(index: number): ComputeImageShieldedInstanceInitialStateDbsOutputReference {
    return new ComputeImageShieldedInstanceInitialStateDbsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeImageShieldedInstanceInitialStateDbxs {
  /**
  * The raw content in the secure keys file.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#content ComputeImage#content}
  */
  readonly content: string;
  /**
  * The file type of source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#file_type ComputeImage#file_type}
  */
  readonly fileType?: string;
}

export function computeImageShieldedInstanceInitialStateDbxsToTerraform(struct?: ComputeImageShieldedInstanceInitialStateDbxs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    file_type: cdktn.stringToTerraform(struct!.fileType),
  }
}


export function computeImageShieldedInstanceInitialStateDbxsToHclTerraform(struct?: ComputeImageShieldedInstanceInitialStateDbxs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_type: {
      value: cdktn.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeImageShieldedInstanceInitialStateDbxsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeImageShieldedInstanceInitialStateDbxs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeImageShieldedInstanceInitialStateDbxs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._fileType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._fileType = value.fileType;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }
}

export class ComputeImageShieldedInstanceInitialStateDbxsList extends cdktn.ComplexList {
  public internalValue? : ComputeImageShieldedInstanceInitialStateDbxs[] | cdktn.IResolvable

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
  public get(index: number): ComputeImageShieldedInstanceInitialStateDbxsOutputReference {
    return new ComputeImageShieldedInstanceInitialStateDbxsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeImageShieldedInstanceInitialStateKeks {
  /**
  * The raw content in the secure keys file.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#content ComputeImage#content}
  */
  readonly content: string;
  /**
  * The file type of source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#file_type ComputeImage#file_type}
  */
  readonly fileType?: string;
}

export function computeImageShieldedInstanceInitialStateKeksToTerraform(struct?: ComputeImageShieldedInstanceInitialStateKeks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    file_type: cdktn.stringToTerraform(struct!.fileType),
  }
}


export function computeImageShieldedInstanceInitialStateKeksToHclTerraform(struct?: ComputeImageShieldedInstanceInitialStateKeks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_type: {
      value: cdktn.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeImageShieldedInstanceInitialStateKeksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeImageShieldedInstanceInitialStateKeks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeImageShieldedInstanceInitialStateKeks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._fileType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._fileType = value.fileType;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }
}

export class ComputeImageShieldedInstanceInitialStateKeksList extends cdktn.ComplexList {
  public internalValue? : ComputeImageShieldedInstanceInitialStateKeks[] | cdktn.IResolvable

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
  public get(index: number): ComputeImageShieldedInstanceInitialStateKeksOutputReference {
    return new ComputeImageShieldedInstanceInitialStateKeksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeImageShieldedInstanceInitialStatePk {
  /**
  * The raw content in the secure keys file.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#content ComputeImage#content}
  */
  readonly content: string;
  /**
  * The file type of source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#file_type ComputeImage#file_type}
  */
  readonly fileType?: string;
}

export function computeImageShieldedInstanceInitialStatePkToTerraform(struct?: ComputeImageShieldedInstanceInitialStatePkOutputReference | ComputeImageShieldedInstanceInitialStatePk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    file_type: cdktn.stringToTerraform(struct!.fileType),
  }
}


export function computeImageShieldedInstanceInitialStatePkToHclTerraform(struct?: ComputeImageShieldedInstanceInitialStatePkOutputReference | ComputeImageShieldedInstanceInitialStatePk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_type: {
      value: cdktn.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeImageShieldedInstanceInitialStatePkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeImageShieldedInstanceInitialStatePk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeImageShieldedInstanceInitialStatePk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._fileType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._fileType = value.fileType;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }
}
export interface ComputeImageShieldedInstanceInitialState {
  /**
  * dbs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#dbs ComputeImage#dbs}
  */
  readonly dbs?: ComputeImageShieldedInstanceInitialStateDbs[] | cdktn.IResolvable;
  /**
  * dbxs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#dbxs ComputeImage#dbxs}
  */
  readonly dbxs?: ComputeImageShieldedInstanceInitialStateDbxs[] | cdktn.IResolvable;
  /**
  * keks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#keks ComputeImage#keks}
  */
  readonly keks?: ComputeImageShieldedInstanceInitialStateKeks[] | cdktn.IResolvable;
  /**
  * pk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#pk ComputeImage#pk}
  */
  readonly pk?: ComputeImageShieldedInstanceInitialStatePk;
}

export function computeImageShieldedInstanceInitialStateToTerraform(struct?: ComputeImageShieldedInstanceInitialStateOutputReference | ComputeImageShieldedInstanceInitialState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dbs: cdktn.listMapper(computeImageShieldedInstanceInitialStateDbsToTerraform, true)(struct!.dbs),
    dbxs: cdktn.listMapper(computeImageShieldedInstanceInitialStateDbxsToTerraform, true)(struct!.dbxs),
    keks: cdktn.listMapper(computeImageShieldedInstanceInitialStateKeksToTerraform, true)(struct!.keks),
    pk: computeImageShieldedInstanceInitialStatePkToTerraform(struct!.pk),
  }
}


export function computeImageShieldedInstanceInitialStateToHclTerraform(struct?: ComputeImageShieldedInstanceInitialStateOutputReference | ComputeImageShieldedInstanceInitialState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dbs: {
      value: cdktn.listMapperHcl(computeImageShieldedInstanceInitialStateDbsToHclTerraform, true)(struct!.dbs),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeImageShieldedInstanceInitialStateDbsList",
    },
    dbxs: {
      value: cdktn.listMapperHcl(computeImageShieldedInstanceInitialStateDbxsToHclTerraform, true)(struct!.dbxs),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeImageShieldedInstanceInitialStateDbxsList",
    },
    keks: {
      value: cdktn.listMapperHcl(computeImageShieldedInstanceInitialStateKeksToHclTerraform, true)(struct!.keks),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeImageShieldedInstanceInitialStateKeksList",
    },
    pk: {
      value: computeImageShieldedInstanceInitialStatePkToHclTerraform(struct!.pk),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeImageShieldedInstanceInitialStatePkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeImageShieldedInstanceInitialStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeImageShieldedInstanceInitialState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbs = this._dbs?.internalValue;
    }
    if (this._dbxs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbxs = this._dbxs?.internalValue;
    }
    if (this._keks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keks = this._keks?.internalValue;
    }
    if (this._pk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pk = this._pk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeImageShieldedInstanceInitialState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbs.internalValue = undefined;
      this._dbxs.internalValue = undefined;
      this._keks.internalValue = undefined;
      this._pk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbs.internalValue = value.dbs;
      this._dbxs.internalValue = value.dbxs;
      this._keks.internalValue = value.keks;
      this._pk.internalValue = value.pk;
    }
  }

  // dbs - computed: false, optional: true, required: false
  private _dbs = new ComputeImageShieldedInstanceInitialStateDbsList(this, "dbs", false);
  public get dbs() {
    return this._dbs;
  }
  public putDbs(value: ComputeImageShieldedInstanceInitialStateDbs[] | cdktn.IResolvable) {
    this._dbs.internalValue = value;
  }
  public resetDbs() {
    this._dbs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbsInput() {
    return this._dbs.internalValue;
  }

  // dbxs - computed: false, optional: true, required: false
  private _dbxs = new ComputeImageShieldedInstanceInitialStateDbxsList(this, "dbxs", false);
  public get dbxs() {
    return this._dbxs;
  }
  public putDbxs(value: ComputeImageShieldedInstanceInitialStateDbxs[] | cdktn.IResolvable) {
    this._dbxs.internalValue = value;
  }
  public resetDbxs() {
    this._dbxs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbxsInput() {
    return this._dbxs.internalValue;
  }

  // keks - computed: false, optional: true, required: false
  private _keks = new ComputeImageShieldedInstanceInitialStateKeksList(this, "keks", false);
  public get keks() {
    return this._keks;
  }
  public putKeks(value: ComputeImageShieldedInstanceInitialStateKeks[] | cdktn.IResolvable) {
    this._keks.internalValue = value;
  }
  public resetKeks() {
    this._keks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keksInput() {
    return this._keks.internalValue;
  }

  // pk - computed: false, optional: true, required: false
  private _pk = new ComputeImageShieldedInstanceInitialStatePkOutputReference(this, "pk");
  public get pk() {
    return this._pk;
  }
  public putPk(value: ComputeImageShieldedInstanceInitialStatePk) {
    this._pk.internalValue = value;
  }
  public resetPk() {
    this._pk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkInput() {
    return this._pk.internalValue;
  }
}
export interface ComputeImageSourceDiskEncryptionKey {
  /**
  * The self link of the encryption key used to decrypt this resource. Also called KmsKeyName
  * in the cloud console. Your project's Compute Engine System service account
  * ('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
  * 'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
  * See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}
  */
  readonly kmsKeySelfLink?: string;
  /**
  * The service account being used for the encryption request for the
  * given KMS key. If absent, the Compute Engine default service
  * account is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Specifies a 256-bit customer-supplied encryption key, encoded in
  * RFC 4648 base64 to either encrypt or decrypt this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}
  */
  readonly rawKey?: string;
  /**
  * Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit
  * customer-supplied encryption key to either encrypt or decrypt
  * this resource. You can provide either the rawKey or the rsaEncryptedKey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}
  */
  readonly rsaEncryptedKey?: string;
}

export function computeImageSourceDiskEncryptionKeyToTerraform(struct?: ComputeImageSourceDiskEncryptionKeyOutputReference | ComputeImageSourceDiskEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_self_link: cdktn.stringToTerraform(struct!.kmsKeySelfLink),
    kms_key_service_account: cdktn.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktn.stringToTerraform(struct!.rawKey),
    rsa_encrypted_key: cdktn.stringToTerraform(struct!.rsaEncryptedKey),
  }
}


export function computeImageSourceDiskEncryptionKeyToHclTerraform(struct?: ComputeImageSourceDiskEncryptionKeyOutputReference | ComputeImageSourceDiskEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_self_link: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeySelfLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_key: {
      value: cdktn.stringToHclTerraform(struct!.rawKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_encrypted_key: {
      value: cdktn.stringToHclTerraform(struct!.rsaEncryptedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeImageSourceDiskEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeImageSourceDiskEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeySelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeySelfLink = this._kmsKeySelfLink;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    if (this._rsaEncryptedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaEncryptedKey = this._rsaEncryptedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeImageSourceDiskEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeySelfLink = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
      this._rsaEncryptedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeySelfLink = value.kmsKeySelfLink;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
      this._rsaEncryptedKey = value.rsaEncryptedKey;
    }
  }

  // kms_key_self_link - computed: false, optional: true, required: false
  private _kmsKeySelfLink?: string; 
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
  public set kmsKeySelfLink(value: string) {
    this._kmsKeySelfLink = value;
  }
  public resetKmsKeySelfLink() {
    this._kmsKeySelfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeySelfLinkInput() {
    return this._kmsKeySelfLink;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // rsa_encrypted_key - computed: false, optional: true, required: false
  private _rsaEncryptedKey?: string; 
  public get rsaEncryptedKey() {
    return this.getStringAttribute('rsa_encrypted_key');
  }
  public set rsaEncryptedKey(value: string) {
    this._rsaEncryptedKey = value;
  }
  public resetRsaEncryptedKey() {
    this._rsaEncryptedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaEncryptedKeyInput() {
    return this._rsaEncryptedKey;
  }
}
export interface ComputeImageSourceImageEncryptionKey {
  /**
  * The self link of the encryption key used to decrypt this resource. Also called KmsKeyName
  * in the cloud console. Your project's Compute Engine System service account
  * ('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
  * 'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
  * See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}
  */
  readonly kmsKeySelfLink?: string;
  /**
  * The service account being used for the encryption request for the
  * given KMS key. If absent, the Compute Engine default service
  * account is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Specifies a 256-bit customer-supplied encryption key, encoded in
  * RFC 4648 base64 to either encrypt or decrypt this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}
  */
  readonly rawKey?: string;
  /**
  * Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit
  * customer-supplied encryption key to either encrypt or decrypt
  * this resource. You can provide either the rawKey or the rsaEncryptedKey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}
  */
  readonly rsaEncryptedKey?: string;
}

export function computeImageSourceImageEncryptionKeyToTerraform(struct?: ComputeImageSourceImageEncryptionKeyOutputReference | ComputeImageSourceImageEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_self_link: cdktn.stringToTerraform(struct!.kmsKeySelfLink),
    kms_key_service_account: cdktn.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktn.stringToTerraform(struct!.rawKey),
    rsa_encrypted_key: cdktn.stringToTerraform(struct!.rsaEncryptedKey),
  }
}


export function computeImageSourceImageEncryptionKeyToHclTerraform(struct?: ComputeImageSourceImageEncryptionKeyOutputReference | ComputeImageSourceImageEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_self_link: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeySelfLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_key: {
      value: cdktn.stringToHclTerraform(struct!.rawKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_encrypted_key: {
      value: cdktn.stringToHclTerraform(struct!.rsaEncryptedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeImageSourceImageEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeImageSourceImageEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeySelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeySelfLink = this._kmsKeySelfLink;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    if (this._rsaEncryptedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaEncryptedKey = this._rsaEncryptedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeImageSourceImageEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeySelfLink = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
      this._rsaEncryptedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeySelfLink = value.kmsKeySelfLink;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
      this._rsaEncryptedKey = value.rsaEncryptedKey;
    }
  }

  // kms_key_self_link - computed: false, optional: true, required: false
  private _kmsKeySelfLink?: string; 
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
  public set kmsKeySelfLink(value: string) {
    this._kmsKeySelfLink = value;
  }
  public resetKmsKeySelfLink() {
    this._kmsKeySelfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeySelfLinkInput() {
    return this._kmsKeySelfLink;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // rsa_encrypted_key - computed: false, optional: true, required: false
  private _rsaEncryptedKey?: string; 
  public get rsaEncryptedKey() {
    return this.getStringAttribute('rsa_encrypted_key');
  }
  public set rsaEncryptedKey(value: string) {
    this._rsaEncryptedKey = value;
  }
  public resetRsaEncryptedKey() {
    this._rsaEncryptedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaEncryptedKeyInput() {
    return this._rsaEncryptedKey;
  }
}
export interface ComputeImageSourceSnapshotEncryptionKey {
  /**
  * The self link of the encryption key used to decrypt this resource. Also called KmsKeyName
  * in the cloud console. Your project's Compute Engine System service account
  * ('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
  * 'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
  * See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}
  */
  readonly kmsKeySelfLink?: string;
  /**
  * The service account being used for the encryption request for the
  * given KMS key. If absent, the Compute Engine default service
  * account is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Specifies a 256-bit customer-supplied encryption key, encoded in
  * RFC 4648 base64 to either encrypt or decrypt this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}
  */
  readonly rawKey?: string;
  /**
  * Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit
  * customer-supplied encryption key to either encrypt or decrypt
  * this resource. You can provide either the rawKey or the rsaEncryptedKey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}
  */
  readonly rsaEncryptedKey?: string;
}

export function computeImageSourceSnapshotEncryptionKeyToTerraform(struct?: ComputeImageSourceSnapshotEncryptionKeyOutputReference | ComputeImageSourceSnapshotEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_self_link: cdktn.stringToTerraform(struct!.kmsKeySelfLink),
    kms_key_service_account: cdktn.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktn.stringToTerraform(struct!.rawKey),
    rsa_encrypted_key: cdktn.stringToTerraform(struct!.rsaEncryptedKey),
  }
}


export function computeImageSourceSnapshotEncryptionKeyToHclTerraform(struct?: ComputeImageSourceSnapshotEncryptionKeyOutputReference | ComputeImageSourceSnapshotEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_self_link: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeySelfLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_key: {
      value: cdktn.stringToHclTerraform(struct!.rawKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_encrypted_key: {
      value: cdktn.stringToHclTerraform(struct!.rsaEncryptedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeImageSourceSnapshotEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeImageSourceSnapshotEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeySelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeySelfLink = this._kmsKeySelfLink;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    if (this._rsaEncryptedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaEncryptedKey = this._rsaEncryptedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeImageSourceSnapshotEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeySelfLink = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
      this._rsaEncryptedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeySelfLink = value.kmsKeySelfLink;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
      this._rsaEncryptedKey = value.rsaEncryptedKey;
    }
  }

  // kms_key_self_link - computed: false, optional: true, required: false
  private _kmsKeySelfLink?: string; 
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
  public set kmsKeySelfLink(value: string) {
    this._kmsKeySelfLink = value;
  }
  public resetKmsKeySelfLink() {
    this._kmsKeySelfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeySelfLinkInput() {
    return this._kmsKeySelfLink;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // rsa_encrypted_key - computed: false, optional: true, required: false
  private _rsaEncryptedKey?: string; 
  public get rsaEncryptedKey() {
    return this.getStringAttribute('rsa_encrypted_key');
  }
  public set rsaEncryptedKey(value: string) {
    this._rsaEncryptedKey = value;
  }
  public resetRsaEncryptedKey() {
    this._rsaEncryptedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaEncryptedKeyInput() {
    return this._rsaEncryptedKey;
  }
}
export interface ComputeImageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#create ComputeImage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#delete ComputeImage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#update ComputeImage#update}
  */
  readonly update?: string;
}

export function computeImageTimeoutsToTerraform(struct?: ComputeImageTimeouts | cdktn.IResolvable): any {
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


export function computeImageTimeoutsToHclTerraform(struct?: ComputeImageTimeouts | cdktn.IResolvable): any {
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

export class ComputeImageTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeImageTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComputeImageTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image google_compute_image}
*/
export class ComputeImage extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputeImage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeImage to import
  * @param importFromId The id of the existing ComputeImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_image google_compute_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeImageConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeImageConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_image',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.44.0',
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
    this._diskSizeGb = config.diskSizeGb;
    this._family = config.family;
    this._id = config.id;
    this._labels = config.labels;
    this._licenses = config.licenses;
    this._name = config.name;
    this._project = config.project;
    this._sourceDisk = config.sourceDisk;
    this._sourceImage = config.sourceImage;
    this._sourceSnapshot = config.sourceSnapshot;
    this._storageLocations = config.storageLocations;
    this._guestOsFeatures.internalValue = config.guestOsFeatures;
    this._imageEncryptionKey.internalValue = config.imageEncryptionKey;
    this._params.internalValue = config.params;
    this._rawDisk.internalValue = config.rawDisk;
    this._shieldedInstanceInitialState.internalValue = config.shieldedInstanceInitialState;
    this._sourceDiskEncryptionKey.internalValue = config.sourceDiskEncryptionKey;
    this._sourceImageEncryptionKey.internalValue = config.sourceImageEncryptionKey;
    this._sourceSnapshotEncryptionKey.internalValue = config.sourceSnapshotEncryptionKey;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_size_bytes - computed: true, optional: false, required: false
  public get archiveSizeBytes() {
    return this.getNumberAttribute('archive_size_bytes');
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
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

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
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

  // licenses - computed: true, optional: true, required: false
  private _licenses?: string[]; 
  public get licenses() {
    return this.getListAttribute('licenses');
  }
  public set licenses(value: string[]) {
    this._licenses = value;
  }
  public resetLicenses() {
    this._licenses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensesInput() {
    return this._licenses;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // source_disk - computed: false, optional: true, required: false
  private _sourceDisk?: string; 
  public get sourceDisk() {
    return this.getStringAttribute('source_disk');
  }
  public set sourceDisk(value: string) {
    this._sourceDisk = value;
  }
  public resetSourceDisk() {
    this._sourceDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDiskInput() {
    return this._sourceDisk;
  }

  // source_image - computed: false, optional: true, required: false
  private _sourceImage?: string; 
  public get sourceImage() {
    return this.getStringAttribute('source_image');
  }
  public set sourceImage(value: string) {
    this._sourceImage = value;
  }
  public resetSourceImage() {
    this._sourceImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageInput() {
    return this._sourceImage;
  }

  // source_snapshot - computed: false, optional: true, required: false
  private _sourceSnapshot?: string; 
  public get sourceSnapshot() {
    return this.getStringAttribute('source_snapshot');
  }
  public set sourceSnapshot(value: string) {
    this._sourceSnapshot = value;
  }
  public resetSourceSnapshot() {
    this._sourceSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotInput() {
    return this._sourceSnapshot;
  }

  // storage_locations - computed: true, optional: true, required: false
  private _storageLocations?: string[]; 
  public get storageLocations() {
    return this.getListAttribute('storage_locations');
  }
  public set storageLocations(value: string[]) {
    this._storageLocations = value;
  }
  public resetStorageLocations() {
    this._storageLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationsInput() {
    return this._storageLocations;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // guest_os_features - computed: false, optional: true, required: false
  private _guestOsFeatures = new ComputeImageGuestOsFeaturesList(this, "guest_os_features", true);
  public get guestOsFeatures() {
    return this._guestOsFeatures;
  }
  public putGuestOsFeatures(value: ComputeImageGuestOsFeatures[] | cdktn.IResolvable) {
    this._guestOsFeatures.internalValue = value;
  }
  public resetGuestOsFeatures() {
    this._guestOsFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestOsFeaturesInput() {
    return this._guestOsFeatures.internalValue;
  }

  // image_encryption_key - computed: false, optional: true, required: false
  private _imageEncryptionKey = new ComputeImageImageEncryptionKeyOutputReference(this, "image_encryption_key");
  public get imageEncryptionKey() {
    return this._imageEncryptionKey;
  }
  public putImageEncryptionKey(value: ComputeImageImageEncryptionKey) {
    this._imageEncryptionKey.internalValue = value;
  }
  public resetImageEncryptionKey() {
    this._imageEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageEncryptionKeyInput() {
    return this._imageEncryptionKey.internalValue;
  }

  // params - computed: false, optional: true, required: false
  private _params = new ComputeImageParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: ComputeImageParams) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // raw_disk - computed: false, optional: true, required: false
  private _rawDisk = new ComputeImageRawDiskOutputReference(this, "raw_disk");
  public get rawDisk() {
    return this._rawDisk;
  }
  public putRawDisk(value: ComputeImageRawDisk) {
    this._rawDisk.internalValue = value;
  }
  public resetRawDisk() {
    this._rawDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawDiskInput() {
    return this._rawDisk.internalValue;
  }

  // shielded_instance_initial_state - computed: false, optional: true, required: false
  private _shieldedInstanceInitialState = new ComputeImageShieldedInstanceInitialStateOutputReference(this, "shielded_instance_initial_state");
  public get shieldedInstanceInitialState() {
    return this._shieldedInstanceInitialState;
  }
  public putShieldedInstanceInitialState(value: ComputeImageShieldedInstanceInitialState) {
    this._shieldedInstanceInitialState.internalValue = value;
  }
  public resetShieldedInstanceInitialState() {
    this._shieldedInstanceInitialState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceInitialStateInput() {
    return this._shieldedInstanceInitialState.internalValue;
  }

  // source_disk_encryption_key - computed: false, optional: true, required: false
  private _sourceDiskEncryptionKey = new ComputeImageSourceDiskEncryptionKeyOutputReference(this, "source_disk_encryption_key");
  public get sourceDiskEncryptionKey() {
    return this._sourceDiskEncryptionKey;
  }
  public putSourceDiskEncryptionKey(value: ComputeImageSourceDiskEncryptionKey) {
    this._sourceDiskEncryptionKey.internalValue = value;
  }
  public resetSourceDiskEncryptionKey() {
    this._sourceDiskEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDiskEncryptionKeyInput() {
    return this._sourceDiskEncryptionKey.internalValue;
  }

  // source_image_encryption_key - computed: false, optional: true, required: false
  private _sourceImageEncryptionKey = new ComputeImageSourceImageEncryptionKeyOutputReference(this, "source_image_encryption_key");
  public get sourceImageEncryptionKey() {
    return this._sourceImageEncryptionKey;
  }
  public putSourceImageEncryptionKey(value: ComputeImageSourceImageEncryptionKey) {
    this._sourceImageEncryptionKey.internalValue = value;
  }
  public resetSourceImageEncryptionKey() {
    this._sourceImageEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageEncryptionKeyInput() {
    return this._sourceImageEncryptionKey.internalValue;
  }

  // source_snapshot_encryption_key - computed: false, optional: true, required: false
  private _sourceSnapshotEncryptionKey = new ComputeImageSourceSnapshotEncryptionKeyOutputReference(this, "source_snapshot_encryption_key");
  public get sourceSnapshotEncryptionKey() {
    return this._sourceSnapshotEncryptionKey;
  }
  public putSourceSnapshotEncryptionKey(value: ComputeImageSourceSnapshotEncryptionKey) {
    this._sourceSnapshotEncryptionKey.internalValue = value;
  }
  public resetSourceSnapshotEncryptionKey() {
    this._sourceSnapshotEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotEncryptionKeyInput() {
    return this._sourceSnapshotEncryptionKey.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeImageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeImageTimeouts) {
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
      disk_size_gb: cdktn.numberToTerraform(this._diskSizeGb),
      family: cdktn.stringToTerraform(this._family),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      licenses: cdktn.listMapper(cdktn.stringToTerraform, false)(this._licenses),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      source_disk: cdktn.stringToTerraform(this._sourceDisk),
      source_image: cdktn.stringToTerraform(this._sourceImage),
      source_snapshot: cdktn.stringToTerraform(this._sourceSnapshot),
      storage_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._storageLocations),
      guest_os_features: cdktn.listMapper(computeImageGuestOsFeaturesToTerraform, true)(this._guestOsFeatures.internalValue),
      image_encryption_key: computeImageImageEncryptionKeyToTerraform(this._imageEncryptionKey.internalValue),
      params: computeImageParamsToTerraform(this._params.internalValue),
      raw_disk: computeImageRawDiskToTerraform(this._rawDisk.internalValue),
      shielded_instance_initial_state: computeImageShieldedInstanceInitialStateToTerraform(this._shieldedInstanceInitialState.internalValue),
      source_disk_encryption_key: computeImageSourceDiskEncryptionKeyToTerraform(this._sourceDiskEncryptionKey.internalValue),
      source_image_encryption_key: computeImageSourceImageEncryptionKeyToTerraform(this._sourceImageEncryptionKey.internalValue),
      source_snapshot_encryption_key: computeImageSourceSnapshotEncryptionKeyToTerraform(this._sourceSnapshotEncryptionKey.internalValue),
      timeouts: computeImageTimeoutsToTerraform(this._timeouts.internalValue),
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
      disk_size_gb: {
        value: cdktn.numberToHclTerraform(this._diskSizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      family: {
        value: cdktn.stringToHclTerraform(this._family),
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
      licenses: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._licenses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_disk: {
        value: cdktn.stringToHclTerraform(this._sourceDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_image: {
        value: cdktn.stringToHclTerraform(this._sourceImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_snapshot: {
        value: cdktn.stringToHclTerraform(this._sourceSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_locations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._storageLocations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      guest_os_features: {
        value: cdktn.listMapperHcl(computeImageGuestOsFeaturesToHclTerraform, true)(this._guestOsFeatures.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeImageGuestOsFeaturesList",
      },
      image_encryption_key: {
        value: computeImageImageEncryptionKeyToHclTerraform(this._imageEncryptionKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeImageImageEncryptionKeyList",
      },
      params: {
        value: computeImageParamsToHclTerraform(this._params.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeImageParamsList",
      },
      raw_disk: {
        value: computeImageRawDiskToHclTerraform(this._rawDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeImageRawDiskList",
      },
      shielded_instance_initial_state: {
        value: computeImageShieldedInstanceInitialStateToHclTerraform(this._shieldedInstanceInitialState.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeImageShieldedInstanceInitialStateList",
      },
      source_disk_encryption_key: {
        value: computeImageSourceDiskEncryptionKeyToHclTerraform(this._sourceDiskEncryptionKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeImageSourceDiskEncryptionKeyList",
      },
      source_image_encryption_key: {
        value: computeImageSourceImageEncryptionKeyToHclTerraform(this._sourceImageEncryptionKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeImageSourceImageEncryptionKeyList",
      },
      source_snapshot_encryption_key: {
        value: computeImageSourceSnapshotEncryptionKeyToHclTerraform(this._sourceSnapshotEncryptionKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeImageSourceSnapshotEncryptionKeyList",
      },
      timeouts: {
        value: computeImageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeImageTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
