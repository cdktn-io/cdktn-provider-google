# `dataformRepository` Submodule <a name="`dataformRepository` Submodule" id="@cdktn/provider-google.dataformRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataformRepository <a name="DataformRepository" id="@cdktn/provider-google.dataformRepository.DataformRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository google_dataform_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/dataformrepository"

dataformrepository.NewDataformRepository(scope Construct, id *string, config DataformRepositoryConfig) DataformRepository
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig">DataformRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataformRepository.DataformRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig">DataformRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.putGitRemoteSettings">PutGitRemoteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.putWorkspaceCompilationOverrides">PutWorkspaceCompilationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetGitRemoteSettings">ResetGitRemoteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetNpmrcEnvironmentVariablesSecretVersion">ResetNpmrcEnvironmentVariablesSecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.resetWorkspaceCompilationOverrides">ResetWorkspaceCompilationOverrides</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepository.DataformRepository.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataformRepository.DataformRepository.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataformRepository.DataformRepository.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataformRepository.DataformRepository.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataformRepository.DataformRepository.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepository.DataformRepository.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataformRepository.DataformRepository.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataformRepository.DataformRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataformRepository.DataformRepository.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataformRepository.DataformRepository.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataformRepository.DataformRepository.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dataformRepository.DataformRepository.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataformRepository.DataformRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dataformRepository.DataformRepository.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dataformRepository.DataformRepository.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepository.DataformRepository.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepository.DataformRepository.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dataformRepository.DataformRepository.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepository.DataformRepository.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dataformRepository.DataformRepository.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataformRepository.DataformRepository.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataformRepository.DataformRepository.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dataformRepository.DataformRepository.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepository.DataformRepository.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGitRemoteSettings` <a name="PutGitRemoteSettings" id="@cdktn/provider-google.dataformRepository.DataformRepository.putGitRemoteSettings"></a>

