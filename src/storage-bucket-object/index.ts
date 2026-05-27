/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface StorageBucketObjectConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the containing bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#bucket StorageBucketObject#bucket}
  */
  readonly bucket: string;
  /**
  * Cache-Control directive to specify caching behavior of object data. If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#cache_control StorageBucketObject#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * Data as string to be uploaded. Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#content StorageBucketObject#content}
  */
  readonly content?: string;
  /**
  * Content-Disposition of the object data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#content_disposition StorageBucketObject#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Content-Encoding of the object data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#content_encoding StorageBucketObject#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Content-Language of the object data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#content_language StorageBucketObject#content_language}
  */
  readonly contentLanguage?: string;
  /**
  * Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#content_type StorageBucketObject#content_type}
  */
  readonly contentType?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#deletion_policy StorageBucketObject#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#detect_md5hash StorageBucketObject#detect_md5hash}
  */
  readonly detectMd5Hash?: string;
  /**
  * Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#event_based_hold StorageBucketObject#event_based_hold}
  */
  readonly eventBasedHold?: boolean | cdktn.IResolvable;
  /**
  * Flag to set empty Content-Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#force_empty_content_type StorageBucketObject#force_empty_content_type}
  */
  readonly forceEmptyContentType?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#id StorageBucketObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource name of the Cloud KMS key that will be used to encrypt the object. Overrides the object metadata's kmsKeyName value, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#kms_key_name StorageBucketObject#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * User-provided metadata, in key/value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#metadata StorageBucketObject#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The name of the object. If you're interpolating the name of this object, see output_name instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#name StorageBucketObject#name}
  */
  readonly name: string;
  /**
  * A path to the data you want to upload. Must be defined if content is not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#source StorageBucketObject#source}
  */
  readonly source?: string;
  /**
  * User-provided md5hash, Base 64 MD5 hash of the object data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#source_md5hash StorageBucketObject#source_md5hash}
  */
  readonly sourceMd5Hash?: string;
  /**
  * The StorageClass of the new bucket object. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#storage_class StorageBucketObject#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#temporary_hold StorageBucketObject#temporary_hold}
  */
  readonly temporaryHold?: boolean | cdktn.IResolvable;
  /**
  * contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#contexts StorageBucketObject#contexts}
  */
  readonly contexts?: StorageBucketObjectContexts;
  /**
  * customer_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#customer_encryption StorageBucketObject#customer_encryption}
  */
  readonly customerEncryption?: StorageBucketObjectCustomerEncryption;
  /**
  * retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#retention StorageBucketObject#retention}
  */
  readonly retention?: StorageBucketObjectRetention;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#timeouts StorageBucketObject#timeouts}
  */
  readonly timeouts?: StorageBucketObjectTimeouts;
}
export interface StorageBucketObjectContextsCustom {
  /**
  * An individual object context. Context keys and their corresponding values must start with an alphanumeric character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#key StorageBucketObject#key}
  */
  readonly key: string;
  /**
  * The value associated with this context. This field holds the primary information for the given context key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#value StorageBucketObject#value}
  */
  readonly value: string;
}

