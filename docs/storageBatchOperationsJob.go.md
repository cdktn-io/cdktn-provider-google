# `storageBatchOperationsJob` Submodule <a name="`storageBatchOperationsJob` Submodule" id="@cdktn/provider-google.storageBatchOperationsJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBatchOperationsJob <a name="StorageBatchOperationsJob" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job google_storage_batch_operations_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

storagebatchoperationsjob.NewStorageBatchOperationsJob(scope Construct, id *string, config StorageBatchOperationsJobConfig) StorageBatchOperationsJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig">StorageBatchOperationsJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig">StorageBatchOperationsJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putBucketList">PutBucketList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putDeleteObject">PutDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata">PutPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutObjectHold">PutPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putRewriteObject">PutRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetBucketList">ResetBucketList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeleteObject">ResetDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeleteProtection">ResetDeleteProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetJobId">ResetJobId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetPutMetadata">ResetPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetPutObjectHold">ResetPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetRewriteObject">ResetRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBucketList` <a name="PutBucketList" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putBucketList"></a>

```go
func PutBucketList(value StorageBatchOperationsJobBucketListStruct)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putBucketList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

---

##### `PutDeleteObject` <a name="PutDeleteObject" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putDeleteObject"></a>

```go
func PutDeleteObject(value StorageBatchOperationsJobDeleteObject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putDeleteObject.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

---

##### `PutPutMetadata` <a name="PutPutMetadata" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata"></a>

```go
func PutPutMetadata(value StorageBatchOperationsJobPutMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

---

##### `PutPutObjectHold` <a name="PutPutObjectHold" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutObjectHold"></a>

```go
func PutPutObjectHold(value StorageBatchOperationsJobPutObjectHold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutObjectHold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

---

##### `PutRewriteObject` <a name="PutRewriteObject" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putRewriteObject"></a>

```go
func PutRewriteObject(value StorageBatchOperationsJobRewriteObject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putRewriteObject.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putTimeouts"></a>

```go
func PutTimeouts(value StorageBatchOperationsJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a>

---

##### `ResetBucketList` <a name="ResetBucketList" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetBucketList"></a>

```go
func ResetBucketList()
```

##### `ResetDeleteObject` <a name="ResetDeleteObject" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeleteObject"></a>

```go
func ResetDeleteObject()
```

##### `ResetDeleteProtection` <a name="ResetDeleteProtection" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeleteProtection"></a>

```go
func ResetDeleteProtection()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetId"></a>

```go
func ResetId()
```

##### `ResetJobId` <a name="ResetJobId" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetJobId"></a>

```go
func ResetJobId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPutMetadata` <a name="ResetPutMetadata" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetPutMetadata"></a>

```go
func ResetPutMetadata()
```

##### `ResetPutObjectHold` <a name="ResetPutObjectHold" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetPutObjectHold"></a>

```go
func ResetPutObjectHold()
```

##### `ResetRewriteObject` <a name="ResetRewriteObject" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetRewriteObject"></a>

```go
func ResetRewriteObject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageBatchOperationsJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

storagebatchoperationsjob.StorageBatchOperationsJob_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

storagebatchoperationsjob.StorageBatchOperationsJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

storagebatchoperationsjob.StorageBatchOperationsJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

storagebatchoperationsjob.StorageBatchOperationsJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a StorageBatchOperationsJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageBatchOperationsJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageBatchOperationsJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the StorageBatchOperationsJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.bucketList">BucketList</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference">StorageBatchOperationsJobBucketListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.completeTime">CompleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteObject">DeleteObject</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference">StorageBatchOperationsJobDeleteObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putMetadata">PutMetadata</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference">StorageBatchOperationsJobPutMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putObjectHold">PutObjectHold</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference">StorageBatchOperationsJobPutObjectHoldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.rewriteObject">RewriteObject</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference">StorageBatchOperationsJobRewriteObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.scheduleTime">ScheduleTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference">StorageBatchOperationsJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.bucketListInput">BucketListInput</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteObjectInput">DeleteObjectInput</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteProtectionInput">DeleteProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.jobIdInput">JobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putMetadataInput">PutMetadataInput</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putObjectHoldInput">PutObjectHoldInput</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.rewriteObjectInput">RewriteObjectInput</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteProtection">DeleteProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketList`<sup>Required</sup> <a name="BucketList" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.bucketList"></a>

```go
func BucketList() StorageBatchOperationsJobBucketListStructOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference">StorageBatchOperationsJobBucketListStructOutputReference</a>

---

##### `CompleteTime`<sup>Required</sup> <a name="CompleteTime" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.completeTime"></a>

```go
func CompleteTime() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteObject`<sup>Required</sup> <a name="DeleteObject" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteObject"></a>

```go
func DeleteObject() StorageBatchOperationsJobDeleteObjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference">StorageBatchOperationsJobDeleteObjectOutputReference</a>

---

##### `PutMetadata`<sup>Required</sup> <a name="PutMetadata" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putMetadata"></a>

```go
func PutMetadata() StorageBatchOperationsJobPutMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference">StorageBatchOperationsJobPutMetadataOutputReference</a>

---

##### `PutObjectHold`<sup>Required</sup> <a name="PutObjectHold" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putObjectHold"></a>

```go
func PutObjectHold() StorageBatchOperationsJobPutObjectHoldOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference">StorageBatchOperationsJobPutObjectHoldOutputReference</a>

---

##### `RewriteObject`<sup>Required</sup> <a name="RewriteObject" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.rewriteObject"></a>

```go
func RewriteObject() StorageBatchOperationsJobRewriteObjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference">StorageBatchOperationsJobRewriteObjectOutputReference</a>

---

##### `ScheduleTime`<sup>Required</sup> <a name="ScheduleTime" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.scheduleTime"></a>

```go
func ScheduleTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.timeouts"></a>

```go
func Timeouts() StorageBatchOperationsJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference">StorageBatchOperationsJobTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BucketListInput`<sup>Optional</sup> <a name="BucketListInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.bucketListInput"></a>

```go
func BucketListInput() StorageBatchOperationsJobBucketListStruct
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

---

##### `DeleteObjectInput`<sup>Optional</sup> <a name="DeleteObjectInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteObjectInput"></a>

```go
func DeleteObjectInput() StorageBatchOperationsJobDeleteObject
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

---

##### `DeleteProtectionInput`<sup>Optional</sup> <a name="DeleteProtectionInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteProtectionInput"></a>

```go
func DeleteProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.jobIdInput"></a>

```go
func JobIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PutMetadataInput`<sup>Optional</sup> <a name="PutMetadataInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putMetadataInput"></a>

```go
func PutMetadataInput() StorageBatchOperationsJobPutMetadata
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

---

##### `PutObjectHoldInput`<sup>Optional</sup> <a name="PutObjectHoldInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putObjectHoldInput"></a>

```go
func PutObjectHoldInput() StorageBatchOperationsJobPutObjectHold
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

---

##### `RewriteObjectInput`<sup>Optional</sup> <a name="RewriteObjectInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.rewriteObjectInput"></a>

```go
func RewriteObjectInput() StorageBatchOperationsJobRewriteObject
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteProtection`<sup>Required</sup> <a name="DeleteProtection" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteProtection"></a>

```go
func DeleteProtection() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBatchOperationsJobBucketListBuckets <a name="StorageBatchOperationsJobBucketListBuckets" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

&storagebatchoperationsjob.StorageBatchOperationsJobBucketListBuckets {
	Bucket: *string,
	Manifest: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest,
	PrefixList: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.bucket">Bucket</a></code> | <code>*string</code> | Bucket name for the objects to be transformed. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.manifest">Manifest</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a></code> | manifest block. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.prefixList">PrefixList</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | prefix_list block. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Bucket name for the objects to be transformed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#bucket StorageBatchOperationsJob#bucket}

---

##### `Manifest`<sup>Optional</sup> <a name="Manifest" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.manifest"></a>

```go
Manifest StorageBatchOperationsJobBucketListBucketsManifest
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#manifest StorageBatchOperationsJob#manifest}

---

##### `PrefixList`<sup>Optional</sup> <a name="PrefixList" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.prefixList"></a>

```go
PrefixList StorageBatchOperationsJobBucketListBucketsPrefixListStruct
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

prefix_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#prefix_list StorageBatchOperationsJob#prefix_list}

---

### StorageBatchOperationsJobBucketListBucketsManifest <a name="StorageBatchOperationsJobBucketListBucketsManifest" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

&storagebatchoperationsjob.StorageBatchOperationsJobBucketListBucketsManifest {
	ManifestLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest.property.manifestLocation">ManifestLocation</a></code> | <code>*string</code> | Specifies objects in a manifest file. |

---

##### `ManifestLocation`<sup>Optional</sup> <a name="ManifestLocation" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest.property.manifestLocation"></a>

```go
ManifestLocation *string
```

- *Type:* *string

Specifies objects in a manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#manifest_location StorageBatchOperationsJob#manifest_location}

---

### StorageBatchOperationsJobBucketListBucketsPrefixListStruct <a name="StorageBatchOperationsJobBucketListBucketsPrefixListStruct" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

&storagebatchoperationsjob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct {
	IncludedObjectPrefixes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct.property.includedObjectPrefixes">IncludedObjectPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#included_object_prefixes StorageBatchOperationsJob#included_object_prefixes}. |

---

##### `IncludedObjectPrefixes`<sup>Optional</sup> <a name="IncludedObjectPrefixes" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct.property.includedObjectPrefixes"></a>

```go
IncludedObjectPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#included_object_prefixes StorageBatchOperationsJob#included_object_prefixes}.

---

### StorageBatchOperationsJobBucketListStruct <a name="StorageBatchOperationsJobBucketListStruct" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

&storagebatchoperationsjob.StorageBatchOperationsJobBucketListStruct {
	Buckets: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct.property.buckets">Buckets</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a></code> | buckets block. |

---

##### `Buckets`<sup>Required</sup> <a name="Buckets" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct.property.buckets"></a>

```go
Buckets StorageBatchOperationsJobBucketListBuckets
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a>

buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#buckets StorageBatchOperationsJob#buckets}

---

### StorageBatchOperationsJobConfig <a name="StorageBatchOperationsJobConfig" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

&storagebatchoperationsjob.StorageBatchOperationsJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BucketList: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct,
	DeleteObject: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject,
	DeleteProtection: interface{},
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	JobId: *string,
	Project: *string,
	PutMetadata: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata,
	PutObjectHold: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold,
	RewriteObject: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.bucketList">BucketList</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a></code> | bucket_list block. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deleteObject">DeleteObject</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a></code> | delete_object block. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deleteProtection">DeleteProtection</a></code> | <code>interface{}</code> | If set to 'true', the storage batch operation job will not be deleted and new job will be created. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.description">Description</a></code> | <code>*string</code> | A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#id StorageBatchOperationsJob#id}. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.jobId">JobId</a></code> | <code>*string</code> | The ID of the job. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#project StorageBatchOperationsJob#project}. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.putMetadata">PutMetadata</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a></code> | put_metadata block. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.putObjectHold">PutObjectHold</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a></code> | put_object_hold block. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.rewriteObject">RewriteObject</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a></code> | rewrite_object block. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketList`<sup>Optional</sup> <a name="BucketList" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.bucketList"></a>

```go
BucketList StorageBatchOperationsJobBucketListStruct
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

bucket_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#bucket_list StorageBatchOperationsJob#bucket_list}

---

##### `DeleteObject`<sup>Optional</sup> <a name="DeleteObject" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deleteObject"></a>

```go
DeleteObject StorageBatchOperationsJobDeleteObject
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

delete_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#delete_object StorageBatchOperationsJob#delete_object}

---

##### `DeleteProtection`<sup>Optional</sup> <a name="DeleteProtection" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deleteProtection"></a>

```go
DeleteProtection interface{}
```

- *Type:* interface{}

If set to 'true', the storage batch operation job will not be deleted and new job will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#delete_protection StorageBatchOperationsJob#delete_protection}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#deletion_policy StorageBatchOperationsJob#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#description StorageBatchOperationsJob#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#id StorageBatchOperationsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JobId`<sup>Optional</sup> <a name="JobId" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.jobId"></a>

```go
JobId *string
```

- *Type:* *string

The ID of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#job_id StorageBatchOperationsJob#job_id}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#project StorageBatchOperationsJob#project}.

---

##### `PutMetadata`<sup>Optional</sup> <a name="PutMetadata" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.putMetadata"></a>

```go
PutMetadata StorageBatchOperationsJobPutMetadata
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

put_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#put_metadata StorageBatchOperationsJob#put_metadata}

---

##### `PutObjectHold`<sup>Optional</sup> <a name="PutObjectHold" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.putObjectHold"></a>

```go
PutObjectHold StorageBatchOperationsJobPutObjectHold
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

put_object_hold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#put_object_hold StorageBatchOperationsJob#put_object_hold}

---

##### `RewriteObject`<sup>Optional</sup> <a name="RewriteObject" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.rewriteObject"></a>

```go
RewriteObject StorageBatchOperationsJobRewriteObject
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

rewrite_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#rewrite_object StorageBatchOperationsJob#rewrite_object}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.timeouts"></a>

```go
Timeouts StorageBatchOperationsJobTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#timeouts StorageBatchOperationsJob#timeouts}

---

### StorageBatchOperationsJobDeleteObject <a name="StorageBatchOperationsJobDeleteObject" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

&storagebatchoperationsjob.StorageBatchOperationsJobDeleteObject {
	PermanentObjectDeletionEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject.property.permanentObjectDeletionEnabled">PermanentObjectDeletionEnabled</a></code> | <code>interface{}</code> | enable flag to permanently delete object and all object versions if versioning is enabled on bucket. |

---

##### `PermanentObjectDeletionEnabled`<sup>Required</sup> <a name="PermanentObjectDeletionEnabled" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject.property.permanentObjectDeletionEnabled"></a>

```go
PermanentObjectDeletionEnabled interface{}
```

- *Type:* interface{}

enable flag to permanently delete object and all object versions if versioning is enabled on bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#permanent_object_deletion_enabled StorageBatchOperationsJob#permanent_object_deletion_enabled}

---

### StorageBatchOperationsJobPutMetadata <a name="StorageBatchOperationsJobPutMetadata" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

&storagebatchoperationsjob.StorageBatchOperationsJobPutMetadata {
	CacheControl: *string,
	ContentDisposition: *string,
	ContentEncoding: *string,
	ContentLanguage: *string,
	ContentType: *string,
	CustomMetadata: *map[string]*string,
	CustomTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.cacheControl">CacheControl</a></code> | <code>*string</code> | Cache-Control directive to specify caching behavior of object data. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | Content-Disposition of the object data. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | Content Encoding of the object data. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | Content-Language of the object data. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentType">ContentType</a></code> | <code>*string</code> | Content-Type of the object data. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.customMetadata">CustomMetadata</a></code> | <code>*map[string]*string</code> | User-provided metadata, in key/value pairs. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.customTime">CustomTime</a></code> | <code>*string</code> | Updates the objects fixed custom time metadata. |

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.cacheControl"></a>

```go
CacheControl *string
```

- *Type:* *string

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#cache_control StorageBatchOperationsJob#cache_control}

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentDisposition"></a>

```go
ContentDisposition *string
```

- *Type:* *string

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#content_disposition StorageBatchOperationsJob#content_disposition}

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentEncoding"></a>

```go
ContentEncoding *string
```

- *Type:* *string

Content Encoding of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#content_encoding StorageBatchOperationsJob#content_encoding}

---

##### `ContentLanguage`<sup>Optional</sup> <a name="ContentLanguage" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentLanguage"></a>

```go
ContentLanguage *string
```

- *Type:* *string

Content-Language of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#content_language StorageBatchOperationsJob#content_language}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Content-Type of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#content_type StorageBatchOperationsJob#content_type}

---

##### `CustomMetadata`<sup>Optional</sup> <a name="CustomMetadata" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.customMetadata"></a>

```go
CustomMetadata *map[string]*string
```

- *Type:* *map[string]*string

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#custom_metadata StorageBatchOperationsJob#custom_metadata}

---

##### `CustomTime`<sup>Optional</sup> <a name="CustomTime" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.customTime"></a>

```go
CustomTime *string
```

- *Type:* *string

Updates the objects fixed custom time metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#custom_time StorageBatchOperationsJob#custom_time}

---

### StorageBatchOperationsJobPutObjectHold <a name="StorageBatchOperationsJobPutObjectHold" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

&storagebatchoperationsjob.StorageBatchOperationsJobPutObjectHold {
	EventBasedHold: *string,
	TemporaryHold: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.property.eventBasedHold">EventBasedHold</a></code> | <code>*string</code> | set/unset to update event based hold for objects. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.property.temporaryHold">TemporaryHold</a></code> | <code>*string</code> | set/unset to update temporary based hold for objects. |

---

##### `EventBasedHold`<sup>Optional</sup> <a name="EventBasedHold" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.property.eventBasedHold"></a>

```go
EventBasedHold *string
```

- *Type:* *string

set/unset to update event based hold for objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#event_based_hold StorageBatchOperationsJob#event_based_hold}

---

##### `TemporaryHold`<sup>Optional</sup> <a name="TemporaryHold" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.property.temporaryHold"></a>

```go
TemporaryHold *string
```

- *Type:* *string

set/unset to update temporary based hold for objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#temporary_hold StorageBatchOperationsJob#temporary_hold}

---

### StorageBatchOperationsJobRewriteObject <a name="StorageBatchOperationsJobRewriteObject" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

&storagebatchoperationsjob.StorageBatchOperationsJobRewriteObject {
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject.property.kmsKey">KmsKey</a></code> | <code>*string</code> | valid kms key. |

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

valid kms key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#kms_key StorageBatchOperationsJob#kms_key}

---

### StorageBatchOperationsJobTimeouts <a name="StorageBatchOperationsJobTimeouts" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

&storagebatchoperationsjob.StorageBatchOperationsJobTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#create StorageBatchOperationsJob#create}. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#delete StorageBatchOperationsJob#delete}. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#update StorageBatchOperationsJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#create StorageBatchOperationsJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#delete StorageBatchOperationsJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/storage_batch_operations_job#update StorageBatchOperationsJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBatchOperationsJobBucketListBucketsManifestOutputReference <a name="StorageBatchOperationsJobBucketListBucketsManifestOutputReference" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

storagebatchoperationsjob.NewStorageBatchOperationsJobBucketListBucketsManifestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBatchOperationsJobBucketListBucketsManifestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resetManifestLocation">ResetManifestLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManifestLocation` <a name="ResetManifestLocation" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resetManifestLocation"></a>

```go
func ResetManifestLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocationInput">ManifestLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocation">ManifestLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManifestLocationInput`<sup>Optional</sup> <a name="ManifestLocationInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocationInput"></a>

```go
func ManifestLocationInput() *string
```

- *Type:* *string

---

##### `ManifestLocation`<sup>Required</sup> <a name="ManifestLocation" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocation"></a>

```go
func ManifestLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBatchOperationsJobBucketListBucketsManifest
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a>

---


### StorageBatchOperationsJobBucketListBucketsOutputReference <a name="StorageBatchOperationsJobBucketListBucketsOutputReference" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

storagebatchoperationsjob.NewStorageBatchOperationsJobBucketListBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBatchOperationsJobBucketListBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putManifest">PutManifest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList">PutPrefixList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resetManifest">ResetManifest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resetPrefixList">ResetPrefixList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManifest` <a name="PutManifest" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putManifest"></a>

```go
func PutManifest(value StorageBatchOperationsJobBucketListBucketsManifest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putManifest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a>

---

##### `PutPrefixList` <a name="PutPrefixList" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList"></a>

```go
func PutPrefixList(value StorageBatchOperationsJobBucketListBucketsPrefixListStruct)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---

##### `ResetManifest` <a name="ResetManifest" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resetManifest"></a>

```go
func ResetManifest()
```

##### `ResetPrefixList` <a name="ResetPrefixList" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resetPrefixList"></a>

```go
func ResetPrefixList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.manifest">Manifest</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference">StorageBatchOperationsJobBucketListBucketsManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixList">PrefixList</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference">StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.manifestInput">ManifestInput</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixListInput">PrefixListInput</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.manifest"></a>

```go
func Manifest() StorageBatchOperationsJobBucketListBucketsManifestOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference">StorageBatchOperationsJobBucketListBucketsManifestOutputReference</a>

---

##### `PrefixList`<sup>Required</sup> <a name="PrefixList" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixList"></a>

```go
func PrefixList() StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference">StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `ManifestInput`<sup>Optional</sup> <a name="ManifestInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.manifestInput"></a>

```go
func ManifestInput() StorageBatchOperationsJobBucketListBucketsManifest
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a>

---

##### `PrefixListInput`<sup>Optional</sup> <a name="PrefixListInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixListInput"></a>

```go
func PrefixListInput() StorageBatchOperationsJobBucketListBucketsPrefixListStruct
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBatchOperationsJobBucketListBuckets
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a>

---


### StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference <a name="StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

storagebatchoperationsjob.NewStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resetIncludedObjectPrefixes">ResetIncludedObjectPrefixes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludedObjectPrefixes` <a name="ResetIncludedObjectPrefixes" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resetIncludedObjectPrefixes"></a>

```go
func ResetIncludedObjectPrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixesInput">IncludedObjectPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixes">IncludedObjectPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludedObjectPrefixesInput`<sup>Optional</sup> <a name="IncludedObjectPrefixesInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixesInput"></a>

```go
func IncludedObjectPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedObjectPrefixes`<sup>Required</sup> <a name="IncludedObjectPrefixes" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixes"></a>

```go
func IncludedObjectPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBatchOperationsJobBucketListBucketsPrefixListStruct
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---


### StorageBatchOperationsJobBucketListStructOutputReference <a name="StorageBatchOperationsJobBucketListStructOutputReference" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

storagebatchoperationsjob.NewStorageBatchOperationsJobBucketListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBatchOperationsJobBucketListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.putBuckets">PutBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBuckets` <a name="PutBuckets" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.putBuckets"></a>

```go
func PutBuckets(value StorageBatchOperationsJobBucketListBuckets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.putBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.buckets">Buckets</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference">StorageBatchOperationsJobBucketListBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.bucketsInput">BucketsInput</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Buckets`<sup>Required</sup> <a name="Buckets" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.buckets"></a>

```go
func Buckets() StorageBatchOperationsJobBucketListBucketsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference">StorageBatchOperationsJobBucketListBucketsOutputReference</a>

---

##### `BucketsInput`<sup>Optional</sup> <a name="BucketsInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.bucketsInput"></a>

```go
func BucketsInput() StorageBatchOperationsJobBucketListBuckets
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBatchOperationsJobBucketListStruct
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

---


### StorageBatchOperationsJobDeleteObjectOutputReference <a name="StorageBatchOperationsJobDeleteObjectOutputReference" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

storagebatchoperationsjob.NewStorageBatchOperationsJobDeleteObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBatchOperationsJobDeleteObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabledInput">PermanentObjectDeletionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabled">PermanentObjectDeletionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermanentObjectDeletionEnabledInput`<sup>Optional</sup> <a name="PermanentObjectDeletionEnabledInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabledInput"></a>

```go
func PermanentObjectDeletionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PermanentObjectDeletionEnabled`<sup>Required</sup> <a name="PermanentObjectDeletionEnabled" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabled"></a>

```go
func PermanentObjectDeletionEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBatchOperationsJobDeleteObject
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

---


### StorageBatchOperationsJobPutMetadataOutputReference <a name="StorageBatchOperationsJobPutMetadataOutputReference" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

storagebatchoperationsjob.NewStorageBatchOperationsJobPutMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBatchOperationsJobPutMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentDisposition">ResetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentEncoding">ResetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentLanguage">ResetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCustomMetadata">ResetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCustomTime">ResetCustomTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacheControl` <a name="ResetCacheControl" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCacheControl"></a>

```go
func ResetCacheControl()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentDisposition"></a>

```go
func ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentEncoding"></a>

```go
func ResetContentEncoding()
```

##### `ResetContentLanguage` <a name="ResetContentLanguage" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentLanguage"></a>

```go
func ResetContentLanguage()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetCustomMetadata` <a name="ResetCustomMetadata" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCustomMetadata"></a>

```go
func ResetCustomMetadata()
```

##### `ResetCustomTime` <a name="ResetCustomTime" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCustomTime"></a>

```go
func ResetCustomTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.cacheControlInput">CacheControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguageInput">ContentLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customMetadataInput">CustomMetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customTimeInput">CustomTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.cacheControl">CacheControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customMetadata">CustomMetadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customTime">CustomTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.cacheControlInput"></a>

```go
func CacheControlInput() *string
```

- *Type:* *string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentDispositionInput"></a>

```go
func ContentDispositionInput() *string
```

- *Type:* *string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentEncodingInput"></a>

```go
func ContentEncodingInput() *string
```

- *Type:* *string

---

##### `ContentLanguageInput`<sup>Optional</sup> <a name="ContentLanguageInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguageInput"></a>

```go
func ContentLanguageInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `CustomMetadataInput`<sup>Optional</sup> <a name="CustomMetadataInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customMetadataInput"></a>

```go
func CustomMetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CustomTimeInput`<sup>Optional</sup> <a name="CustomTimeInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customTimeInput"></a>

```go
func CustomTimeInput() *string
```

- *Type:* *string

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.cacheControl"></a>

```go
func CacheControl() *string
```

- *Type:* *string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentDisposition"></a>

```go
func ContentDisposition() *string
```

- *Type:* *string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentEncoding"></a>

```go
func ContentEncoding() *string
```

- *Type:* *string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguage"></a>

```go
func ContentLanguage() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customMetadata"></a>

```go
func CustomMetadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CustomTime`<sup>Required</sup> <a name="CustomTime" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customTime"></a>

```go
func CustomTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBatchOperationsJobPutMetadata
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

---


### StorageBatchOperationsJobPutObjectHoldOutputReference <a name="StorageBatchOperationsJobPutObjectHoldOutputReference" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

storagebatchoperationsjob.NewStorageBatchOperationsJobPutObjectHoldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBatchOperationsJobPutObjectHoldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resetEventBasedHold">ResetEventBasedHold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resetTemporaryHold">ResetTemporaryHold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventBasedHold` <a name="ResetEventBasedHold" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resetEventBasedHold"></a>

```go
func ResetEventBasedHold()
```

##### `ResetTemporaryHold` <a name="ResetTemporaryHold" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resetTemporaryHold"></a>

```go
func ResetTemporaryHold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHoldInput">EventBasedHoldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHoldInput">TemporaryHoldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHold">EventBasedHold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHold">TemporaryHold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventBasedHoldInput`<sup>Optional</sup> <a name="EventBasedHoldInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHoldInput"></a>

```go
func EventBasedHoldInput() *string
```

- *Type:* *string

---

##### `TemporaryHoldInput`<sup>Optional</sup> <a name="TemporaryHoldInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHoldInput"></a>

```go
func TemporaryHoldInput() *string
```

- *Type:* *string

---

##### `EventBasedHold`<sup>Required</sup> <a name="EventBasedHold" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHold"></a>

```go
func EventBasedHold() *string
```

- *Type:* *string

---

##### `TemporaryHold`<sup>Required</sup> <a name="TemporaryHold" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHold"></a>

```go
func TemporaryHold() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBatchOperationsJobPutObjectHold
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

---


### StorageBatchOperationsJobRewriteObjectOutputReference <a name="StorageBatchOperationsJobRewriteObjectOutputReference" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

storagebatchoperationsjob.NewStorageBatchOperationsJobRewriteObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBatchOperationsJobRewriteObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBatchOperationsJobRewriteObject
```

- *Type:* <a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

---


### StorageBatchOperationsJobTimeoutsOutputReference <a name="StorageBatchOperationsJobTimeoutsOutputReference" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagebatchoperationsjob"

storagebatchoperationsjob.NewStorageBatchOperationsJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBatchOperationsJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



