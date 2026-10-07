# `observabilityFolderSettings` Submodule <a name="`observabilityFolderSettings` Submodule" id="@cdktn/provider-google.observabilityFolderSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityFolderSettings <a name="ObservabilityFolderSettings" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings google_observability_folder_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/observabilityfoldersettings"

observabilityfoldersettings.NewObservabilityFolderSettings(scope Construct, id *string, config ObservabilityFolderSettingsConfig) ObservabilityFolderSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig">ObservabilityFolderSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig">ObservabilityFolderSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetDefaultStorageLocation">ResetDefaultStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.putTimeouts"></a>

```go
func PutTimeouts(value ObservabilityFolderSettingsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a>

---

##### `ResetDefaultStorageLocation` <a name="ResetDefaultStorageLocation" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetDefaultStorageLocation"></a>

```go
func ResetDefaultStorageLocation()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityFolderSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/observabilityfoldersettings"

observabilityfoldersettings.ObservabilityFolderSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/observabilityfoldersettings"

observabilityfoldersettings.ObservabilityFolderSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/observabilityfoldersettings"

observabilityfoldersettings.ObservabilityFolderSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/observabilityfoldersettings"

observabilityfoldersettings.ObservabilityFolderSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ObservabilityFolderSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ObservabilityFolderSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ObservabilityFolderSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityFolderSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference">ObservabilityFolderSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.defaultStorageLocationInput">DefaultStorageLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.defaultStorageLocation">DefaultStorageLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.location">Location</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.serviceAccountId"></a>

```go
func ServiceAccountId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.timeouts"></a>

```go
func Timeouts() ObservabilityFolderSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference">ObservabilityFolderSettingsTimeoutsOutputReference</a>

---

##### `DefaultStorageLocationInput`<sup>Optional</sup> <a name="DefaultStorageLocationInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.defaultStorageLocationInput"></a>

```go
func DefaultStorageLocationInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultStorageLocation`<sup>Required</sup> <a name="DefaultStorageLocation" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.defaultStorageLocation"></a>

```go
func DefaultStorageLocation() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityFolderSettingsConfig <a name="ObservabilityFolderSettingsConfig" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/observabilityfoldersettings"

&observabilityfoldersettings.ObservabilityFolderSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Folder: *string,
	Location: *string,
	DefaultStorageLocation: *string,
	Id: *string,
	KmsKeyName: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v21.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.folder">Folder</a></code> | <code>*string</code> | The folder ID. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.location">Location</a></code> | <code>*string</code> | The location of the settings. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.defaultStorageLocation">DefaultStorageLocation</a></code> | <code>*string</code> | The default storage location for new resources, e.g. buckets. Only valid for global location. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#id ObservabilityFolderSettings#id}. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The default Cloud KMS key to use for new resources. Only valid for regional locations. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The folder ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#folder ObservabilityFolderSettings#folder}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#location ObservabilityFolderSettings#location}

---

##### `DefaultStorageLocation`<sup>Optional</sup> <a name="DefaultStorageLocation" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.defaultStorageLocation"></a>

```go
DefaultStorageLocation *string
```

- *Type:* *string

The default storage location for new resources, e.g. buckets. Only valid for global location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#default_storage_location ObservabilityFolderSettings#default_storage_location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#id ObservabilityFolderSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The default Cloud KMS key to use for new resources. Only valid for regional locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#kms_key_name ObservabilityFolderSettings#kms_key_name}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.timeouts"></a>

```go
Timeouts ObservabilityFolderSettingsTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#timeouts ObservabilityFolderSettings#timeouts}

---

### ObservabilityFolderSettingsTimeouts <a name="ObservabilityFolderSettingsTimeouts" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/observabilityfoldersettings"

&observabilityfoldersettings.ObservabilityFolderSettingsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#create ObservabilityFolderSettings#create}. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#delete ObservabilityFolderSettings#delete}. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#update ObservabilityFolderSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#create ObservabilityFolderSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#delete ObservabilityFolderSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#update ObservabilityFolderSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityFolderSettingsTimeoutsOutputReference <a name="ObservabilityFolderSettingsTimeoutsOutputReference" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/observabilityfoldersettings"

observabilityfoldersettings.NewObservabilityFolderSettingsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityFolderSettingsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



