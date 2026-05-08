# `sccV2FolderMuteConfig` Submodule <a name="`sccV2FolderMuteConfig` Submodule" id="@cdktn/provider-google.sccV2FolderMuteConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2FolderMuteConfig <a name="SccV2FolderMuteConfig" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config google_scc_v2_folder_mute_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2foldermuteconfig"

sccv2foldermuteconfig.NewSccV2FolderMuteConfig(scope Construct, id *string, config SccV2FolderMuteConfigConfig) SccV2FolderMuteConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig">SccV2FolderMuteConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig">SccV2FolderMuteConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.putTimeouts"></a>

```go
func PutTimeouts(value SccV2FolderMuteConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SccV2FolderMuteConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2foldermuteconfig"

sccv2foldermuteconfig.SccV2FolderMuteConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2foldermuteconfig"

sccv2foldermuteconfig.SccV2FolderMuteConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2foldermuteconfig"

sccv2foldermuteconfig.SccV2FolderMuteConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2foldermuteconfig"

sccv2foldermuteconfig.SccV2FolderMuteConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SccV2FolderMuteConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SccV2FolderMuteConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SccV2FolderMuteConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SccV2FolderMuteConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.mostRecentEditor">MostRecentEditor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference">SccV2FolderMuteConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.muteConfigIdInput">MuteConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.muteConfigId">MuteConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `MostRecentEditor`<sup>Required</sup> <a name="MostRecentEditor" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.mostRecentEditor"></a>

```go
func MostRecentEditor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.timeouts"></a>

```go
func Timeouts() SccV2FolderMuteConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference">SccV2FolderMuteConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MuteConfigIdInput`<sup>Optional</sup> <a name="MuteConfigIdInput" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.muteConfigIdInput"></a>

```go
func MuteConfigIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MuteConfigId`<sup>Required</sup> <a name="MuteConfigId" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.muteConfigId"></a>

```go
func MuteConfigId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2FolderMuteConfigConfig <a name="SccV2FolderMuteConfigConfig" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2foldermuteconfig"

&sccv2foldermuteconfig.SccV2FolderMuteConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: *string,
	Folder: *string,
	MuteConfigId: *string,
	Type: *string,
	Description: *string,
	Id: *string,
	Location: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.filter">Filter</a></code> | <code>*string</code> | An expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.folder">Folder</a></code> | <code>*string</code> | The folder whose Cloud Security Command Center the Mute Config lives in. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.muteConfigId">MuteConfigId</a></code> | <code>*string</code> | Unique identifier provided by the client within the parent scope. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.type">Type</a></code> | <code>*string</code> | The type of the mute config. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.description">Description</a></code> | <code>*string</code> | A description of the mute config. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config#id SccV2FolderMuteConfig#id}. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.location">Location</a></code> | <code>*string</code> | location Id is provided by folder. If not provided, Use global as default. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

An expression that defines the filter to apply across create/update events of findings.

While creating a filter string, be mindful of
the scope in which the mute configuration is being created. E.g.,
If a filter contains project = X but is created under the
project = Y scope, it might not match any findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config#filter SccV2FolderMuteConfig#filter}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The folder whose Cloud Security Command Center the Mute Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config#folder SccV2FolderMuteConfig#folder}

---

##### `MuteConfigId`<sup>Required</sup> <a name="MuteConfigId" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.muteConfigId"></a>

```go
MuteConfigId *string
```

- *Type:* *string

Unique identifier provided by the client within the parent scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config#mute_config_id SccV2FolderMuteConfig#mute_config_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the mute config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config#type SccV2FolderMuteConfig#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the mute config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config#description SccV2FolderMuteConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config#id SccV2FolderMuteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

location Id is provided by folder. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config#location SccV2FolderMuteConfig#location}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.timeouts"></a>

```go
Timeouts SccV2FolderMuteConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config#timeouts SccV2FolderMuteConfig#timeouts}

---

### SccV2FolderMuteConfigTimeouts <a name="SccV2FolderMuteConfigTimeouts" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2foldermuteconfig"

&sccv2foldermuteconfig.SccV2FolderMuteConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config#create SccV2FolderMuteConfig#create}. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config#delete SccV2FolderMuteConfig#delete}. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config#update SccV2FolderMuteConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config#create SccV2FolderMuteConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config#delete SccV2FolderMuteConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/scc_v2_folder_mute_config#update SccV2FolderMuteConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2FolderMuteConfigTimeoutsOutputReference <a name="SccV2FolderMuteConfigTimeoutsOutputReference" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/sccv2foldermuteconfig"

sccv2foldermuteconfig.NewSccV2FolderMuteConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccV2FolderMuteConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



