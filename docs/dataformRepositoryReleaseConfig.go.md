# `dataformRepositoryReleaseConfig` Submodule <a name="`dataformRepositoryReleaseConfig` Submodule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataformRepositoryReleaseConfig <a name="DataformRepositoryReleaseConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config google_dataform_repository_release_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryreleaseconfig"

dataformrepositoryreleaseconfig.NewDataformRepositoryReleaseConfig(scope Construct, id *string, config DataformRepositoryReleaseConfigConfig) DataformRepositoryReleaseConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig">DataformRepositoryReleaseConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig">DataformRepositoryReleaseConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig">PutCodeCompilationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetCodeCompilationConfig">ResetCodeCompilationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetCronSchedule">ResetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCodeCompilationConfig` <a name="PutCodeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig"></a>

```go
func PutCodeCompilationConfig(value DataformRepositoryReleaseConfigCodeCompilationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putTimeouts"></a>

```go
func PutTimeouts(value DataformRepositoryReleaseConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a>

---

##### `ResetCodeCompilationConfig` <a name="ResetCodeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetCodeCompilationConfig"></a>

```go
func ResetCodeCompilationConfig()
```

##### `ResetCronSchedule` <a name="ResetCronSchedule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetCronSchedule"></a>

```go
func ResetCronSchedule()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetRepository"></a>

```go
func ResetRepository()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetTimeZone"></a>

```go
func ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataformRepositoryReleaseConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryreleaseconfig"

dataformrepositoryreleaseconfig.DataformRepositoryReleaseConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryreleaseconfig"

dataformrepositoryreleaseconfig.DataformRepositoryReleaseConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryreleaseconfig"

dataformrepositoryreleaseconfig.DataformRepositoryReleaseConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryreleaseconfig"

dataformrepositoryreleaseconfig.DataformRepositoryReleaseConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataformRepositoryReleaseConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataformRepositoryReleaseConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataformRepositoryReleaseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataformRepositoryReleaseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.codeCompilationConfig">CodeCompilationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference">DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.recentScheduledReleaseRecords">RecentScheduledReleaseRecords</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference">DataformRepositoryReleaseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.codeCompilationConfigInput">CodeCompilationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cronScheduleInput">CronScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.gitCommitishInput">GitCommitishInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cronSchedule">CronSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.gitCommitish">GitCommitish</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CodeCompilationConfig`<sup>Required</sup> <a name="CodeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.codeCompilationConfig"></a>

```go
func CodeCompilationConfig() DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference">DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference</a>

---

##### `RecentScheduledReleaseRecords`<sup>Required</sup> <a name="RecentScheduledReleaseRecords" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.recentScheduledReleaseRecords"></a>

```go
func RecentScheduledReleaseRecords() DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeouts"></a>

```go
func Timeouts() DataformRepositoryReleaseConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference">DataformRepositoryReleaseConfigTimeoutsOutputReference</a>

---

##### `CodeCompilationConfigInput`<sup>Optional</sup> <a name="CodeCompilationConfigInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.codeCompilationConfigInput"></a>

```go
func CodeCompilationConfigInput() DataformRepositoryReleaseConfigCodeCompilationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

---

##### `CronScheduleInput`<sup>Optional</sup> <a name="CronScheduleInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cronScheduleInput"></a>

```go
func CronScheduleInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `GitCommitishInput`<sup>Optional</sup> <a name="GitCommitishInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.gitCommitishInput"></a>

```go
func GitCommitishInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `CronSchedule`<sup>Required</sup> <a name="CronSchedule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cronSchedule"></a>

```go
func CronSchedule() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `GitCommitish`<sup>Required</sup> <a name="GitCommitish" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.gitCommitish"></a>

```go
func GitCommitish() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataformRepositoryReleaseConfigCodeCompilationConfig <a name="DataformRepositoryReleaseConfigCodeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryreleaseconfig"

&dataformrepositoryreleaseconfig.DataformRepositoryReleaseConfigCodeCompilationConfig {
	AssertionSchema: *string,
	DatabaseSuffix: *string,
	DefaultDatabase: *string,
	DefaultLocation: *string,
	DefaultSchema: *string,
	SchemaSuffix: *string,
	TablePrefix: *string,
	Vars: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.assertionSchema">AssertionSchema</a></code> | <code>*string</code> | Optional. The default schema (BigQuery dataset ID) for assertions. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.databaseSuffix">DatabaseSuffix</a></code> | <code>*string</code> | Optional. The suffix that should be appended to all database (Google Cloud project ID) names. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultDatabase">DefaultDatabase</a></code> | <code>*string</code> | Optional. The default database (Google Cloud project ID). |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultLocation">DefaultLocation</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultSchema">DefaultSchema</a></code> | <code>*string</code> | Optional. The default schema (BigQuery dataset ID). |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.schemaSuffix">SchemaSuffix</a></code> | <code>*string</code> | Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.tablePrefix">TablePrefix</a></code> | <code>*string</code> | Optional. The prefix that should be prepended to all table names. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.vars">Vars</a></code> | <code>*map[string]*string</code> | Optional. |

---

##### `AssertionSchema`<sup>Optional</sup> <a name="AssertionSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.assertionSchema"></a>

```go
AssertionSchema *string
```

- *Type:* *string

Optional. The default schema (BigQuery dataset ID) for assertions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#assertion_schema DataformRepositoryReleaseConfig#assertion_schema}

---

##### `DatabaseSuffix`<sup>Optional</sup> <a name="DatabaseSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.databaseSuffix"></a>

```go
DatabaseSuffix *string
```

- *Type:* *string

Optional. The suffix that should be appended to all database (Google Cloud project ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#database_suffix DataformRepositoryReleaseConfig#database_suffix}

---

##### `DefaultDatabase`<sup>Optional</sup> <a name="DefaultDatabase" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultDatabase"></a>

```go
DefaultDatabase *string
```

- *Type:* *string

Optional. The default database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_database DataformRepositoryReleaseConfig#default_database}

---

##### `DefaultLocation`<sup>Optional</sup> <a name="DefaultLocation" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultLocation"></a>

```go
DefaultLocation *string
```

- *Type:* *string

Optional.

The default BigQuery location to use. Defaults to "US".
See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_location DataformRepositoryReleaseConfig#default_location}

---

##### `DefaultSchema`<sup>Optional</sup> <a name="DefaultSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultSchema"></a>

```go
DefaultSchema *string
```

- *Type:* *string

Optional. The default schema (BigQuery dataset ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_schema DataformRepositoryReleaseConfig#default_schema}

---

##### `SchemaSuffix`<sup>Optional</sup> <a name="SchemaSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.schemaSuffix"></a>

```go
SchemaSuffix *string
```

- *Type:* *string

Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#schema_suffix DataformRepositoryReleaseConfig#schema_suffix}

---

##### `TablePrefix`<sup>Optional</sup> <a name="TablePrefix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.tablePrefix"></a>

```go
TablePrefix *string
```

- *Type:* *string

Optional. The prefix that should be prepended to all table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#table_prefix DataformRepositoryReleaseConfig#table_prefix}

---

##### `Vars`<sup>Optional</sup> <a name="Vars" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.vars"></a>

```go
Vars *map[string]*string
```

- *Type:* *map[string]*string

Optional.

User-defined variables that are made available to project code during compilation.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#vars DataformRepositoryReleaseConfig#vars}

---

### DataformRepositoryReleaseConfigConfig <a name="DataformRepositoryReleaseConfigConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryreleaseconfig"

&dataformrepositoryreleaseconfig.DataformRepositoryReleaseConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GitCommitish: *string,
	Name: *string,
	CodeCompilationConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v22.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig,
	CronSchedule: *string,
	DeletionPolicy: *string,
	Disabled: interface{},
	Id: *string,
	Project: *string,
	Region: *string,
	Repository: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.gitCommitish">GitCommitish</a></code> | <code>*string</code> | Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.name">Name</a></code> | <code>*string</code> | The release's name. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.codeCompilationConfig">CodeCompilationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | code_compilation_config block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.cronSchedule">CronSchedule</a></code> | <code>*string</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Disables automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#id DataformRepositoryReleaseConfig#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#project DataformRepositoryReleaseConfig#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.region">Region</a></code> | <code>*string</code> | A reference to the region. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.repository">Repository</a></code> | <code>*string</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Optional. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GitCommitish`<sup>Required</sup> <a name="GitCommitish" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.gitCommitish"></a>

```go
GitCommitish *string
```

- *Type:* *string

Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#git_commitish DataformRepositoryReleaseConfig#git_commitish}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The release's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#name DataformRepositoryReleaseConfig#name}

---

##### `CodeCompilationConfig`<sup>Optional</sup> <a name="CodeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.codeCompilationConfig"></a>

```go
CodeCompilationConfig DataformRepositoryReleaseConfigCodeCompilationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

code_compilation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#code_compilation_config DataformRepositoryReleaseConfig#code_compilation_config}

---

##### `CronSchedule`<sup>Optional</sup> <a name="CronSchedule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.cronSchedule"></a>

```go
CronSchedule *string
```

- *Type:* *string

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#cron_schedule DataformRepositoryReleaseConfig#cron_schedule}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#deletion_policy DataformRepositoryReleaseConfig#deletion_policy}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Disables automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#disabled DataformRepositoryReleaseConfig#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#id DataformRepositoryReleaseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#project DataformRepositoryReleaseConfig#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#region DataformRepositoryReleaseConfig#region}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#repository DataformRepositoryReleaseConfig#repository}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.timeouts"></a>

```go
Timeouts DataformRepositoryReleaseConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#timeouts DataformRepositoryReleaseConfig#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#time_zone DataformRepositoryReleaseConfig#time_zone}

---

### DataformRepositoryReleaseConfigRecentScheduledReleaseRecords <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecords" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryreleaseconfig"

&dataformrepositoryreleaseconfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords {

}
```


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryreleaseconfig"

&dataformrepositoryreleaseconfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus {

}
```


### DataformRepositoryReleaseConfigTimeouts <a name="DataformRepositoryReleaseConfigTimeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryreleaseconfig"

&dataformrepositoryreleaseconfig.DataformRepositoryReleaseConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#create DataformRepositoryReleaseConfig#create}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#delete DataformRepositoryReleaseConfig#delete}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#update DataformRepositoryReleaseConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#create DataformRepositoryReleaseConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#delete DataformRepositoryReleaseConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#update DataformRepositoryReleaseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference <a name="DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryreleaseconfig"

dataformrepositoryreleaseconfig.NewDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetAssertionSchema">ResetAssertionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDatabaseSuffix">ResetDatabaseSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultDatabase">ResetDefaultDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultLocation">ResetDefaultLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultSchema">ResetDefaultSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetSchemaSuffix">ResetSchemaSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetTablePrefix">ResetTablePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetVars">ResetVars</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssertionSchema` <a name="ResetAssertionSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetAssertionSchema"></a>

```go
func ResetAssertionSchema()
```

##### `ResetDatabaseSuffix` <a name="ResetDatabaseSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDatabaseSuffix"></a>

```go
func ResetDatabaseSuffix()
```

##### `ResetDefaultDatabase` <a name="ResetDefaultDatabase" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultDatabase"></a>

```go
func ResetDefaultDatabase()
```

##### `ResetDefaultLocation` <a name="ResetDefaultLocation" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultLocation"></a>

```go
func ResetDefaultLocation()
```

##### `ResetDefaultSchema` <a name="ResetDefaultSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultSchema"></a>

```go
func ResetDefaultSchema()
```

##### `ResetSchemaSuffix` <a name="ResetSchemaSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetSchemaSuffix"></a>

```go
func ResetSchemaSuffix()
```

##### `ResetTablePrefix` <a name="ResetTablePrefix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetTablePrefix"></a>

```go
func ResetTablePrefix()
```

##### `ResetVars` <a name="ResetVars" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetVars"></a>

```go
func ResetVars()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchemaInput">AssertionSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffixInput">DatabaseSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabaseInput">DefaultDatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocationInput">DefaultLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchemaInput">DefaultSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffixInput">SchemaSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefixInput">TablePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.varsInput">VarsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchema">AssertionSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffix">DatabaseSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabase">DefaultDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocation">DefaultLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchema">DefaultSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffix">SchemaSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefix">TablePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.vars">Vars</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssertionSchemaInput`<sup>Optional</sup> <a name="AssertionSchemaInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchemaInput"></a>

```go
func AssertionSchemaInput() *string
```

- *Type:* *string

---

##### `DatabaseSuffixInput`<sup>Optional</sup> <a name="DatabaseSuffixInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffixInput"></a>

```go
func DatabaseSuffixInput() *string
```

- *Type:* *string

---

##### `DefaultDatabaseInput`<sup>Optional</sup> <a name="DefaultDatabaseInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabaseInput"></a>

```go
func DefaultDatabaseInput() *string
```

- *Type:* *string

---

##### `DefaultLocationInput`<sup>Optional</sup> <a name="DefaultLocationInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocationInput"></a>

```go
func DefaultLocationInput() *string
```

- *Type:* *string

---

##### `DefaultSchemaInput`<sup>Optional</sup> <a name="DefaultSchemaInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchemaInput"></a>

```go
func DefaultSchemaInput() *string
```

- *Type:* *string

---

##### `SchemaSuffixInput`<sup>Optional</sup> <a name="SchemaSuffixInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffixInput"></a>

```go
func SchemaSuffixInput() *string
```

- *Type:* *string

---

##### `TablePrefixInput`<sup>Optional</sup> <a name="TablePrefixInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefixInput"></a>

```go
func TablePrefixInput() *string
```

- *Type:* *string

---

##### `VarsInput`<sup>Optional</sup> <a name="VarsInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.varsInput"></a>

```go
func VarsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AssertionSchema`<sup>Required</sup> <a name="AssertionSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchema"></a>

```go
func AssertionSchema() *string
```

- *Type:* *string

---

##### `DatabaseSuffix`<sup>Required</sup> <a name="DatabaseSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffix"></a>

```go
func DatabaseSuffix() *string
```

- *Type:* *string

---

##### `DefaultDatabase`<sup>Required</sup> <a name="DefaultDatabase" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabase"></a>

```go
func DefaultDatabase() *string
```

- *Type:* *string

---

##### `DefaultLocation`<sup>Required</sup> <a name="DefaultLocation" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocation"></a>

```go
func DefaultLocation() *string
```

- *Type:* *string

---

##### `DefaultSchema`<sup>Required</sup> <a name="DefaultSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchema"></a>

```go
func DefaultSchema() *string
```

- *Type:* *string

---

##### `SchemaSuffix`<sup>Required</sup> <a name="SchemaSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffix"></a>

```go
func SchemaSuffix() *string
```

- *Type:* *string

---

##### `TablePrefix`<sup>Required</sup> <a name="TablePrefix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefix"></a>

```go
func TablePrefix() *string
```

- *Type:* *string

---

##### `Vars`<sup>Required</sup> <a name="Vars" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.vars"></a>

```go
func Vars() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataformRepositoryReleaseConfigCodeCompilationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

---


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryreleaseconfig"

dataformrepositoryreleaseconfig.NewDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get"></a>

```go
func Get(index *f64) DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryreleaseconfig"

dataformrepositoryreleaseconfig.NewDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus</a>

---


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryreleaseconfig"

dataformrepositoryreleaseconfig.NewDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get"></a>

```go
func Get(index *f64) DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryreleaseconfig"

dataformrepositoryreleaseconfig.NewDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.compilationResult">CompilationResult</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.errorStatus">ErrorStatus</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.releaseTime">ReleaseTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords">DataformRepositoryReleaseConfigRecentScheduledReleaseRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompilationResult`<sup>Required</sup> <a name="CompilationResult" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.compilationResult"></a>

```go
func CompilationResult() *string
```

- *Type:* *string

---

##### `ErrorStatus`<sup>Required</sup> <a name="ErrorStatus" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.errorStatus"></a>

```go
func ErrorStatus() DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList</a>

---

##### `ReleaseTime`<sup>Required</sup> <a name="ReleaseTime" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.releaseTime"></a>

```go
func ReleaseTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataformRepositoryReleaseConfigRecentScheduledReleaseRecords
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords">DataformRepositoryReleaseConfigRecentScheduledReleaseRecords</a>

---


### DataformRepositoryReleaseConfigTimeoutsOutputReference <a name="DataformRepositoryReleaseConfigTimeoutsOutputReference" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryreleaseconfig"

dataformrepositoryreleaseconfig.NewDataformRepositoryReleaseConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataformRepositoryReleaseConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



