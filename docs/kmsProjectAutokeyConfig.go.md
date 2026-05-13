# `kmsProjectAutokeyConfig` Submodule <a name="`kmsProjectAutokeyConfig` Submodule" id="@cdktn/provider-google.kmsProjectAutokeyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsProjectAutokeyConfig <a name="KmsProjectAutokeyConfig" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/kms_project_autokey_config google_kms_project_autokey_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/kmsprojectautokeyconfig"

kmsprojectautokeyconfig.NewKmsProjectAutokeyConfig(scope Construct, id *string, config KmsProjectAutokeyConfigConfig) KmsProjectAutokeyConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig">KmsProjectAutokeyConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig">KmsProjectAutokeyConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetKeyProjectResolutionMode">ResetKeyProjectResolutionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.putTimeouts"></a>

```go
func PutTimeouts(value KmsProjectAutokeyConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts">KmsProjectAutokeyConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyProjectResolutionMode` <a name="ResetKeyProjectResolutionMode" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetKeyProjectResolutionMode"></a>

```go
func ResetKeyProjectResolutionMode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KmsProjectAutokeyConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/kmsprojectautokeyconfig"

kmsprojectautokeyconfig.KmsProjectAutokeyConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/kmsprojectautokeyconfig"

kmsprojectautokeyconfig.KmsProjectAutokeyConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/kmsprojectautokeyconfig"

kmsprojectautokeyconfig.KmsProjectAutokeyConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/kmsprojectautokeyconfig"

kmsprojectautokeyconfig.KmsProjectAutokeyConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KmsProjectAutokeyConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KmsProjectAutokeyConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KmsProjectAutokeyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/kms_project_autokey_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KmsProjectAutokeyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference">KmsProjectAutokeyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.keyProjectResolutionModeInput">KeyProjectResolutionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.keyProjectResolutionMode">KeyProjectResolutionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.timeouts"></a>

```go
func Timeouts() KmsProjectAutokeyConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference">KmsProjectAutokeyConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyProjectResolutionModeInput`<sup>Optional</sup> <a name="KeyProjectResolutionModeInput" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.keyProjectResolutionModeInput"></a>

```go
func KeyProjectResolutionModeInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyProjectResolutionMode`<sup>Required</sup> <a name="KeyProjectResolutionMode" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.keyProjectResolutionMode"></a>

```go
func KeyProjectResolutionMode() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsProjectAutokeyConfigConfig <a name="KmsProjectAutokeyConfigConfig" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/kmsprojectautokeyconfig"

&kmsprojectautokeyconfig.KmsProjectAutokeyConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	KeyProjectResolutionMode: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/kms_project_autokey_config#id KmsProjectAutokeyConfig#id}. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.keyProjectResolutionMode">KeyProjectResolutionMode</a></code> | <code>*string</code> | How Autokey determines which project to use when provisioning CMEK keys. Possible values: ["RESOURCE_PROJECT", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/kms_project_autokey_config#project KmsProjectAutokeyConfig#project}. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts">KmsProjectAutokeyConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/kms_project_autokey_config#id KmsProjectAutokeyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyProjectResolutionMode`<sup>Optional</sup> <a name="KeyProjectResolutionMode" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.keyProjectResolutionMode"></a>

```go
KeyProjectResolutionMode *string
```

- *Type:* *string

How Autokey determines which project to use when provisioning CMEK keys. Possible values: ["RESOURCE_PROJECT", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/kms_project_autokey_config#key_project_resolution_mode KmsProjectAutokeyConfig#key_project_resolution_mode}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/kms_project_autokey_config#project KmsProjectAutokeyConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.timeouts"></a>

```go
Timeouts KmsProjectAutokeyConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts">KmsProjectAutokeyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/kms_project_autokey_config#timeouts KmsProjectAutokeyConfig#timeouts}

---

### KmsProjectAutokeyConfigTimeouts <a name="KmsProjectAutokeyConfigTimeouts" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/kmsprojectautokeyconfig"

&kmsprojectautokeyconfig.KmsProjectAutokeyConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/kms_project_autokey_config#create KmsProjectAutokeyConfig#create}. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/kms_project_autokey_config#delete KmsProjectAutokeyConfig#delete}. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/kms_project_autokey_config#update KmsProjectAutokeyConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/kms_project_autokey_config#create KmsProjectAutokeyConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/kms_project_autokey_config#delete KmsProjectAutokeyConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/kms_project_autokey_config#update KmsProjectAutokeyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsProjectAutokeyConfigTimeoutsOutputReference <a name="KmsProjectAutokeyConfigTimeoutsOutputReference" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/kmsprojectautokeyconfig"

kmsprojectautokeyconfig.NewKmsProjectAutokeyConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsProjectAutokeyConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



