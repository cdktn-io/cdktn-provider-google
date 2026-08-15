# `computeRolloutPlan` Submodule <a name="`computeRolloutPlan` Submodule" id="@cdktn/provider-google.computeRolloutPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRolloutPlan <a name="ComputeRolloutPlan" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan google_compute_rollout_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.NewComputeRolloutPlan(scope Construct, id *string, config ComputeRolloutPlanConfig) ComputeRolloutPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig">ComputeRolloutPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig">ComputeRolloutPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putWaves">PutWaves</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetLocationScope">ResetLocationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putTimeouts"></a>

```go
func PutTimeouts(value ComputeRolloutPlanTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a>

---

##### `PutWaves` <a name="PutWaves" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putWaves"></a>

```go
func PutWaves(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putWaves.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetId"></a>

```go
func ResetId()
```

##### `ResetLocationScope` <a name="ResetLocationScope" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetLocationScope"></a>

```go
func ResetLocationScope()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRolloutPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.ComputeRolloutPlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.ComputeRolloutPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.ComputeRolloutPlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.ComputeRolloutPlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComputeRolloutPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeRolloutPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeRolloutPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRolloutPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference">ComputeRolloutPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.waves">Waves</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList">ComputeRolloutPlanWavesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.locationScopeInput">LocationScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.wavesInput">WavesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.locationScope">LocationScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.timeouts"></a>

```go
func Timeouts() ComputeRolloutPlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference">ComputeRolloutPlanTimeoutsOutputReference</a>

---

##### `Waves`<sup>Required</sup> <a name="Waves" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.waves"></a>

```go
func Waves() ComputeRolloutPlanWavesList
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList">ComputeRolloutPlanWavesList</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationScopeInput`<sup>Optional</sup> <a name="LocationScopeInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.locationScopeInput"></a>

```go
func LocationScopeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WavesInput`<sup>Optional</sup> <a name="WavesInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.wavesInput"></a>

```go
func WavesInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocationScope`<sup>Required</sup> <a name="LocationScope" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.locationScope"></a>

```go
func LocationScope() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRolloutPlanConfig <a name="ComputeRolloutPlanConfig" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

&computerolloutplan.ComputeRolloutPlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Waves: interface{},
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	LocationScope: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeRolloutPlan.ComputeRolloutPlanTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.waves">Waves</a></code> | <code>interface{}</code> | waves block. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#id ComputeRolloutPlan#id}. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.locationScope">LocationScope</a></code> | <code>*string</code> | The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"]. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#project ComputeRolloutPlan#project}. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#name ComputeRolloutPlan#name}

---

##### `Waves`<sup>Required</sup> <a name="Waves" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.waves"></a>

```go
Waves interface{}
```

- *Type:* interface{}

waves block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#waves ComputeRolloutPlan#waves}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#deletion_policy ComputeRolloutPlan#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#description ComputeRolloutPlan#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#id ComputeRolloutPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationScope`<sup>Optional</sup> <a name="LocationScope" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.locationScope"></a>

```go
LocationScope *string
```

- *Type:* *string

The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#location_scope ComputeRolloutPlan#location_scope}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#project ComputeRolloutPlan#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.timeouts"></a>

```go
Timeouts ComputeRolloutPlanTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#timeouts ComputeRolloutPlan#timeouts}

---

### ComputeRolloutPlanTimeouts <a name="ComputeRolloutPlanTimeouts" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

&computerolloutplan.ComputeRolloutPlanTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#create ComputeRolloutPlan#create}. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#delete ComputeRolloutPlan#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#create ComputeRolloutPlan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#delete ComputeRolloutPlan#delete}.

---

### ComputeRolloutPlanWaves <a name="ComputeRolloutPlanWaves" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

&computerolloutplan.ComputeRolloutPlanWaves {
	Selectors: interface{},
	Validation: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeRolloutPlan.ComputeRolloutPlanWavesValidation,
	DisplayName: *string,
	OrchestrationOptions: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.selectors">Selectors</a></code> | <code>interface{}</code> | selectors block. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.validation">Validation</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a></code> | validation block. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of this wave of the rollout plan. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.orchestrationOptions">OrchestrationOptions</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a></code> | orchestration_options block. |

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.selectors"></a>

```go
Selectors interface{}
```

- *Type:* interface{}

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#selectors ComputeRolloutPlan#selectors}

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.validation"></a>

```go
Validation ComputeRolloutPlanWavesValidation
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a>

validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#validation ComputeRolloutPlan#validation}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of this wave of the rollout plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#display_name ComputeRolloutPlan#display_name}

---

##### `OrchestrationOptions`<sup>Optional</sup> <a name="OrchestrationOptions" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.orchestrationOptions"></a>

```go
OrchestrationOptions ComputeRolloutPlanWavesOrchestrationOptions
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a>

orchestration_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#orchestration_options ComputeRolloutPlan#orchestration_options}

---

### ComputeRolloutPlanWavesOrchestrationOptions <a name="ComputeRolloutPlanWavesOrchestrationOptions" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

&computerolloutplan.ComputeRolloutPlanWavesOrchestrationOptions {
	Delays: interface{},
	MaxConcurrentLocations: *f64,
	MaxConcurrentResourcesPerLocation: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.delays">Delays</a></code> | <code>interface{}</code> | delays block. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentLocations">MaxConcurrentLocations</a></code> | <code>*f64</code> | Maximum number of locations to be orchestrated in parallel. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentResourcesPerLocation">MaxConcurrentResourcesPerLocation</a></code> | <code>*f64</code> | Maximum number of resources to be orchestrated per location in parallel. |

---

##### `Delays`<sup>Optional</sup> <a name="Delays" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.delays"></a>

```go
Delays interface{}
```

- *Type:* interface{}

delays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#delays ComputeRolloutPlan#delays}

---

##### `MaxConcurrentLocations`<sup>Optional</sup> <a name="MaxConcurrentLocations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentLocations"></a>

```go
MaxConcurrentLocations *f64
```

- *Type:* *f64

Maximum number of locations to be orchestrated in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#max_concurrent_locations ComputeRolloutPlan#max_concurrent_locations}

---

##### `MaxConcurrentResourcesPerLocation`<sup>Optional</sup> <a name="MaxConcurrentResourcesPerLocation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentResourcesPerLocation"></a>

```go
MaxConcurrentResourcesPerLocation *f64
```

- *Type:* *f64

Maximum number of resources to be orchestrated per location in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#max_concurrent_resources_per_location ComputeRolloutPlan#max_concurrent_resources_per_location}

---

### ComputeRolloutPlanWavesOrchestrationOptionsDelays <a name="ComputeRolloutPlanWavesOrchestrationOptionsDelays" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

&computerolloutplan.ComputeRolloutPlanWavesOrchestrationOptionsDelays {
	Delimiter: *string,
	Duration: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.delimiter">Delimiter</a></code> | <code>*string</code> | Controls whether the delay should only be added between batches of projects corresponding to different locations, or also between batches of projects corresponding to the same location. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.duration">Duration</a></code> | <code>*string</code> | The duration of the delay, if any, to be added between batches of projects. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.type">Type</a></code> | <code>*string</code> | Controls whether the specified duration is to be added at the end of each batch, or if the total processing time for each batch will be padded if needed to meet the specified duration. |

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

Controls whether the delay should only be added between batches of projects corresponding to different locations, or also between batches of projects corresponding to the same location.

Possible values: ["DELIMITER_UNSPECIFIED", "DELIMITER_LOCATION", "DELIMITER_BATCH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#delimiter ComputeRolloutPlan#delimiter}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

The duration of the delay, if any, to be added between batches of projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#duration ComputeRolloutPlan#duration}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.type"></a>

```go
Type *string
```

- *Type:* *string

Controls whether the specified duration is to be added at the end of each batch, or if the total processing time for each batch will be padded if needed to meet the specified duration.

Possible values: ["TYPE_UNSPECIFIED", "TYPE_OFFSET", "TYPE_MINIMUM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#type ComputeRolloutPlan#type}

---

### ComputeRolloutPlanWavesSelectors <a name="ComputeRolloutPlanWavesSelectors" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

&computerolloutplan.ComputeRolloutPlanWavesSelectors {
	LocationSelector: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector,
	ResourceHierarchySelector: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors.property.locationSelector">LocationSelector</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | location_selector block. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors.property.resourceHierarchySelector">ResourceHierarchySelector</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | resource_hierarchy_selector block. |

---

##### `LocationSelector`<sup>Optional</sup> <a name="LocationSelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors.property.locationSelector"></a>

```go
LocationSelector ComputeRolloutPlanWavesSelectorsLocationSelector
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a>

location_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#location_selector ComputeRolloutPlan#location_selector}

---

##### `ResourceHierarchySelector`<sup>Optional</sup> <a name="ResourceHierarchySelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors.property.resourceHierarchySelector"></a>

```go
ResourceHierarchySelector ComputeRolloutPlanWavesSelectorsResourceHierarchySelector
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

resource_hierarchy_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#resource_hierarchy_selector ComputeRolloutPlan#resource_hierarchy_selector}

---

### ComputeRolloutPlanWavesSelectorsLocationSelector <a name="ComputeRolloutPlanWavesSelectorsLocationSelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

&computerolloutplan.ComputeRolloutPlanWavesSelectorsLocationSelector {
	IncludedLocations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector.property.includedLocations">IncludedLocations</a></code> | <code>*[]*string</code> | Example: "us-central1-a". |

---

##### `IncludedLocations`<sup>Optional</sup> <a name="IncludedLocations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector.property.includedLocations"></a>

```go
IncludedLocations *[]*string
```

- *Type:* *[]*string

Example: "us-central1-a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#included_locations ComputeRolloutPlan#included_locations}

---

### ComputeRolloutPlanWavesSelectorsResourceHierarchySelector <a name="ComputeRolloutPlanWavesSelectorsResourceHierarchySelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

&computerolloutplan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector {
	IncludedFolders: *[]*string,
	IncludedOrganizations: *[]*string,
	IncludedProjects: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedFolders">IncludedFolders</a></code> | <code>*[]*string</code> | Format: "folders/{folder_id}". |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedOrganizations">IncludedOrganizations</a></code> | <code>*[]*string</code> | Format: "organizations/{organization_id}". |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedProjects">IncludedProjects</a></code> | <code>*[]*string</code> | Format: "projects/{project_id}". |

---

##### `IncludedFolders`<sup>Optional</sup> <a name="IncludedFolders" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedFolders"></a>

```go
IncludedFolders *[]*string
```

- *Type:* *[]*string

Format: "folders/{folder_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#included_folders ComputeRolloutPlan#included_folders}

---

##### `IncludedOrganizations`<sup>Optional</sup> <a name="IncludedOrganizations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedOrganizations"></a>

```go
IncludedOrganizations *[]*string
```

- *Type:* *[]*string

Format: "organizations/{organization_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#included_organizations ComputeRolloutPlan#included_organizations}

---

##### `IncludedProjects`<sup>Optional</sup> <a name="IncludedProjects" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedProjects"></a>

```go
IncludedProjects *[]*string
```

- *Type:* *[]*string

Format: "projects/{project_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#included_projects ComputeRolloutPlan#included_projects}

---

### ComputeRolloutPlanWavesValidation <a name="ComputeRolloutPlanWavesValidation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

&computerolloutplan.ComputeRolloutPlanWavesValidation {
	Type: *string,
	TimeBasedValidationMetadata: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation.property.type">Type</a></code> | <code>*string</code> | The type of the validation. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation.property.timeBasedValidationMetadata">TimeBasedValidationMetadata</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | time_based_validation_metadata block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the validation.

Possible values:
"manual": The system waits for an end-user approval API before progressing to the next wave.
"time": The system waits for a user specified duration before progressing to the next wave.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#type ComputeRolloutPlan#type}

---

##### `TimeBasedValidationMetadata`<sup>Optional</sup> <a name="TimeBasedValidationMetadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation.property.timeBasedValidationMetadata"></a>

```go
TimeBasedValidationMetadata ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

time_based_validation_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#time_based_validation_metadata ComputeRolloutPlan#time_based_validation_metadata}

---

### ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata <a name="ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

&computerolloutplan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata {
	WaitDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.property.waitDuration">WaitDuration</a></code> | <code>*string</code> | The duration that the system waits in between waves. |

---

##### `WaitDuration`<sup>Optional</sup> <a name="WaitDuration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.property.waitDuration"></a>

```go
WaitDuration *string
```

- *Type:* *string

The duration that the system waits in between waves.

This wait starts
after all changes in the wave are rolled out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_rollout_plan#wait_duration ComputeRolloutPlan#wait_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRolloutPlanTimeoutsOutputReference <a name="ComputeRolloutPlanTimeoutsOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.NewComputeRolloutPlanTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRolloutPlanTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRolloutPlanWavesList <a name="ComputeRolloutPlanWavesList" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.NewComputeRolloutPlanWavesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRolloutPlanWavesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.get"></a>

```go
func Get(index *f64) ComputeRolloutPlanWavesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRolloutPlanWavesOrchestrationOptionsDelaysList <a name="ComputeRolloutPlanWavesOrchestrationOptionsDelaysList" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.NewComputeRolloutPlanWavesOrchestrationOptionsDelaysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRolloutPlanWavesOrchestrationOptionsDelaysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get"></a>

```go
func Get(index *f64) ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference <a name="ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.NewComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRolloutPlanWavesOrchestrationOptionsOutputReference <a name="ComputeRolloutPlanWavesOrchestrationOptionsOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.NewComputeRolloutPlanWavesOrchestrationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRolloutPlanWavesOrchestrationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays">PutDelays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetDelays">ResetDelays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentLocations">ResetMaxConcurrentLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentResourcesPerLocation">ResetMaxConcurrentResourcesPerLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDelays` <a name="PutDelays" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays"></a>

```go
func PutDelays(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDelays` <a name="ResetDelays" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetDelays"></a>

```go
func ResetDelays()
```

##### `ResetMaxConcurrentLocations` <a name="ResetMaxConcurrentLocations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentLocations"></a>

```go
func ResetMaxConcurrentLocations()
```

##### `ResetMaxConcurrentResourcesPerLocation` <a name="ResetMaxConcurrentResourcesPerLocation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentResourcesPerLocation"></a>

```go
func ResetMaxConcurrentResourcesPerLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delays">Delays</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList">ComputeRolloutPlanWavesOrchestrationOptionsDelaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delaysInput">DelaysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocationsInput">MaxConcurrentLocationsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocationInput">MaxConcurrentResourcesPerLocationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocations">MaxConcurrentLocations</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocation">MaxConcurrentResourcesPerLocation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Delays`<sup>Required</sup> <a name="Delays" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delays"></a>

```go
func Delays() ComputeRolloutPlanWavesOrchestrationOptionsDelaysList
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList">ComputeRolloutPlanWavesOrchestrationOptionsDelaysList</a>

---

##### `DelaysInput`<sup>Optional</sup> <a name="DelaysInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delaysInput"></a>

```go
func DelaysInput() interface{}
```

- *Type:* interface{}

---

##### `MaxConcurrentLocationsInput`<sup>Optional</sup> <a name="MaxConcurrentLocationsInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocationsInput"></a>

```go
func MaxConcurrentLocationsInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentResourcesPerLocationInput`<sup>Optional</sup> <a name="MaxConcurrentResourcesPerLocationInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocationInput"></a>

```go
func MaxConcurrentResourcesPerLocationInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentLocations`<sup>Required</sup> <a name="MaxConcurrentLocations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocations"></a>

```go
func MaxConcurrentLocations() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentResourcesPerLocation`<sup>Required</sup> <a name="MaxConcurrentResourcesPerLocation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocation"></a>

```go
func MaxConcurrentResourcesPerLocation() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRolloutPlanWavesOrchestrationOptions
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a>

---


### ComputeRolloutPlanWavesOutputReference <a name="ComputeRolloutPlanWavesOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.NewComputeRolloutPlanWavesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRolloutPlanWavesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putOrchestrationOptions">PutOrchestrationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putSelectors">PutSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putValidation">PutValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resetOrchestrationOptions">ResetOrchestrationOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOrchestrationOptions` <a name="PutOrchestrationOptions" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putOrchestrationOptions"></a>

```go
func PutOrchestrationOptions(value ComputeRolloutPlanWavesOrchestrationOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putOrchestrationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a>

---

##### `PutSelectors` <a name="PutSelectors" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putSelectors"></a>

```go
func PutSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutValidation` <a name="PutValidation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putValidation"></a>

```go
func PutValidation(value ComputeRolloutPlanWavesValidation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putValidation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetOrchestrationOptions` <a name="ResetOrchestrationOptions" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resetOrchestrationOptions"></a>

```go
func ResetOrchestrationOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.orchestrationOptions">OrchestrationOptions</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference">ComputeRolloutPlanWavesOrchestrationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.selectors">Selectors</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList">ComputeRolloutPlanWavesSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.validation">Validation</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference">ComputeRolloutPlanWavesValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.orchestrationOptionsInput">OrchestrationOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.selectorsInput">SelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.validationInput">ValidationInput</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `OrchestrationOptions`<sup>Required</sup> <a name="OrchestrationOptions" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.orchestrationOptions"></a>

```go
func OrchestrationOptions() ComputeRolloutPlanWavesOrchestrationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference">ComputeRolloutPlanWavesOrchestrationOptionsOutputReference</a>

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.selectors"></a>

```go
func Selectors() ComputeRolloutPlanWavesSelectorsList
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList">ComputeRolloutPlanWavesSelectorsList</a>

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.validation"></a>

```go
func Validation() ComputeRolloutPlanWavesValidationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference">ComputeRolloutPlanWavesValidationOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `OrchestrationOptionsInput`<sup>Optional</sup> <a name="OrchestrationOptionsInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.orchestrationOptionsInput"></a>

```go
func OrchestrationOptionsInput() ComputeRolloutPlanWavesOrchestrationOptions
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a>

---

##### `SelectorsInput`<sup>Optional</sup> <a name="SelectorsInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.selectorsInput"></a>

```go
func SelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `ValidationInput`<sup>Optional</sup> <a name="ValidationInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.validationInput"></a>

```go
func ValidationInput() ComputeRolloutPlanWavesValidation
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRolloutPlanWavesSelectorsList <a name="ComputeRolloutPlanWavesSelectorsList" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.NewComputeRolloutPlanWavesSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRolloutPlanWavesSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.get"></a>

```go
func Get(index *f64) ComputeRolloutPlanWavesSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference <a name="ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.NewComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resetIncludedLocations">ResetIncludedLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludedLocations` <a name="ResetIncludedLocations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resetIncludedLocations"></a>

```go
func ResetIncludedLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocationsInput">IncludedLocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocations">IncludedLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludedLocationsInput`<sup>Optional</sup> <a name="IncludedLocationsInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocationsInput"></a>

```go
func IncludedLocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedLocations`<sup>Required</sup> <a name="IncludedLocations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocations"></a>

```go
func IncludedLocations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRolloutPlanWavesSelectorsLocationSelector
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a>

---


### ComputeRolloutPlanWavesSelectorsOutputReference <a name="ComputeRolloutPlanWavesSelectorsOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.NewComputeRolloutPlanWavesSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRolloutPlanWavesSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector">PutLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector">PutResourceHierarchySelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resetLocationSelector">ResetLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resetResourceHierarchySelector">ResetResourceHierarchySelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocationSelector` <a name="PutLocationSelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector"></a>

```go
func PutLocationSelector(value ComputeRolloutPlanWavesSelectorsLocationSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a>

---

##### `PutResourceHierarchySelector` <a name="PutResourceHierarchySelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector"></a>

```go
func PutResourceHierarchySelector(value ComputeRolloutPlanWavesSelectorsResourceHierarchySelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---

##### `ResetLocationSelector` <a name="ResetLocationSelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resetLocationSelector"></a>

```go
func ResetLocationSelector()
```

##### `ResetResourceHierarchySelector` <a name="ResetResourceHierarchySelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resetResourceHierarchySelector"></a>

```go
func ResetResourceHierarchySelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelector">LocationSelector</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference">ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelector">ResourceHierarchySelector</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference">ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelectorInput">LocationSelectorInput</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelectorInput">ResourceHierarchySelectorInput</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationSelector`<sup>Required</sup> <a name="LocationSelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelector"></a>

```go
func LocationSelector() ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference">ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference</a>

---

##### `ResourceHierarchySelector`<sup>Required</sup> <a name="ResourceHierarchySelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelector"></a>

```go
func ResourceHierarchySelector() ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference">ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference</a>

---

##### `LocationSelectorInput`<sup>Optional</sup> <a name="LocationSelectorInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelectorInput"></a>

```go
func LocationSelectorInput() ComputeRolloutPlanWavesSelectorsLocationSelector
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a>

---

##### `ResourceHierarchySelectorInput`<sup>Optional</sup> <a name="ResourceHierarchySelectorInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelectorInput"></a>

```go
func ResourceHierarchySelectorInput() ComputeRolloutPlanWavesSelectorsResourceHierarchySelector
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference <a name="ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.NewComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedFolders">ResetIncludedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedOrganizations">ResetIncludedOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedProjects">ResetIncludedProjects</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludedFolders` <a name="ResetIncludedFolders" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedFolders"></a>

```go
func ResetIncludedFolders()
```

##### `ResetIncludedOrganizations` <a name="ResetIncludedOrganizations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedOrganizations"></a>

```go
func ResetIncludedOrganizations()
```

##### `ResetIncludedProjects` <a name="ResetIncludedProjects" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedProjects"></a>

```go
func ResetIncludedProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFoldersInput">IncludedFoldersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizationsInput">IncludedOrganizationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjectsInput">IncludedProjectsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFolders">IncludedFolders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizations">IncludedOrganizations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjects">IncludedProjects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludedFoldersInput`<sup>Optional</sup> <a name="IncludedFoldersInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFoldersInput"></a>

```go
func IncludedFoldersInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedOrganizationsInput`<sup>Optional</sup> <a name="IncludedOrganizationsInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizationsInput"></a>

```go
func IncludedOrganizationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedProjectsInput`<sup>Optional</sup> <a name="IncludedProjectsInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjectsInput"></a>

```go
func IncludedProjectsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedFolders`<sup>Required</sup> <a name="IncludedFolders" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFolders"></a>

```go
func IncludedFolders() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedOrganizations`<sup>Required</sup> <a name="IncludedOrganizations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizations"></a>

```go
func IncludedOrganizations() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedProjects`<sup>Required</sup> <a name="IncludedProjects" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjects"></a>

```go
func IncludedProjects() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRolloutPlanWavesSelectorsResourceHierarchySelector
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---


### ComputeRolloutPlanWavesValidationOutputReference <a name="ComputeRolloutPlanWavesValidationOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.NewComputeRolloutPlanWavesValidationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRolloutPlanWavesValidationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata">PutTimeBasedValidationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.resetTimeBasedValidationMetadata">ResetTimeBasedValidationMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTimeBasedValidationMetadata` <a name="PutTimeBasedValidationMetadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata"></a>

```go
func PutTimeBasedValidationMetadata(value ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---

##### `ResetTimeBasedValidationMetadata` <a name="ResetTimeBasedValidationMetadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.resetTimeBasedValidationMetadata"></a>

```go
func ResetTimeBasedValidationMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadata">TimeBasedValidationMetadata</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadataInput">TimeBasedValidationMetadataInput</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeBasedValidationMetadata`<sup>Required</sup> <a name="TimeBasedValidationMetadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadata"></a>

```go
func TimeBasedValidationMetadata() ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference</a>

---

##### `TimeBasedValidationMetadataInput`<sup>Optional</sup> <a name="TimeBasedValidationMetadataInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadataInput"></a>

```go
func TimeBasedValidationMetadataInput() ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRolloutPlanWavesValidation
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a>

---


### ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference <a name="ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computerolloutplan"

computerolloutplan.NewComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resetWaitDuration">ResetWaitDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWaitDuration` <a name="ResetWaitDuration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resetWaitDuration"></a>

```go
func ResetWaitDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDurationInput">WaitDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDuration">WaitDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WaitDurationInput`<sup>Optional</sup> <a name="WaitDurationInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDurationInput"></a>

```go
func WaitDurationInput() *string
```

- *Type:* *string

---

##### `WaitDuration`<sup>Required</sup> <a name="WaitDuration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDuration"></a>

```go
func WaitDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---



