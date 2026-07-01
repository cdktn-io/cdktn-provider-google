# `computeRegionHealthAggregationPolicy` Submodule <a name="`computeRegionHealthAggregationPolicy` Submodule" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionHealthAggregationPolicy <a name="ComputeRegionHealthAggregationPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy google_compute_region_health_aggregation_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeregionhealthaggregationpolicy"

computeregionhealthaggregationpolicy.NewComputeRegionHealthAggregationPolicy(scope Construct, id *string, config ComputeRegionHealthAggregationPolicyConfig) ComputeRegionHealthAggregationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig">ComputeRegionHealthAggregationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig">ComputeRegionHealthAggregationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetHealthyPercentThreshold">ResetHealthyPercentThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetMinHealthyThreshold">ResetMinHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetPolicyType">ResetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts"></a>

```go
func PutTimeouts(value ComputeRegionHealthAggregationPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHealthyPercentThreshold` <a name="ResetHealthyPercentThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetHealthyPercentThreshold"></a>

```go
func ResetHealthyPercentThreshold()
```

##### `ResetMinHealthyThreshold` <a name="ResetMinHealthyThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetMinHealthyThreshold"></a>

```go
func ResetMinHealthyThreshold()
```

##### `ResetPolicyType` <a name="ResetPolicyType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetPolicyType"></a>

```go
func ResetPolicyType()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRegionHealthAggregationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeregionhealthaggregationpolicy"

computeregionhealthaggregationpolicy.ComputeRegionHealthAggregationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeregionhealthaggregationpolicy"

computeregionhealthaggregationpolicy.ComputeRegionHealthAggregationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeregionhealthaggregationpolicy"

computeregionhealthaggregationpolicy.ComputeRegionHealthAggregationPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeregionhealthaggregationpolicy"

computeregionhealthaggregationpolicy.ComputeRegionHealthAggregationPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComputeRegionHealthAggregationPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeRegionHealthAggregationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeRegionHealthAggregationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionHealthAggregationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.selfLinkWithId">SelfLinkWithId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference">ComputeRegionHealthAggregationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThresholdInput">HealthyPercentThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThresholdInput">MinHealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyTypeInput">PolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThreshold">HealthyPercentThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThreshold">MinHealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SelfLinkWithId`<sup>Required</sup> <a name="SelfLinkWithId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.selfLinkWithId"></a>

```go
func SelfLinkWithId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeouts"></a>

```go
func Timeouts() ComputeRegionHealthAggregationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference">ComputeRegionHealthAggregationPolicyTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HealthyPercentThresholdInput`<sup>Optional</sup> <a name="HealthyPercentThresholdInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThresholdInput"></a>

```go
func HealthyPercentThresholdInput() *f64
```

- *Type:* *f64

---

##### `MinHealthyThresholdInput`<sup>Optional</sup> <a name="MinHealthyThresholdInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThresholdInput"></a>

```go
func MinHealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyTypeInput"></a>

```go
func PolicyTypeInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HealthyPercentThreshold`<sup>Required</sup> <a name="HealthyPercentThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThreshold"></a>

```go
func HealthyPercentThreshold() *f64
```

- *Type:* *f64

---

##### `MinHealthyThreshold`<sup>Required</sup> <a name="MinHealthyThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThreshold"></a>

```go
func MinHealthyThreshold() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionHealthAggregationPolicyConfig <a name="ComputeRegionHealthAggregationPolicyConfig" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeregionhealthaggregationpolicy"

&computeregionhealthaggregationpolicy.ComputeRegionHealthAggregationPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Region: *string,
	DeletionPolicy: *string,
	Description: *string,
	HealthyPercentThreshold: *f64,
	MinHealthyThreshold: *f64,
	PolicyType: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.region">Region</a></code> | <code>*string</code> | URL of the region where the health aggregation policy resides. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.healthyPercentThreshold">HealthyPercentThreshold</a></code> | <code>*f64</code> | Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.minHealthyThreshold">MinHealthyThreshold</a></code> | <code>*f64</code> | Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.policyType">PolicyType</a></code> | <code>*string</code> | Specifies the type of the healthAggregationPolicy. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#project ComputeRegionHealthAggregationPolicy#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#name ComputeRegionHealthAggregationPolicy#name}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