```go
func PutGitRemoteSettings(value DataformRepositoryGitRemoteSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepository.DataformRepository.putGitRemoteSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings">DataformRepositoryGitRemoteSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dataformRepository.DataformRepository.putTimeouts"></a>

```go
func PutTimeouts(value DataformRepositoryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepository.DataformRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts">DataformRepositoryTimeouts</a>

---

##### `PutWorkspaceCompilationOverrides` <a name="PutWorkspaceCompilationOverrides" id="@cdktn/provider-google.dataformRepository.DataformRepository.putWorkspaceCompilationOverrides"></a>

```go
func PutWorkspaceCompilationOverrides(value DataformRepositoryWorkspaceCompilationOverrides)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepository.DataformRepository.putWorkspaceCompilationOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides">DataformRepositoryWorkspaceCompilationOverrides</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetGitRemoteSettings` <a name="ResetGitRemoteSettings" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetGitRemoteSettings"></a>

```go
func ResetGitRemoteSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNpmrcEnvironmentVariablesSecretVersion` <a name="ResetNpmrcEnvironmentVariablesSecretVersion" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetNpmrcEnvironmentVariablesSecretVersion"></a>

```go
func ResetNpmrcEnvironmentVariablesSecretVersion()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkspaceCompilationOverrides` <a name="ResetWorkspaceCompilationOverrides" id="@cdktn/provider-google.dataformRepository.DataformRepository.resetWorkspaceCompilationOverrides"></a>

```go
func ResetWorkspaceCompilationOverrides()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataformRepository resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataformRepository.DataformRepository.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/dataformrepository"

dataformrepository.DataformRepository_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepository.DataformRepository.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataformRepository.DataformRepository.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/dataformrepository"

dataformrepository.DataformRepository_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepository.DataformRepository.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dataformRepository.DataformRepository.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/dataformrepository"

dataformrepository.DataformRepository_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepository.DataformRepository.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataformRepository.DataformRepository.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/dataformrepository"

dataformrepository.DataformRepository_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataformRepository resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepository.DataformRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataformRepository.DataformRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataformRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataformRepository.DataformRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataformRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepository.DataformRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataformRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.gitRemoteSettings">GitRemoteSettings</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference">DataformRepositoryGitRemoteSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference">DataformRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.workspaceCompilationOverrides">WorkspaceCompilationOverrides</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference">DataformRepositoryWorkspaceCompilationOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.gitRemoteSettingsInput">GitRemoteSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings">DataformRepositoryGitRemoteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.npmrcEnvironmentVariablesSecretVersionInput">NpmrcEnvironmentVariablesSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.workspaceCompilationOverridesInput">WorkspaceCompilationOverridesInput</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides">DataformRepositoryWorkspaceCompilationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.npmrcEnvironmentVariablesSecretVersion">NpmrcEnvironmentVariablesSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `GitRemoteSettings`<sup>Required</sup> <a name="GitRemoteSettings" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.gitRemoteSettings"></a>

```go
func GitRemoteSettings() DataformRepositoryGitRemoteSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference">DataformRepositoryGitRemoteSettingsOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.timeouts"></a>

```go
func Timeouts() DataformRepositoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference">DataformRepositoryTimeoutsOutputReference</a>

---

##### `WorkspaceCompilationOverrides`<sup>Required</sup> <a name="WorkspaceCompilationOverrides" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.workspaceCompilationOverrides"></a>

```go
func WorkspaceCompilationOverrides() DataformRepositoryWorkspaceCompilationOverridesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference">DataformRepositoryWorkspaceCompilationOverridesOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GitRemoteSettingsInput`<sup>Optional</sup> <a name="GitRemoteSettingsInput" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.gitRemoteSettingsInput"></a>

```go
func GitRemoteSettingsInput() DataformRepositoryGitRemoteSettings
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings">DataformRepositoryGitRemoteSettings</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NpmrcEnvironmentVariablesSecretVersionInput`<sup>Optional</sup> <a name="NpmrcEnvironmentVariablesSecretVersionInput" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.npmrcEnvironmentVariablesSecretVersionInput"></a>

```go
func NpmrcEnvironmentVariablesSecretVersionInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceCompilationOverridesInput`<sup>Optional</sup> <a name="WorkspaceCompilationOverridesInput" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.workspaceCompilationOverridesInput"></a>

```go
func WorkspaceCompilationOverridesInput() DataformRepositoryWorkspaceCompilationOverrides
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides">DataformRepositoryWorkspaceCompilationOverrides</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NpmrcEnvironmentVariablesSecretVersion`<sup>Required</sup> <a name="NpmrcEnvironmentVariablesSecretVersion" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.npmrcEnvironmentVariablesSecretVersion"></a>

```go
func NpmrcEnvironmentVariablesSecretVersion() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepository.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataformRepository.DataformRepository.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataformRepositoryConfig <a name="DataformRepositoryConfig" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/dataformrepository"

&dataformrepository.DataformRepositoryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	DeletionPolicy: *string,
	DisplayName: *string,
	GitRemoteSettings: github.com/cdktn-io/cdktn-provider-google-go/google/v20.dataformRepository.DataformRepositoryGitRemoteSettings,
	Id: *string,
	KmsKeyName: *string,
	Labels: *map[string]*string,
	NpmrcEnvironmentVariablesSecretVersion: *string,
	Project: *string,
	Region: *string,
	ServiceAccount: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.dataformRepository.DataformRepositoryTimeouts,
	WorkspaceCompilationOverrides: github.com/cdktn-io/cdktn-provider-google-go/google/v20.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.name">Name</a></code> | <code>*string</code> | The repository's name. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/dataform_repository.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Optional. The repository's user-friendly name. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.gitRemoteSettings">GitRemoteSettings</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings">DataformRepositoryGitRemoteSettings</a></code> | git_remote_settings block. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#id DataformRepository#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.npmrcEnvironmentVariablesSecretVersion">NpmrcEnvironmentVariablesSecretVersion</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#project DataformRepository#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.region">Region</a></code> | <code>*string</code> | A reference to the region. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account to run workflow invocations under. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts">DataformRepositoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.workspaceCompilationOverrides">WorkspaceCompilationOverrides</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides">DataformRepositoryWorkspaceCompilationOverrides</a></code> | workspace_compilation_overrides block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The repository's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#name DataformRepository#name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/dataform_repository.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#deletion_policy DataformRepository#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Optional. The repository's user-friendly name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#display_name DataformRepository#display_name}

---

##### `GitRemoteSettings`<sup>Optional</sup> <a name="GitRemoteSettings" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.gitRemoteSettings"></a>

```go
GitRemoteSettings DataformRepositoryGitRemoteSettings
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings">DataformRepositoryGitRemoteSettings</a>

git_remote_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#git_remote_settings DataformRepository#git_remote_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#id DataformRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Optional.

The reference to a KMS encryption key. If provided, it will be used to encrypt user data in the repository and all child resources.
It is not possible to add or update the encryption key after the repository is created. Example projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#kms_key_name DataformRepository#kms_key_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional.

Repository user labels.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#labels DataformRepository#labels}

---

##### `NpmrcEnvironmentVariablesSecretVersion`<sup>Optional</sup> <a name="NpmrcEnvironmentVariablesSecretVersion" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.npmrcEnvironmentVariablesSecretVersion"></a>

```go
NpmrcEnvironmentVariablesSecretVersion *string
```

- *Type:* *string

Optional.

The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format projects/* /secrets/* /versions/*. The file itself must be in a JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#npmrc_environment_variables_secret_version DataformRepository#npmrc_environment_variables_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#project DataformRepository#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#region DataformRepository#region}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account to run workflow invocations under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#service_account DataformRepository#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.timeouts"></a>

```go
Timeouts DataformRepositoryTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts">DataformRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#timeouts DataformRepository#timeouts}

---

##### `WorkspaceCompilationOverrides`<sup>Optional</sup> <a name="WorkspaceCompilationOverrides" id="@cdktn/provider-google.dataformRepository.DataformRepositoryConfig.property.workspaceCompilationOverrides"></a>

```go
WorkspaceCompilationOverrides DataformRepositoryWorkspaceCompilationOverrides
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides">DataformRepositoryWorkspaceCompilationOverrides</a>

workspace_compilation_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#workspace_compilation_overrides DataformRepository#workspace_compilation_overrides}

---

### DataformRepositoryGitRemoteSettings <a name="DataformRepositoryGitRemoteSettings" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/dataformrepository"

&dataformrepository.DataformRepositoryGitRemoteSettings {
	DefaultBranch: *string,
	Url: *string,
	AuthenticationTokenSecretVersion: *string,
	GitRepositoryLink: *string,
	SshAuthenticationConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v20.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | The Git remote's default branch name. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.url">Url</a></code> | <code>*string</code> | The Git remote's URL. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.authenticationTokenSecretVersion">AuthenticationTokenSecretVersion</a></code> | <code>*string</code> | The name of the Secret Manager secret version to use as an authentication token for Git operations. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.gitRepositoryLink">GitRepositoryLink</a></code> | <code>*string</code> | The name of the Developer Connect GitRepositoryLink to use for machine credentials. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.sshAuthenticationConfig">SshAuthenticationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig">DataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a></code> | ssh_authentication_config block. |

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.defaultBranch"></a>

```go
DefaultBranch *string
```

- *Type:* *string

The Git remote's default branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#default_branch DataformRepository#default_branch}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.url"></a>

```go
Url *string
```

- *Type:* *string

The Git remote's URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#url DataformRepository#url}

---

##### `AuthenticationTokenSecretVersion`<sup>Optional</sup> <a name="AuthenticationTokenSecretVersion" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.authenticationTokenSecretVersion"></a>

```go
AuthenticationTokenSecretVersion *string
```

- *Type:* *string

The name of the Secret Manager secret version to use as an authentication token for Git operations.

This secret is for assigning with HTTPS only(for SSH use 'ssh_authentication_config'). Must be in the format projects/* /secrets/* /versions/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#authentication_token_secret_version DataformRepository#authentication_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `GitRepositoryLink`<sup>Optional</sup> <a name="GitRepositoryLink" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.gitRepositoryLink"></a>

```go
GitRepositoryLink *string
```

- *Type:* *string

The name of the Developer Connect GitRepositoryLink to use for machine credentials.

Must be in the format projects/* /locations/* /connections/* /gitRepositoryLinks/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#git_repository_link DataformRepository#git_repository_link}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `SshAuthenticationConfig`<sup>Optional</sup> <a name="SshAuthenticationConfig" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings.property.sshAuthenticationConfig"></a>

```go
SshAuthenticationConfig DataformRepositoryGitRemoteSettingsSshAuthenticationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig">DataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a>

ssh_authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#ssh_authentication_config DataformRepository#ssh_authentication_config}

---

### DataformRepositoryGitRemoteSettingsSshAuthenticationConfig <a name="DataformRepositoryGitRemoteSettingsSshAuthenticationConfig" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/dataformrepository"

&dataformrepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig {
	HostPublicKey: *string,
	UserPrivateKeySecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig.property.hostPublicKey">HostPublicKey</a></code> | <code>*string</code> | Content of a public SSH key to verify an identity of a remote Git host. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig.property.userPrivateKeySecretVersion">UserPrivateKeySecretVersion</a></code> | <code>*string</code> | The name of the Secret Manager secret version to use as a ssh private key for Git operations. |

---

##### `HostPublicKey`<sup>Required</sup> <a name="HostPublicKey" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig.property.hostPublicKey"></a>

```go
HostPublicKey *string
```

- *Type:* *string

Content of a public SSH key to verify an identity of a remote Git host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#host_public_key DataformRepository#host_public_key}

---

##### `UserPrivateKeySecretVersion`<sup>Required</sup> <a name="UserPrivateKeySecretVersion" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig.property.userPrivateKeySecretVersion"></a>

```go
UserPrivateKeySecretVersion *string
```

- *Type:* *string

The name of the Secret Manager secret version to use as a ssh private key for Git operations.

Must be in the format projects/* /secrets/* /versions/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#user_private_key_secret_version DataformRepository#user_private_key_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DataformRepositoryTimeouts <a name="DataformRepositoryTimeouts" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/dataformrepository"

&dataformrepository.DataformRepositoryTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#create DataformRepository#create}. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#delete DataformRepository#delete}. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#update DataformRepository#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#create DataformRepository#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#delete DataformRepository#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#update DataformRepository#update}.

---

### DataformRepositoryWorkspaceCompilationOverrides <a name="DataformRepositoryWorkspaceCompilationOverrides" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/dataformrepository"

&dataformrepository.DataformRepositoryWorkspaceCompilationOverrides {
	DefaultDatabase: *string,
	SchemaSuffix: *string,
	TablePrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides.property.defaultDatabase">DefaultDatabase</a></code> | <code>*string</code> | The default database (Google Cloud project ID). |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides.property.schemaSuffix">SchemaSuffix</a></code> | <code>*string</code> | The suffix that should be appended to all schema (BigQuery dataset ID) names. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides.property.tablePrefix">TablePrefix</a></code> | <code>*string</code> | The prefix that should be prepended to all table names. |

---

##### `DefaultDatabase`<sup>Optional</sup> <a name="DefaultDatabase" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides.property.defaultDatabase"></a>

```go
DefaultDatabase *string
```

- *Type:* *string

The default database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#default_database DataformRepository#default_database}

---

##### `SchemaSuffix`<sup>Optional</sup> <a name="SchemaSuffix" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides.property.schemaSuffix"></a>

```go
SchemaSuffix *string
```

- *Type:* *string

The suffix that should be appended to all schema (BigQuery dataset ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#schema_suffix DataformRepository#schema_suffix}

---

##### `TablePrefix`<sup>Optional</sup> <a name="TablePrefix" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides.property.tablePrefix"></a>

```go
TablePrefix *string
```

- *Type:* *string

The prefix that should be prepended to all table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dataform_repository#table_prefix DataformRepository#table_prefix}

---

## Classes <a name="Classes" id="Classes"></a>

### DataformRepositoryGitRemoteSettingsOutputReference <a name="DataformRepositoryGitRemoteSettingsOutputReference" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/dataformrepository"

dataformrepository.NewDataformRepositoryGitRemoteSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataformRepositoryGitRemoteSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.putSshAuthenticationConfig">PutSshAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resetAuthenticationTokenSecretVersion">ResetAuthenticationTokenSecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resetGitRepositoryLink">ResetGitRepositoryLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resetSshAuthenticationConfig">ResetSshAuthenticationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSshAuthenticationConfig` <a name="PutSshAuthenticationConfig" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.putSshAuthenticationConfig"></a>

```go
func PutSshAuthenticationConfig(value DataformRepositoryGitRemoteSettingsSshAuthenticationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.putSshAuthenticationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig">DataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a>

---

##### `ResetAuthenticationTokenSecretVersion` <a name="ResetAuthenticationTokenSecretVersion" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resetAuthenticationTokenSecretVersion"></a>

```go
func ResetAuthenticationTokenSecretVersion()
```

##### `ResetGitRepositoryLink` <a name="ResetGitRepositoryLink" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resetGitRepositoryLink"></a>

```go
func ResetGitRepositoryLink()
```

##### `ResetSshAuthenticationConfig` <a name="ResetSshAuthenticationConfig" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.resetSshAuthenticationConfig"></a>

```go
func ResetSshAuthenticationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.sshAuthenticationConfig">SshAuthenticationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference">DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.tokenStatus">TokenStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.authenticationTokenSecretVersionInput">AuthenticationTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.defaultBranchInput">DefaultBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.gitRepositoryLinkInput">GitRepositoryLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.sshAuthenticationConfigInput">SshAuthenticationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig">DataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.authenticationTokenSecretVersion">AuthenticationTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.gitRepositoryLink">GitRepositoryLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings">DataformRepositoryGitRemoteSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SshAuthenticationConfig`<sup>Required</sup> <a name="SshAuthenticationConfig" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.sshAuthenticationConfig"></a>

```go
func SshAuthenticationConfig() DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference">DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference</a>

---

##### `TokenStatus`<sup>Required</sup> <a name="TokenStatus" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.tokenStatus"></a>

```go
func TokenStatus() *string
```

- *Type:* *string

---

##### `AuthenticationTokenSecretVersionInput`<sup>Optional</sup> <a name="AuthenticationTokenSecretVersionInput" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.authenticationTokenSecretVersionInput"></a>

```go
func AuthenticationTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `DefaultBranchInput`<sup>Optional</sup> <a name="DefaultBranchInput" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.defaultBranchInput"></a>

```go
func DefaultBranchInput() *string
```

- *Type:* *string

---

##### `GitRepositoryLinkInput`<sup>Optional</sup> <a name="GitRepositoryLinkInput" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.gitRepositoryLinkInput"></a>

```go
func GitRepositoryLinkInput() *string
```

- *Type:* *string

---

##### `SshAuthenticationConfigInput`<sup>Optional</sup> <a name="SshAuthenticationConfigInput" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.sshAuthenticationConfigInput"></a>

```go
func SshAuthenticationConfigInput() DataformRepositoryGitRemoteSettingsSshAuthenticationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig">DataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `AuthenticationTokenSecretVersion`<sup>Required</sup> <a name="AuthenticationTokenSecretVersion" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.authenticationTokenSecretVersion"></a>

```go
func AuthenticationTokenSecretVersion() *string
```

- *Type:* *string

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.defaultBranch"></a>

```go
func DefaultBranch() *string
```

- *Type:* *string

---

##### `GitRepositoryLink`<sup>Required</sup> <a name="GitRepositoryLink" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.gitRepositoryLink"></a>

```go
func GitRepositoryLink() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataformRepositoryGitRemoteSettings
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettings">DataformRepositoryGitRemoteSettings</a>

---


### DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference <a name="DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/dataformrepository"

dataformrepository.NewDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.hostPublicKeyInput">HostPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.userPrivateKeySecretVersionInput">UserPrivateKeySecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.hostPublicKey">HostPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.userPrivateKeySecretVersion">UserPrivateKeySecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig">DataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostPublicKeyInput`<sup>Optional</sup> <a name="HostPublicKeyInput" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.hostPublicKeyInput"></a>

```go
func HostPublicKeyInput() *string
```

- *Type:* *string

---

##### `UserPrivateKeySecretVersionInput`<sup>Optional</sup> <a name="UserPrivateKeySecretVersionInput" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.userPrivateKeySecretVersionInput"></a>

```go
func UserPrivateKeySecretVersionInput() *string
```

- *Type:* *string

---

##### `HostPublicKey`<sup>Required</sup> <a name="HostPublicKey" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.hostPublicKey"></a>

```go
func HostPublicKey() *string
```

- *Type:* *string

---

##### `UserPrivateKeySecretVersion`<sup>Required</sup> <a name="UserPrivateKeySecretVersion" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.userPrivateKeySecretVersion"></a>

```go
func UserPrivateKeySecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataformRepositoryGitRemoteSettingsSshAuthenticationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryGitRemoteSettingsSshAuthenticationConfig">DataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a>

---


### DataformRepositoryTimeoutsOutputReference <a name="DataformRepositoryTimeoutsOutputReference" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/dataformrepository"

dataformrepository.NewDataformRepositoryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataformRepositoryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataformRepository.DataformRepositoryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataformRepositoryWorkspaceCompilationOverridesOutputReference <a name="DataformRepositoryWorkspaceCompilationOverridesOutputReference" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/dataformrepository"

dataformrepository.NewDataformRepositoryWorkspaceCompilationOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataformRepositoryWorkspaceCompilationOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resetDefaultDatabase">ResetDefaultDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resetSchemaSuffix">ResetSchemaSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resetTablePrefix">ResetTablePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultDatabase` <a name="ResetDefaultDatabase" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resetDefaultDatabase"></a>

```go
func ResetDefaultDatabase()
```

##### `ResetSchemaSuffix` <a name="ResetSchemaSuffix" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resetSchemaSuffix"></a>

```go
func ResetSchemaSuffix()
```

##### `ResetTablePrefix` <a name="ResetTablePrefix" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.resetTablePrefix"></a>

```go
func ResetTablePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.defaultDatabaseInput">DefaultDatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.schemaSuffixInput">SchemaSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.tablePrefixInput">TablePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.defaultDatabase">DefaultDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.schemaSuffix">SchemaSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.tablePrefix">TablePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides">DataformRepositoryWorkspaceCompilationOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultDatabaseInput`<sup>Optional</sup> <a name="DefaultDatabaseInput" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.defaultDatabaseInput"></a>

```go
func DefaultDatabaseInput() *string
```

- *Type:* *string

---

##### `SchemaSuffixInput`<sup>Optional</sup> <a name="SchemaSuffixInput" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.schemaSuffixInput"></a>

```go
func SchemaSuffixInput() *string
```

- *Type:* *string

---

##### `TablePrefixInput`<sup>Optional</sup> <a name="TablePrefixInput" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.tablePrefixInput"></a>

```go
func TablePrefixInput() *string
```

- *Type:* *string

---

##### `DefaultDatabase`<sup>Required</sup> <a name="DefaultDatabase" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.defaultDatabase"></a>

```go
func DefaultDatabase() *string
```

- *Type:* *string

---

##### `SchemaSuffix`<sup>Required</sup> <a name="SchemaSuffix" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.schemaSuffix"></a>

```go
func SchemaSuffix() *string
```

- *Type:* *string

---

##### `TablePrefix`<sup>Required</sup> <a name="TablePrefix" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.tablePrefix"></a>

```go
func TablePrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataformRepositoryWorkspaceCompilationOverrides
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepository.DataformRepositoryWorkspaceCompilationOverrides">DataformRepositoryWorkspaceCompilationOverrides</a>

---



