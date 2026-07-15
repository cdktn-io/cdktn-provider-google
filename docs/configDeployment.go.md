# `configDeployment` Submodule <a name="`configDeployment` Submodule" id="@cdktn/provider-google.configDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigDeployment <a name="ConfigDeployment" id="@cdktn/provider-google.configDeployment.ConfigDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment google_config_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/configdeployment"

configdeployment.NewConfigDeployment(scope Construct, id *string, config ConfigDeploymentConfig) ConfigDeployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig">ConfigDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig">ConfigDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.putTerraformBlueprint">PutTerraformBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetArtifactsGcsBucket">ResetArtifactsGcsBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetImportExistingResources">ResetImportExistingResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetQuotaValidation">ResetQuotaValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetTfVersionConstraint">ResetTfVersionConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetWorkerPool">ResetWorkerPool</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.configDeployment.ConfigDeployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.configDeployment.ConfigDeployment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.configDeployment.ConfigDeployment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.configDeployment.ConfigDeployment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.configDeployment.ConfigDeployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.configDeployment.ConfigDeployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.configDeployment.ConfigDeployment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.configDeployment.ConfigDeployment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.configDeployment.ConfigDeployment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTerraformBlueprint` <a name="PutTerraformBlueprint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTerraformBlueprint"></a>

```go
func PutTerraformBlueprint(value ConfigDeploymentTerraformBlueprint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTerraformBlueprint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTimeouts"></a>

```go
func PutTimeouts(value ConfigDeploymentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetArtifactsGcsBucket` <a name="ResetArtifactsGcsBucket" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetArtifactsGcsBucket"></a>

```go
func ResetArtifactsGcsBucket()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetId"></a>

```go
func ResetId()
```

##### `ResetImportExistingResources` <a name="ResetImportExistingResources" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetImportExistingResources"></a>

```go
func ResetImportExistingResources()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetQuotaValidation` <a name="ResetQuotaValidation" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetQuotaValidation"></a>

```go
func ResetQuotaValidation()
```

##### `ResetTfVersionConstraint` <a name="ResetTfVersionConstraint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetTfVersionConstraint"></a>

```go
func ResetTfVersionConstraint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkerPool` <a name="ResetWorkerPool" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetWorkerPool"></a>

```go
func ResetWorkerPool()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/configdeployment"

configdeployment.ConfigDeployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/configdeployment"

configdeployment.ConfigDeployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/configdeployment"

configdeployment.ConfigDeployment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/configdeployment"

configdeployment.ConfigDeployment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConfigDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConfigDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConfigDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConfigDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.latestRevision">LatestRevision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformBlueprint">TerraformBlueprint</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference">ConfigDeploymentTerraformBlueprintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference">ConfigDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.artifactsGcsBucketInput">ArtifactsGcsBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.importExistingResourcesInput">ImportExistingResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.quotaValidationInput">QuotaValidationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformBlueprintInput">TerraformBlueprintInput</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfVersionConstraintInput">TfVersionConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.workerPoolInput">WorkerPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.artifactsGcsBucket">ArtifactsGcsBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.importExistingResources">ImportExistingResources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.quotaValidation">QuotaValidation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfVersionConstraint">TfVersionConstraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.workerPool">WorkerPool</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `LatestRevision`<sup>Required</sup> <a name="LatestRevision" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.latestRevision"></a>

```go
func LatestRevision() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformBlueprint`<sup>Required</sup> <a name="TerraformBlueprint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformBlueprint"></a>

```go
func TerraformBlueprint() ConfigDeploymentTerraformBlueprintOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference">ConfigDeploymentTerraformBlueprintOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.timeouts"></a>

```go
func Timeouts() ConfigDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference">ConfigDeploymentTimeoutsOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ArtifactsGcsBucketInput`<sup>Optional</sup> <a name="ArtifactsGcsBucketInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.artifactsGcsBucketInput"></a>

```go
func ArtifactsGcsBucketInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportExistingResourcesInput`<sup>Optional</sup> <a name="ImportExistingResourcesInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.importExistingResourcesInput"></a>

```go
func ImportExistingResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `QuotaValidationInput`<sup>Optional</sup> <a name="QuotaValidationInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.quotaValidationInput"></a>

```go
func QuotaValidationInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TerraformBlueprintInput`<sup>Optional</sup> <a name="TerraformBlueprintInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformBlueprintInput"></a>

```go
func TerraformBlueprintInput() ConfigDeploymentTerraformBlueprint
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

---

##### `TfVersionConstraintInput`<sup>Optional</sup> <a name="TfVersionConstraintInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfVersionConstraintInput"></a>

```go
func TfVersionConstraintInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkerPoolInput`<sup>Optional</sup> <a name="WorkerPoolInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.workerPoolInput"></a>

```go
func WorkerPoolInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ArtifactsGcsBucket`<sup>Required</sup> <a name="ArtifactsGcsBucket" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.artifactsGcsBucket"></a>

```go
func ArtifactsGcsBucket() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportExistingResources`<sup>Required</sup> <a name="ImportExistingResources" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.importExistingResources"></a>

```go
func ImportExistingResources() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `QuotaValidation`<sup>Required</sup> <a name="QuotaValidation" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.quotaValidation"></a>

```go
func QuotaValidation() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `TfVersionConstraint`<sup>Required</sup> <a name="TfVersionConstraint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfVersionConstraint"></a>

```go
func TfVersionConstraint() *string
```

- *Type:* *string

---

##### `WorkerPool`<sup>Required</sup> <a name="WorkerPool" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.workerPool"></a>

```go
func WorkerPool() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigDeploymentConfig <a name="ConfigDeploymentConfig" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/configdeployment"

&configdeployment.ConfigDeploymentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ServiceAccount: *string,
	TerraformBlueprint: github.com/cdktn-io/cdktn-provider-google-go/google/v19.configDeployment.ConfigDeploymentTerraformBlueprint,
	Annotations: *map[string]*string,
	ArtifactsGcsBucket: *string,
	DeletionPolicy: *string,
	ForceDestroy: interface{},
	Id: *string,
	ImportExistingResources: interface{},
	Labels: *map[string]*string,
	Project: *string,
	QuotaValidation: *string,
	TfVersionConstraint: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.configDeployment.ConfigDeploymentTimeouts,
	WorkerPool: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.name">Name</a></code> | <code>*string</code> | The user-specified ID of the deployment. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Required. User-specified Service Account (SA) credentials to be used when actuating resources. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.terraformBlueprint">TerraformBlueprint</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a></code> | terraform_blueprint block. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Optional. Arbitrary key-value metadata storage. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.artifactsGcsBucket">ArtifactsGcsBucket</a></code> | <code>*string</code> | Location for Cloud Build logs and artifacts. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | If true, deletes the deployment and its nested resources. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#id ConfigDeployment#id}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.importExistingResources">ImportExistingResources</a></code> | <code>interface{}</code> | If true, attempts to automatically import resources on 409 conflict. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. User-defined metadata for the deployment. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#project ConfigDeployment#project}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.quotaValidation">QuotaValidation</a></code> | <code>*string</code> | Controls quota checks. Possible values: ["ENABLED", "ENFORCED"]. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.tfVersionConstraint">TfVersionConstraint</a></code> | <code>*string</code> | Optional constraint on the Terraform version. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.workerPool">WorkerPool</a></code> | <code>*string</code> | Custom Cloud Build worker pool resource name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#location ConfigDeployment#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The user-specified ID of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#name ConfigDeployment#name}

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Required. User-specified Service Account (SA) credentials to be used when actuating resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#service_account ConfigDeployment#service_account}

---

##### `TerraformBlueprint`<sup>Required</sup> <a name="TerraformBlueprint" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.terraformBlueprint"></a>

```go
TerraformBlueprint ConfigDeploymentTerraformBlueprint
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

terraform_blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#terraform_blueprint ConfigDeployment#terraform_blueprint}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Optional. Arbitrary key-value metadata storage.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#annotations ConfigDeployment#annotations}

---

##### `ArtifactsGcsBucket`<sup>Optional</sup> <a name="ArtifactsGcsBucket" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.artifactsGcsBucket"></a>

```go
ArtifactsGcsBucket *string
```

- *Type:* *string

Location for Cloud Build logs and artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#artifacts_gcs_bucket ConfigDeployment#artifacts_gcs_bucket}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#deletion_policy ConfigDeployment#deletion_policy}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

If true, deletes the deployment and its nested resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#force_destroy ConfigDeployment#force_destroy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#id ConfigDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportExistingResources`<sup>Optional</sup> <a name="ImportExistingResources" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.importExistingResources"></a>

```go
ImportExistingResources interface{}
```

- *Type:* interface{}

If true, attempts to automatically import resources on 409 conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#import_existing_resources ConfigDeployment#import_existing_resources}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. User-defined metadata for the deployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#labels ConfigDeployment#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#project ConfigDeployment#project}.

---

##### `QuotaValidation`<sup>Optional</sup> <a name="QuotaValidation" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.quotaValidation"></a>

```go
QuotaValidation *string
```

- *Type:* *string

Controls quota checks. Possible values: ["ENABLED", "ENFORCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#quota_validation ConfigDeployment#quota_validation}

---

##### `TfVersionConstraint`<sup>Optional</sup> <a name="TfVersionConstraint" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.tfVersionConstraint"></a>

```go
TfVersionConstraint *string
```

- *Type:* *string

Optional constraint on the Terraform version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#tf_version_constraint ConfigDeployment#tf_version_constraint}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.timeouts"></a>

```go
Timeouts ConfigDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#timeouts ConfigDeployment#timeouts}

---

##### `WorkerPool`<sup>Optional</sup> <a name="WorkerPool" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.workerPool"></a>

```go
WorkerPool *string
```

- *Type:* *string

Custom Cloud Build worker pool resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#worker_pool ConfigDeployment#worker_pool}

---

### ConfigDeploymentTerraformBlueprint <a name="ConfigDeploymentTerraformBlueprint" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/configdeployment"

&configdeployment.ConfigDeploymentTerraformBlueprint {
	GcsSource: *string,
	GitSource: github.com/cdktn-io/cdktn-provider-google-go/google/v19.configDeployment.ConfigDeploymentTerraformBlueprintGitSource,
	InputValues: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.gcsSource">GcsSource</a></code> | <code>*string</code> | URI of a GCS object containing the zipped Terraform blueprint. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.gitSource">GitSource</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a></code> | git_source block. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.inputValues">InputValues</a></code> | <code>interface{}</code> | input_values block. |

---

##### `GcsSource`<sup>Optional</sup> <a name="GcsSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.gcsSource"></a>

```go
GcsSource *string
```

- *Type:* *string

URI of a GCS object containing the zipped Terraform blueprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#gcs_source ConfigDeployment#gcs_source}

---

##### `GitSource`<sup>Optional</sup> <a name="GitSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.gitSource"></a>

```go
GitSource ConfigDeploymentTerraformBlueprintGitSource
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a>

git_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#git_source ConfigDeployment#git_source}

---

##### `InputValues`<sup>Optional</sup> <a name="InputValues" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.inputValues"></a>

```go
InputValues interface{}
```

- *Type:* interface{}

input_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#input_values ConfigDeployment#input_values}

---

### ConfigDeploymentTerraformBlueprintGitSource <a name="ConfigDeploymentTerraformBlueprintGitSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/configdeployment"

&configdeployment.ConfigDeploymentTerraformBlueprintGitSource {
	Repo: *string,
	Directory: *string,
	Ref: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.repo">Repo</a></code> | <code>*string</code> | Repository URL. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.directory">Directory</a></code> | <code>*string</code> | Subdirectory within the repo. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.ref">Ref</a></code> | <code>*string</code> | Git reference (branch or tag). |

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.repo"></a>

```go
Repo *string
```

- *Type:* *string

Repository URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#repo ConfigDeployment#repo}

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.directory"></a>

```go
Directory *string
```

- *Type:* *string

Subdirectory within the repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#directory ConfigDeployment#directory}

---

##### `Ref`<sup>Optional</sup> <a name="Ref" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.ref"></a>

```go
Ref *string
```

- *Type:* *string

Git reference (branch or tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#ref ConfigDeployment#ref}

---

### ConfigDeploymentTerraformBlueprintInputValues <a name="ConfigDeploymentTerraformBlueprintInputValues" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/configdeployment"

&configdeployment.ConfigDeploymentTerraformBlueprintInputValues {
	InputValue: *string,
	VariableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.property.inputValue">InputValue</a></code> | <code>*string</code> | The value of the variable. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.property.variableName">VariableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#variable_name ConfigDeployment#variable_name}. |

---

##### `InputValue`<sup>Required</sup> <a name="InputValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.property.inputValue"></a>

```go
InputValue *string
```

- *Type:* *string

The value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#input_value ConfigDeployment#input_value}

---

##### `VariableName`<sup>Required</sup> <a name="VariableName" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.property.variableName"></a>

```go
VariableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#variable_name ConfigDeployment#variable_name}.

---

### ConfigDeploymentTimeouts <a name="ConfigDeploymentTimeouts" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/configdeployment"

&configdeployment.ConfigDeploymentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#create ConfigDeployment#create}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#delete ConfigDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#update ConfigDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#create ConfigDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#delete ConfigDeployment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/config_deployment#update ConfigDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigDeploymentTerraformBlueprintGitSourceOutputReference <a name="ConfigDeploymentTerraformBlueprintGitSourceOutputReference" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/configdeployment"

configdeployment.NewConfigDeploymentTerraformBlueprintGitSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigDeploymentTerraformBlueprintGitSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetRef">ResetRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetDirectory"></a>

```go
func ResetDirectory()
```

##### `ResetRef` <a name="ResetRef" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetRef"></a>

```go
func ResetRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directoryInput">DirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.refInput">RefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repoInput">RepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directory">Directory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repo">Repo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directoryInput"></a>

```go
func DirectoryInput() *string
```

- *Type:* *string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.refInput"></a>

```go
func RefInput() *string
```

- *Type:* *string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repoInput"></a>

```go
func RepoInput() *string
```

- *Type:* *string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directory"></a>

```go
func Directory() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repo"></a>

```go
func Repo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigDeploymentTerraformBlueprintGitSource
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a>

---


### ConfigDeploymentTerraformBlueprintInputValuesList <a name="ConfigDeploymentTerraformBlueprintInputValuesList" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/configdeployment"

configdeployment.NewConfigDeploymentTerraformBlueprintInputValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigDeploymentTerraformBlueprintInputValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.get"></a>

```go
func Get(index *f64) ConfigDeploymentTerraformBlueprintInputValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigDeploymentTerraformBlueprintInputValuesOutputReference <a name="ConfigDeploymentTerraformBlueprintInputValuesOutputReference" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/configdeployment"

configdeployment.NewConfigDeploymentTerraformBlueprintInputValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigDeploymentTerraformBlueprintInputValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValueInput">InputValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableNameInput">VariableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValue">InputValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableName">VariableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputValueInput`<sup>Optional</sup> <a name="InputValueInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValueInput"></a>

```go
func InputValueInput() *string
```

- *Type:* *string

---

##### `VariableNameInput`<sup>Optional</sup> <a name="VariableNameInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableNameInput"></a>

```go
func VariableNameInput() *string
```

- *Type:* *string

---

##### `InputValue`<sup>Required</sup> <a name="InputValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValue"></a>

```go
func InputValue() *string
```

- *Type:* *string

---

##### `VariableName`<sup>Required</sup> <a name="VariableName" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableName"></a>

```go
func VariableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigDeploymentTerraformBlueprintOutputReference <a name="ConfigDeploymentTerraformBlueprintOutputReference" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/configdeployment"

configdeployment.NewConfigDeploymentTerraformBlueprintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigDeploymentTerraformBlueprintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putGitSource">PutGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putInputValues">PutInputValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetGcsSource">ResetGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetGitSource">ResetGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetInputValues">ResetInputValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGitSource` <a name="PutGitSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putGitSource"></a>

```go
func PutGitSource(value ConfigDeploymentTerraformBlueprintGitSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putGitSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a>

---

##### `PutInputValues` <a name="PutInputValues" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putInputValues"></a>

```go
func PutInputValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putInputValues.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGcsSource` <a name="ResetGcsSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetGcsSource"></a>

```go
func ResetGcsSource()
```

##### `ResetGitSource` <a name="ResetGitSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetGitSource"></a>

```go
func ResetGitSource()
```

##### `ResetInputValues` <a name="ResetInputValues" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetInputValues"></a>

```go
func ResetInputValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gitSource">GitSource</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference">ConfigDeploymentTerraformBlueprintGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.inputValues">InputValues</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList">ConfigDeploymentTerraformBlueprintInputValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gcsSourceInput">GcsSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gitSourceInput">GitSourceInput</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.inputValuesInput">InputValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gcsSource">GcsSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GitSource`<sup>Required</sup> <a name="GitSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gitSource"></a>

```go
func GitSource() ConfigDeploymentTerraformBlueprintGitSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference">ConfigDeploymentTerraformBlueprintGitSourceOutputReference</a>

---

##### `InputValues`<sup>Required</sup> <a name="InputValues" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.inputValues"></a>

```go
func InputValues() ConfigDeploymentTerraformBlueprintInputValuesList
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList">ConfigDeploymentTerraformBlueprintInputValuesList</a>

---

##### `GcsSourceInput`<sup>Optional</sup> <a name="GcsSourceInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gcsSourceInput"></a>

```go
func GcsSourceInput() *string
```

- *Type:* *string

---

##### `GitSourceInput`<sup>Optional</sup> <a name="GitSourceInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gitSourceInput"></a>

```go
func GitSourceInput() ConfigDeploymentTerraformBlueprintGitSource
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a>

---

##### `InputValuesInput`<sup>Optional</sup> <a name="InputValuesInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.inputValuesInput"></a>

```go
func InputValuesInput() interface{}
```

- *Type:* interface{}

---

##### `GcsSource`<sup>Required</sup> <a name="GcsSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gcsSource"></a>

```go
func GcsSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigDeploymentTerraformBlueprint
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

---


### ConfigDeploymentTimeoutsOutputReference <a name="ConfigDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/configdeployment"

configdeployment.NewConfigDeploymentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigDeploymentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



