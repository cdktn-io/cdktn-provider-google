# `storageFtpUser` Submodule <a name="`storageFtpUser` Submodule" id="@cdktn/provider-google.storageFtpUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageFtpUser <a name="StorageFtpUser" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user google_storage_ftp_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/storageftpuser"

storageftpuser.NewStorageFtpUser(scope Construct, id *string, config StorageFtpUserConfig) StorageFtpUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig">StorageFtpUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig">StorageFtpUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.putStorageDirectoryMappings">PutStorageDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.putUserCredentials">PutUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetStorageDirectoryMappings">ResetStorageDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetUserCredentials">ResetUserCredentials</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStorageDirectoryMappings` <a name="PutStorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putStorageDirectoryMappings"></a>

```go
func PutStorageDirectoryMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putStorageDirectoryMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts"></a>

```go
func PutTimeouts(value StorageFtpUserTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

---

##### `PutUserCredentials` <a name="PutUserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putUserCredentials"></a>

```go
func PutUserCredentials(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putUserCredentials.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetProject"></a>

```go
func ResetProject()
```

##### `ResetStorageDirectoryMappings` <a name="ResetStorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetStorageDirectoryMappings"></a>

```go
func ResetStorageDirectoryMappings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserCredentials` <a name="ResetUserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetUserCredentials"></a>

```go
func ResetUserCredentials()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageFtpUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/storageftpuser"

storageftpuser.StorageFtpUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/storageftpuser"

storageftpuser.StorageFtpUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/storageftpuser"

storageftpuser.StorageFtpUser_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/storageftpuser"

storageftpuser.StorageFtpUser_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a StorageFtpUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageFtpUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageFtpUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the StorageFtpUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappings">StorageDirectoryMappings</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList">StorageFtpUserStorageDirectoryMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference">StorageFtpUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentials">UserCredentials</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList">StorageFtpUserUserCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccountInput">CustomerServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverIdInput">ServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappingsInput">StorageDirectoryMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentialsInput">UserCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccount">CustomerServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverId">ServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageDirectoryMappings`<sup>Required</sup> <a name="StorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappings"></a>

```go
func StorageDirectoryMappings() StorageFtpUserStorageDirectoryMappingsList
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList">StorageFtpUserStorageDirectoryMappingsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeouts"></a>

```go
func Timeouts() StorageFtpUserTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference">StorageFtpUserTimeoutsOutputReference</a>

---

##### `UserCredentials`<sup>Required</sup> <a name="UserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentials"></a>

```go
func UserCredentials() StorageFtpUserUserCredentialsList
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList">StorageFtpUserUserCredentialsList</a>

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `CustomerServiceAccountInput`<sup>Optional</sup> <a name="CustomerServiceAccountInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccountInput"></a>

```go
func CustomerServiceAccountInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverIdInput"></a>

```go
func ServerIdInput() *string
```

- *Type:* *string

---

##### `StorageDirectoryMappingsInput`<sup>Optional</sup> <a name="StorageDirectoryMappingsInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappingsInput"></a>

```go
func StorageDirectoryMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserCredentialsInput`<sup>Optional</sup> <a name="UserCredentialsInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentialsInput"></a>

```go
func UserCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `CustomerServiceAccount`<sup>Required</sup> <a name="CustomerServiceAccount" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccount"></a>

```go
func CustomerServiceAccount() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverId"></a>

```go
func ServerId() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageFtpUserConfig <a name="StorageFtpUserConfig" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/storageftpuser"

&storageftpuser.StorageFtpUserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CustomerServiceAccount: *string,
	Location: *string,
	ServerId: *string,
	UserId: *string,
	DeletionPolicy: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	StorageDirectoryMappings: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v21.storageFtpUser.StorageFtpUserTimeouts,
	UserCredentials: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.customerServiceAccount">CustomerServiceAccount</a></code> | <code>*string</code> | The email address of the service account associated with the user. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.location">Location</a></code> | <code>*string</code> | The location (region) of the Storage FTP User. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.serverId">ServerId</a></code> | <code>*string</code> | The ID of the server. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userId">UserId</a></code> | <code>*string</code> | The unique ID for the user. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#id StorageFtpUser#id}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#project StorageFtpUser#project}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.storageDirectoryMappings">StorageDirectoryMappings</a></code> | <code>interface{}</code> | storage_directory_mappings block. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userCredentials">UserCredentials</a></code> | <code>interface{}</code> | user_credentials block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomerServiceAccount`<sup>Required</sup> <a name="CustomerServiceAccount" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.customerServiceAccount"></a>

```go
CustomerServiceAccount *string
```

- *Type:* *string

The email address of the service account associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#customer_service_account StorageFtpUser#customer_service_account}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location (region) of the Storage FTP User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#location StorageFtpUser#location}

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.serverId"></a>

```go
ServerId *string
```

- *Type:* *string

The ID of the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#server_id StorageFtpUser#server_id}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

The unique ID for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#user_id StorageFtpUser#user_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#deletion_policy StorageFtpUser#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#id StorageFtpUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Resource labels that can contain user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#labels StorageFtpUser#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#project StorageFtpUser#project}.

---

##### `StorageDirectoryMappings`<sup>Optional</sup> <a name="StorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.storageDirectoryMappings"></a>

```go
StorageDirectoryMappings interface{}
```

- *Type:* interface{}

storage_directory_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#storage_directory_mappings StorageFtpUser#storage_directory_mappings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.timeouts"></a>

```go
Timeouts StorageFtpUserTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#timeouts StorageFtpUser#timeouts}

---

##### `UserCredentials`<sup>Optional</sup> <a name="UserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userCredentials"></a>

```go
UserCredentials interface{}
```

- *Type:* interface{}

user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#user_credentials StorageFtpUser#user_credentials}

---

### StorageFtpUserStorageDirectoryMappings <a name="StorageFtpUserStorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/storageftpuser"

&storageftpuser.StorageFtpUserStorageDirectoryMappings {
	Bucket: *string,
	BucketPrefix: *string,
	Directory: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucket">Bucket</a></code> | <code>*string</code> | The Cloud Storage bucket name. Omit the gs://. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | The path of a folder within the bucket to set as the root directory for this directory mapping. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.directory">Directory</a></code> | <code>*string</code> | The directory path in the virtual file system. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.permission">Permission</a></code> | <code>*string</code> | The access level for the directory. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The Cloud Storage bucket name. Omit the gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#bucket StorageFtpUser#bucket}

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucketPrefix"></a>

```go
BucketPrefix *string
```

- *Type:* *string

The path of a folder within the bucket to set as the root directory for this directory mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#bucket_prefix StorageFtpUser#bucket_prefix}

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.directory"></a>

```go
Directory *string
```

- *Type:* *string

The directory path in the virtual file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#directory StorageFtpUser#directory}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

The access level for the directory.

For read-only access, set this value to READ_ONLY. For read and write access, set this value to READ_WRITE. Possible values: ["READ_ONLY", "READ_WRITE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#permission StorageFtpUser#permission}

---

### StorageFtpUserTimeouts <a name="StorageFtpUserTimeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/storageftpuser"

&storageftpuser.StorageFtpUserTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#create StorageFtpUser#create}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#delete StorageFtpUser#delete}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#update StorageFtpUser#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#create StorageFtpUser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#delete StorageFtpUser#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#update StorageFtpUser#update}.

---

### StorageFtpUserUserCredentials <a name="StorageFtpUserUserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/storageftpuser"

&storageftpuser.StorageFtpUserUserCredentials {
	CredentialName: *string,
	CredentialType: *string,
	SshPublicKeyBody: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialName">CredentialName</a></code> | <code>*string</code> | The name of the credential. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialType">CredentialType</a></code> | <code>*string</code> | The type of the credential. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.sshPublicKeyBody">SshPublicKeyBody</a></code> | <code>*string</code> | The SSH public key body. |

---

##### `CredentialName`<sup>Optional</sup> <a name="CredentialName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialName"></a>

```go
CredentialName *string
```

- *Type:* *string

The name of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#credential_name StorageFtpUser#credential_name}

---

##### `CredentialType`<sup>Optional</sup> <a name="CredentialType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialType"></a>

```go
CredentialType *string
```

- *Type:* *string

The type of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#credential_type StorageFtpUser#credential_type}

---

##### `SshPublicKeyBody`<sup>Optional</sup> <a name="SshPublicKeyBody" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.sshPublicKeyBody"></a>

```go
SshPublicKeyBody *string
```

- *Type:* *string

The SSH public key body.

A file either absolute or relative path should be provided which contains the ssh public key using file() interpolation in Terraform, not recommended to have key as a literal string in config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#ssh_public_key_body StorageFtpUser#ssh_public_key_body}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageFtpUserStorageDirectoryMappingsList <a name="StorageFtpUserStorageDirectoryMappingsList" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/storageftpuser"

storageftpuser.NewStorageFtpUserStorageDirectoryMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageFtpUserStorageDirectoryMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.get"></a>

```go
func Get(index *f64) StorageFtpUserStorageDirectoryMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageFtpUserStorageDirectoryMappingsOutputReference <a name="StorageFtpUserStorageDirectoryMappingsOutputReference" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/storageftpuser"

storageftpuser.NewStorageFtpUserStorageDirectoryMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageFtpUserStorageDirectoryMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucketPrefix"></a>

```go
func ResetBucketPrefix()
```

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetDirectory"></a>

```go
func ResetDirectory()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetPermission"></a>

```go
func ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directoryInput">DirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directory">Directory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefixInput"></a>

```go
func BucketPrefixInput() *string
```

- *Type:* *string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directoryInput"></a>

```go
func DirectoryInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefix"></a>

```go
func BucketPrefix() *string
```

- *Type:* *string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directory"></a>

```go
func Directory() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageFtpUserTimeoutsOutputReference <a name="StorageFtpUserTimeoutsOutputReference" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/storageftpuser"

storageftpuser.NewStorageFtpUserTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageFtpUserTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageFtpUserUserCredentialsList <a name="StorageFtpUserUserCredentialsList" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/storageftpuser"

storageftpuser.NewStorageFtpUserUserCredentialsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageFtpUserUserCredentialsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.get"></a>

```go
func Get(index *f64) StorageFtpUserUserCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageFtpUserUserCredentialsOutputReference <a name="StorageFtpUserUserCredentialsOutputReference" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/storageftpuser"

storageftpuser.NewStorageFtpUserUserCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageFtpUserUserCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialName">ResetCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialType">ResetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetSshPublicKeyBody">ResetSshPublicKeyBody</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialName` <a name="ResetCredentialName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialName"></a>

```go
func ResetCredentialName()
```

##### `ResetCredentialType` <a name="ResetCredentialType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialType"></a>

```go
func ResetCredentialType()
```

##### `ResetSshPublicKeyBody` <a name="ResetSshPublicKeyBody" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetSshPublicKeyBody"></a>

```go
func ResetSshPublicKeyBody()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialNameInput">CredentialNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBodyInput">SshPublicKeyBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialName">CredentialName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialType">CredentialType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBody">SshPublicKeyBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialNameInput`<sup>Optional</sup> <a name="CredentialNameInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialNameInput"></a>

```go
func CredentialNameInput() *string
```

- *Type:* *string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialTypeInput"></a>

```go
func CredentialTypeInput() *string
```

- *Type:* *string

---

##### `SshPublicKeyBodyInput`<sup>Optional</sup> <a name="SshPublicKeyBodyInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBodyInput"></a>

```go
func SshPublicKeyBodyInput() *string
```

- *Type:* *string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialName"></a>

```go
func CredentialName() *string
```

- *Type:* *string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialType"></a>

```go
func CredentialType() *string
```

- *Type:* *string

---

##### `SshPublicKeyBody`<sup>Required</sup> <a name="SshPublicKeyBody" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBody"></a>

```go
func SshPublicKeyBody() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