export function storageBucketObjectContextsCustomToTerraform(struct?: StorageBucketObjectContextsCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function storageBucketObjectContextsCustomToHclTerraform(struct?: StorageBucketObjectContextsCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class StorageBucketObjectContextsCustomOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageBucketObjectContextsCustom | cdktn.IResolvable | undefined {
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

  public set internalValue(value: StorageBucketObjectContextsCustom | cdktn.IResolvable | undefined) {
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class StorageBucketObjectContextsCustomList extends cdktn.ComplexList {
  public internalValue? : StorageBucketObjectContextsCustom[] | cdktn.IResolvable

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
  public get(index: number): StorageBucketObjectContextsCustomOutputReference {
    return new StorageBucketObjectContextsCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageBucketObjectContexts {
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#custom StorageBucketObject#custom}
  */
  readonly custom: StorageBucketObjectContextsCustom[] | cdktn.IResolvable;
}

export function storageBucketObjectContextsToTerraform(struct?: StorageBucketObjectContextsOutputReference | StorageBucketObjectContexts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktn.listMapper(storageBucketObjectContextsCustomToTerraform, true)(struct!.custom),
  }
}


export function storageBucketObjectContextsToHclTerraform(struct?: StorageBucketObjectContextsOutputReference | StorageBucketObjectContexts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktn.listMapperHcl(storageBucketObjectContextsCustomToHclTerraform, true)(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "StorageBucketObjectContextsCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageBucketObjectContextsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageBucketObjectContexts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBucketObjectContexts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._custom.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._custom.internalValue = value.custom;
    }
  }

  // custom - computed: false, optional: false, required: true
  private _custom = new StorageBucketObjectContextsCustomList(this, "custom", false);
  public get custom() {
    return this._custom;
  }
  public putCustom(value: StorageBucketObjectContextsCustom[] | cdktn.IResolvable) {
    this._custom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }
}
export interface StorageBucketObjectCustomerEncryption {
  /**
  * The encryption algorithm. Default: AES256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#encryption_algorithm StorageBucketObject#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Base64 encoded customer supplied encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#encryption_key StorageBucketObject#encryption_key}
  */
  readonly encryptionKey: string;
}

export function storageBucketObjectCustomerEncryptionToTerraform(struct?: StorageBucketObjectCustomerEncryptionOutputReference | StorageBucketObjectCustomerEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_algorithm: cdktn.stringToTerraform(struct!.encryptionAlgorithm),
    encryption_key: cdktn.stringToTerraform(struct!.encryptionKey),
  }
}


export function storageBucketObjectCustomerEncryptionToHclTerraform(struct?: StorageBucketObjectCustomerEncryptionOutputReference | StorageBucketObjectCustomerEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_algorithm: {
      value: cdktn.stringToHclTerraform(struct!.encryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key: {
      value: cdktn.stringToHclTerraform(struct!.encryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageBucketObjectCustomerEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageBucketObjectCustomerEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._encryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBucketObjectCustomerEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionAlgorithm = undefined;
      this._encryptionKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._encryptionKey = value.encryptionKey;
    }
  }

  // encryption_algorithm - computed: false, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // encryption_key - computed: false, optional: false, required: true
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }
}
export interface StorageBucketObjectRetention {
  /**
  * The object retention mode. Supported values include: "Unlocked", "Locked".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#mode StorageBucketObject#mode}
  */
  readonly mode: string;
  /**
  * Time in RFC 3339 (e.g. 2030-01-01T02:03:04Z) until which object retention protects this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#retain_until_time StorageBucketObject#retain_until_time}
  */
  readonly retainUntilTime: string;
}

export function storageBucketObjectRetentionToTerraform(struct?: StorageBucketObjectRetentionOutputReference | StorageBucketObjectRetention): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
    retain_until_time: cdktn.stringToTerraform(struct!.retainUntilTime),
  }
}


export function storageBucketObjectRetentionToHclTerraform(struct?: StorageBucketObjectRetentionOutputReference | StorageBucketObjectRetention): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retain_until_time: {
      value: cdktn.stringToHclTerraform(struct!.retainUntilTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageBucketObjectRetentionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageBucketObjectRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._retainUntilTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainUntilTime = this._retainUntilTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBucketObjectRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._retainUntilTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._retainUntilTime = value.retainUntilTime;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // retain_until_time - computed: false, optional: false, required: true
  private _retainUntilTime?: string; 
  public get retainUntilTime() {
    return this.getStringAttribute('retain_until_time');
  }
  public set retainUntilTime(value: string) {
    this._retainUntilTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retainUntilTimeInput() {
    return this._retainUntilTime;
  }
}
export interface StorageBucketObjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#create StorageBucketObject#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#delete StorageBucketObject#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#update StorageBucketObject#update}
  */
  readonly update?: string;
}

export function storageBucketObjectTimeoutsToTerraform(struct?: StorageBucketObjectTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function storageBucketObjectTimeoutsToHclTerraform(struct?: StorageBucketObjectTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class StorageBucketObjectTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageBucketObjectTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: StorageBucketObjectTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object google_storage_bucket_object}
*/
export class StorageBucketObject extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_bucket_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a StorageBucketObject resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageBucketObject to import
  * @param importFromId The id of the existing StorageBucketObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageBucketObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_bucket_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_bucket_object google_storage_bucket_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageBucketObjectConfig
  */
  public constructor(scope: Construct, id: string, config: StorageBucketObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_bucket_object',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.33.0',
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
    this._bucket = config.bucket;
    this._cacheControl = config.cacheControl;
    this._content = config.content;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentLanguage = config.contentLanguage;
    this._contentType = config.contentType;
    this._deletionPolicy = config.deletionPolicy;
    this._detectMd5Hash = config.detectMd5Hash;
    this._eventBasedHold = config.eventBasedHold;
    this._forceEmptyContentType = config.forceEmptyContentType;
    this._id = config.id;
    this._kmsKeyName = config.kmsKeyName;
    this._metadata = config.metadata;
    this._name = config.name;
    this._source = config.source;
    this._sourceMd5Hash = config.sourceMd5Hash;
    this._storageClass = config.storageClass;
    this._temporaryHold = config.temporaryHold;
    this._contexts.internalValue = config.contexts;
    this._customerEncryption.internalValue = config.customerEncryption;
    this._retention.internalValue = config.retention;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string; 
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl;
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string; 
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string; 
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }
  public set contentLanguage(value: string) {
    this._contentLanguage = value;
  }
  public resetContentLanguage() {
    this._contentLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLanguageInput() {
    return this._contentLanguage;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // crc32c - computed: true, optional: false, required: false
  public get crc32C() {
    return this.getStringAttribute('crc32c');
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

  // detect_md5hash - computed: false, optional: true, required: false
  private _detectMd5Hash?: string; 
  public get detectMd5Hash() {
    return this.getStringAttribute('detect_md5hash');
  }
  public set detectMd5Hash(value: string) {
    this._detectMd5Hash = value;
  }
  public resetDetectMd5Hash() {
    this._detectMd5Hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectMd5HashInput() {
    return this._detectMd5Hash;
  }

  // event_based_hold - computed: false, optional: true, required: false
  private _eventBasedHold?: boolean | cdktn.IResolvable; 
  public get eventBasedHold() {
    return this.getBooleanAttribute('event_based_hold');
  }
  public set eventBasedHold(value: boolean | cdktn.IResolvable) {
    this._eventBasedHold = value;
  }
  public resetEventBasedHold() {
    this._eventBasedHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBasedHoldInput() {
    return this._eventBasedHold;
  }

  // force_empty_content_type - computed: false, optional: true, required: false
  private _forceEmptyContentType?: boolean | cdktn.IResolvable; 
  public get forceEmptyContentType() {
    return this.getBooleanAttribute('force_empty_content_type');
  }
  public set forceEmptyContentType(value: boolean | cdktn.IResolvable) {
    this._forceEmptyContentType = value;
  }
  public resetForceEmptyContentType() {
    this._forceEmptyContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceEmptyContentTypeInput() {
    return this._forceEmptyContentType;
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
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

  // kms_key_name - computed: true, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // md5hash - computed: true, optional: false, required: false
  public get md5Hash() {
    return this.getStringAttribute('md5hash');
  }

  // md5hexhash - computed: true, optional: false, required: false
  public get md5Hexhash() {
    return this.getStringAttribute('md5hexhash');
  }

  // media_link - computed: true, optional: false, required: false
  public get mediaLink() {
    return this.getStringAttribute('media_link');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // output_name - computed: true, optional: false, required: false
  public get outputName() {
    return this.getStringAttribute('output_name');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_md5hash - computed: false, optional: true, required: false
  private _sourceMd5Hash?: string; 
  public get sourceMd5Hash() {
    return this.getStringAttribute('source_md5hash');
  }
  public set sourceMd5Hash(value: string) {
    this._sourceMd5Hash = value;
  }
  public resetSourceMd5Hash() {
    this._sourceMd5Hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMd5HashInput() {
    return this._sourceMd5Hash;
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // temporary_hold - computed: false, optional: true, required: false
  private _temporaryHold?: boolean | cdktn.IResolvable; 
  public get temporaryHold() {
    return this.getBooleanAttribute('temporary_hold');
  }
  public set temporaryHold(value: boolean | cdktn.IResolvable) {
    this._temporaryHold = value;
  }
  public resetTemporaryHold() {
    this._temporaryHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryHoldInput() {
    return this._temporaryHold;
  }

  // contexts - computed: false, optional: true, required: false
  private _contexts = new StorageBucketObjectContextsOutputReference(this, "contexts");
  public get contexts() {
    return this._contexts;
  }
  public putContexts(value: StorageBucketObjectContexts) {
    this._contexts.internalValue = value;
  }
  public resetContexts() {
    this._contexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextsInput() {
    return this._contexts.internalValue;
  }

  // customer_encryption - computed: false, optional: true, required: false
  private _customerEncryption = new StorageBucketObjectCustomerEncryptionOutputReference(this, "customer_encryption");
  public get customerEncryption() {
    return this._customerEncryption;
  }
  public putCustomerEncryption(value: StorageBucketObjectCustomerEncryption) {
    this._customerEncryption.internalValue = value;
  }
  public resetCustomerEncryption() {
    this._customerEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerEncryptionInput() {
    return this._customerEncryption.internalValue;
  }

  // retention - computed: false, optional: true, required: false
  private _retention = new StorageBucketObjectRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: StorageBucketObjectRetention) {
    this._retention.internalValue = value;
  }
  public resetRetention() {
    this._retention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageBucketObjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageBucketObjectTimeouts) {
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
      bucket: cdktn.stringToTerraform(this._bucket),
      cache_control: cdktn.stringToTerraform(this._cacheControl),
      content: cdktn.stringToTerraform(this._content),
      content_disposition: cdktn.stringToTerraform(this._contentDisposition),
      content_encoding: cdktn.stringToTerraform(this._contentEncoding),
      content_language: cdktn.stringToTerraform(this._contentLanguage),
      content_type: cdktn.stringToTerraform(this._contentType),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      detect_md5hash: cdktn.stringToTerraform(this._detectMd5Hash),
      event_based_hold: cdktn.booleanToTerraform(this._eventBasedHold),
      force_empty_content_type: cdktn.booleanToTerraform(this._forceEmptyContentType),
      id: cdktn.stringToTerraform(this._id),
      kms_key_name: cdktn.stringToTerraform(this._kmsKeyName),
      metadata: cdktn.hashMapper(cdktn.stringToTerraform)(this._metadata),
      name: cdktn.stringToTerraform(this._name),
      source: cdktn.stringToTerraform(this._source),
      source_md5hash: cdktn.stringToTerraform(this._sourceMd5Hash),
      storage_class: cdktn.stringToTerraform(this._storageClass),
      temporary_hold: cdktn.booleanToTerraform(this._temporaryHold),
      contexts: storageBucketObjectContextsToTerraform(this._contexts.internalValue),
      customer_encryption: storageBucketObjectCustomerEncryptionToTerraform(this._customerEncryption.internalValue),
      retention: storageBucketObjectRetentionToTerraform(this._retention.internalValue),
      timeouts: storageBucketObjectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktn.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_control: {
        value: cdktn.stringToHclTerraform(this._cacheControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktn.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_disposition: {
        value: cdktn.stringToHclTerraform(this._contentDisposition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_encoding: {
        value: cdktn.stringToHclTerraform(this._contentEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_language: {
        value: cdktn.stringToHclTerraform(this._contentLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_type: {
        value: cdktn.stringToHclTerraform(this._contentType),
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
      detect_md5hash: {
        value: cdktn.stringToHclTerraform(this._detectMd5Hash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_based_hold: {
        value: cdktn.booleanToHclTerraform(this._eventBasedHold),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_empty_content_type: {
        value: cdktn.booleanToHclTerraform(this._forceEmptyContentType),
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
      kms_key_name: {
        value: cdktn.stringToHclTerraform(this._kmsKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktn.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_md5hash: {
        value: cdktn.stringToHclTerraform(this._sourceMd5Hash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_class: {
        value: cdktn.stringToHclTerraform(this._storageClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      temporary_hold: {
        value: cdktn.booleanToHclTerraform(this._temporaryHold),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contexts: {
        value: storageBucketObjectContextsToHclTerraform(this._contexts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageBucketObjectContextsList",
      },
      customer_encryption: {
        value: storageBucketObjectCustomerEncryptionToHclTerraform(this._customerEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageBucketObjectCustomerEncryptionList",
      },
      retention: {
        value: storageBucketObjectRetentionToHclTerraform(this._retention.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageBucketObjectRetentionList",
      },
      timeouts: {
        value: storageBucketObjectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageBucketObjectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
