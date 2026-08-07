# `artifactRegistryProjectConfig` Submodule <a name="`artifactRegistryProjectConfig` Submodule" id="@cdktn/provider-google.artifactRegistryProjectConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactRegistryProjectConfig <a name="ArtifactRegistryProjectConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config google_artifact_registry_project_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/artifactregistryprojectconfig"

artifactregistryprojectconfig.NewArtifactRegistryProjectConfig(scope Construct, id *string, config ArtifactRegistryProjectConfigConfig) ArtifactRegistryProjectConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig">ArtifactRegistryProjectConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig">ArtifactRegistryProjectConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putPlatformLogsConfig">PutPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetPlatformLogsConfig">ResetPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPlatformLogsConfig` <a name="PutPlatformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putPlatformLogsConfig"></a>

```go
func PutPlatformLogsConfig(value ArtifactRegistryProjectConfigPlatformLogsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putPlatformLogsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putTimeouts"></a>

```go
func PutTimeouts(value ArtifactRegistryProjectConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetPlatformLogsConfig` <a name="ResetPlatformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetPlatformLogsConfig"></a>

```go
func ResetPlatformLogsConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/artifactregistryprojectconfig"

artifactregistryprojectconfig.ArtifactRegistryProjectConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/artifactregistryprojectconfig"

artifactregistryprojectconfig.ArtifactRegistryProjectConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/artifactregistryprojectconfig"

artifactregistryprojectconfig.ArtifactRegistryProjectConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/artifactregistryprojectconfig"

artifactregistryprojectconfig.ArtifactRegistryProjectConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ArtifactRegistryProjectConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ArtifactRegistryProjectConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ArtifactRegistryProjectConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.platformLogsConfig">PlatformLogsConfig</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference">ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference">ArtifactRegistryProjectConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.platformLogsConfigInput">PlatformLogsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PlatformLogsConfig`<sup>Required</sup> <a name="PlatformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.platformLogsConfig"></a>

```go
func PlatformLogsConfig() ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference">ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.timeouts"></a>

```go
func Timeouts() ArtifactRegistryProjectConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference">ArtifactRegistryProjectConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PlatformLogsConfigInput`<sup>Optional</sup> <a name="PlatformLogsConfigInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.platformLogsConfigInput"></a>

```go
func PlatformLogsConfigInput() ArtifactRegistryProjectConfigPlatformLogsConfig
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactRegistryProjectConfigConfig <a name="ArtifactRegistryProjectConfigConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/artifactregistryprojectconfig"

&artifactregistryprojectconfig.ArtifactRegistryProjectConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Location: *string,
	PlatformLogsConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v20.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config#id ArtifactRegistryProjectConfig#id}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location this config is located in. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.platformLogsConfig">PlatformLogsConfig</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | platform_logs_config block. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config#project ArtifactRegistryProjectConfig#project}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config#id ArtifactRegistryProjectConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location this config is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config#location ArtifactRegistryProjectConfig#location}

---

##### `PlatformLogsConfig`<sup>Optional</sup> <a name="PlatformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.platformLogsConfig"></a>

```go
PlatformLogsConfig ArtifactRegistryProjectConfigPlatformLogsConfig
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

platform_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config#platform_logs_config ArtifactRegistryProjectConfig#platform_logs_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config#project ArtifactRegistryProjectConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.timeouts"></a>

```go
Timeouts ArtifactRegistryProjectConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config#timeouts ArtifactRegistryProjectConfig#timeouts}

---

### ArtifactRegistryProjectConfigPlatformLogsConfig <a name="ArtifactRegistryProjectConfigPlatformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/artifactregistryprojectconfig"

&artifactregistryprojectconfig.ArtifactRegistryProjectConfigPlatformLogsConfig {
	LoggingState: *string,
	SeverityLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.property.loggingState">LoggingState</a></code> | <code>*string</code> | The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.property.severityLevel">SeverityLevel</a></code> | <code>*string</code> | The severity level for the logs. |

---

##### `LoggingState`<sup>Optional</sup> <a name="LoggingState" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.property.loggingState"></a>

```go
LoggingState *string
```

- *Type:* *string

The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config#logging_state ArtifactRegistryProjectConfig#logging_state}

---

##### `SeverityLevel`<sup>Optional</sup> <a name="SeverityLevel" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.property.severityLevel"></a>

```go
SeverityLevel *string
```

- *Type:* *string

The severity level for the logs.

Logs will be generated if their
severity level is >= than the value of the severity level mentioned here. Possible values: ["DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config#severity_level ArtifactRegistryProjectConfig#severity_level}

---

### ArtifactRegistryProjectConfigTimeouts <a name="ArtifactRegistryProjectConfigTimeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/artifactregistryprojectconfig"

&artifactregistryprojectconfig.ArtifactRegistryProjectConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config#create ArtifactRegistryProjectConfig#create}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config#delete ArtifactRegistryProjectConfig#delete}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config#update ArtifactRegistryProjectConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config#create ArtifactRegistryProjectConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config#delete ArtifactRegistryProjectConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/artifact_registry_project_config#update ArtifactRegistryProjectConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference <a name="ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/artifactregistryprojectconfig"

artifactregistryprojectconfig.NewArtifactRegistryProjectConfigPlatformLogsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetLoggingState">ResetLoggingState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetSeverityLevel">ResetSeverityLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoggingState` <a name="ResetLoggingState" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetLoggingState"></a>

```go
func ResetLoggingState()
```

##### `ResetSeverityLevel` <a name="ResetSeverityLevel" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetSeverityLevel"></a>

```go
func ResetSeverityLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingStateInput">LoggingStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevelInput">SeverityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingState">LoggingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevel">SeverityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoggingStateInput`<sup>Optional</sup> <a name="LoggingStateInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingStateInput"></a>

```go
func LoggingStateInput() *string
```

- *Type:* *string

---

##### `SeverityLevelInput`<sup>Optional</sup> <a name="SeverityLevelInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevelInput"></a>

```go
func SeverityLevelInput() *string
```

- *Type:* *string

---

##### `LoggingState`<sup>Required</sup> <a name="LoggingState" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingState"></a>

```go
func LoggingState() *string
```

- *Type:* *string

---

##### `SeverityLevel`<sup>Required</sup> <a name="SeverityLevel" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevel"></a>

```go
func SeverityLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryProjectConfigPlatformLogsConfig
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

---


### ArtifactRegistryProjectConfigTimeoutsOutputReference <a name="ArtifactRegistryProjectConfigTimeoutsOutputReference" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/artifactregistryprojectconfig"

artifactregistryprojectconfig.NewArtifactRegistryProjectConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryProjectConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