URL of the region where the health aggregation policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#region ComputeRegionHealthAggregationPolicy#region}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#deletion_policy ComputeRegionHealthAggregationPolicy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#description ComputeRegionHealthAggregationPolicy#description}

---

##### `HealthyPercentThreshold`<sup>Optional</sup> <a name="HealthyPercentThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.healthyPercentThreshold"></a>

```go
HealthyPercentThreshold *f64
```

- *Type:* *f64

Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'.

Specifies the threshold (as a
percentage) of healthy endpoints required in order to consider the
aggregated health result HEALTHY. Defaults to '60'. Must be in
range [0, 100]. Not applicable if the 'policyType' field is
'DNB_PUBLIC_IP_POLICY'. Can be mutated. This field is optional,
and will be set to the default if unspecified. Note that both this
threshold and 'minHealthyThreshold' must be satisfied in order
for HEALTHY to be the aggregated result. "Endpoints" refers to network
endpoints within a Network Endpoint Group or instances within an Instance
Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#healthy_percent_threshold ComputeRegionHealthAggregationPolicy#healthy_percent_threshold}

---

##### `MinHealthyThreshold`<sup>Optional</sup> <a name="MinHealthyThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.minHealthyThreshold"></a>

```go
MinHealthyThreshold *f64
```

- *Type:* *f64

Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'.

Specifies the minimum number of
healthy endpoints required in order to consider the aggregated health
result HEALTHY. Defaults to '1'. Must be positive. Not
applicable if the 'policyType' field is
'DNB_PUBLIC_IP_POLICY'. Can be mutated. This field is optional,
and will be set to the default if unspecified. Note that both this
threshold and 'healthyPercentThreshold' must be satisfied in
order for HEALTHY to be the aggregated result. "Endpoints" refers to
network endpoints within a Network Endpoint Group or instances within an
Instance Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#min_healthy_threshold ComputeRegionHealthAggregationPolicy#min_healthy_threshold}

---

##### `PolicyType`<sup>Optional</sup> <a name="PolicyType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.policyType"></a>

```go
PolicyType *string
```

- *Type:* *string

Specifies the type of the healthAggregationPolicy.

The only allowed value
for global resources is 'DNS_PUBLIC_IP_POLICY'. The only allowed
value for regional resources is 'BACKEND_SERVICE_POLICY'. Must
be specified when the healthAggregationPolicy is created, and cannot be
mutated. Default value: "BACKEND_SERVICE_POLICY" Possible values: ["DNS_PUBLIC_IP_POLICY", "BACKEND_SERVICE_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#policy_type ComputeRegionHealthAggregationPolicy#policy_type}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#project ComputeRegionHealthAggregationPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.timeouts"></a>

```go
Timeouts ComputeRegionHealthAggregationPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#timeouts ComputeRegionHealthAggregationPolicy#timeouts}

---

### ComputeRegionHealthAggregationPolicyTimeouts <a name="ComputeRegionHealthAggregationPolicyTimeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeregionhealthaggregationpolicy"

&computeregionhealthaggregationpolicy.ComputeRegionHealthAggregationPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#create ComputeRegionHealthAggregationPolicy#create}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#delete ComputeRegionHealthAggregationPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#update ComputeRegionHealthAggregationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#create ComputeRegionHealthAggregationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#delete ComputeRegionHealthAggregationPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_health_aggregation_policy#update ComputeRegionHealthAggregationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionHealthAggregationPolicyTimeoutsOutputReference <a name="ComputeRegionHealthAggregationPolicyTimeoutsOutputReference" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeregionhealthaggregationpolicy"

computeregionhealthaggregationpolicy.NewComputeRegionHealthAggregationPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionHealthAggregationPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



