# `networkServicesServiceLbPolicies` Submodule <a name="`networkServicesServiceLbPolicies` Submodule" id="@cdktn/provider-google.networkServicesServiceLbPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesServiceLbPolicies <a name="NetworkServicesServiceLbPolicies" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies google_network_services_service_lb_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/networkservicesservicelbpolicies"

networkservicesservicelbpolicies.NewNetworkServicesServiceLbPolicies(scope Construct, id *string, config NetworkServicesServiceLbPoliciesConfig) NetworkServicesServiceLbPolicies
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig">NetworkServicesServiceLbPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig">NetworkServicesServiceLbPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putAutoCapacityDrain">PutAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putFailoverConfig">PutFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetAutoCapacityDrain">ResetAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetFailoverConfig">ResetFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLoadBalancingAlgorithm">ResetLoadBalancingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoCapacityDrain` <a name="PutAutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putAutoCapacityDrain"></a>

```go
func PutAutoCapacityDrain(value NetworkServicesServiceLbPoliciesAutoCapacityDrain)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putAutoCapacityDrain.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---

##### `PutFailoverConfig` <a name="PutFailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putFailoverConfig"></a>

```go
func PutFailoverConfig(value NetworkServicesServiceLbPoliciesFailoverConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putFailoverConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts"></a>

```go
func PutTimeouts(value NetworkServicesServiceLbPoliciesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

---

##### `ResetAutoCapacityDrain` <a name="ResetAutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetAutoCapacityDrain"></a>

```go
func ResetAutoCapacityDrain()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFailoverConfig` <a name="ResetFailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetFailoverConfig"></a>

```go
func ResetFailoverConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLoadBalancingAlgorithm` <a name="ResetLoadBalancingAlgorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLoadBalancingAlgorithm"></a>

```go
func ResetLoadBalancingAlgorithm()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesServiceLbPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/networkservicesservicelbpolicies"

networkservicesservicelbpolicies.NetworkServicesServiceLbPolicies_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/networkservicesservicelbpolicies"

networkservicesservicelbpolicies.NetworkServicesServiceLbPolicies_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/networkservicesservicelbpolicies"

networkservicesservicelbpolicies.NetworkServicesServiceLbPolicies_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/networkservicesservicelbpolicies"

networkservicesservicelbpolicies.NetworkServicesServiceLbPolicies_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkServicesServiceLbPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkServicesServiceLbPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkServicesServiceLbPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesServiceLbPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrain">AutoCapacityDrain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference">NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfig">FailoverConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference">NetworkServicesServiceLbPoliciesFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference">NetworkServicesServiceLbPoliciesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrainInput">AutoCapacityDrainInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfigInput">FailoverConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithmInput">LoadBalancingAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithm">LoadBalancingAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoCapacityDrain`<sup>Required</sup> <a name="AutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrain"></a>

```go
func AutoCapacityDrain() NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference">NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `FailoverConfig`<sup>Required</sup> <a name="FailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfig"></a>

```go
func FailoverConfig() NetworkServicesServiceLbPoliciesFailoverConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference">NetworkServicesServiceLbPoliciesFailoverConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeouts"></a>

```go
func Timeouts() NetworkServicesServiceLbPoliciesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference">NetworkServicesServiceLbPoliciesTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AutoCapacityDrainInput`<sup>Optional</sup> <a name="AutoCapacityDrainInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrainInput"></a>

```go
func AutoCapacityDrainInput() NetworkServicesServiceLbPoliciesAutoCapacityDrain
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FailoverConfigInput`<sup>Optional</sup> <a name="FailoverConfigInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfigInput"></a>

```go
func FailoverConfigInput() NetworkServicesServiceLbPoliciesFailoverConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LoadBalancingAlgorithmInput`<sup>Optional</sup> <a name="LoadBalancingAlgorithmInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithmInput"></a>

```go
func LoadBalancingAlgorithmInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LoadBalancingAlgorithm`<sup>Required</sup> <a name="LoadBalancingAlgorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithm"></a>

```go
func LoadBalancingAlgorithm() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesServiceLbPoliciesAutoCapacityDrain <a name="NetworkServicesServiceLbPoliciesAutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/networkservicesservicelbpolicies"

&networkservicesservicelbpolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain {
	Enable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain.property.enable">Enable</a></code> | <code>interface{}</code> | Optional. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Optional.

If set to 'True', an unhealthy MIG/NEG will be set as drained. - An MIG/NEG is considered unhealthy if less than 25% of the instances/endpoints in the MIG/NEG are healthy. - This option will never result in draining more than 50% of the configured IGs/NEGs for the Backend Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#enable NetworkServicesServiceLbPolicies#enable}

---

### NetworkServicesServiceLbPoliciesConfig <a name="NetworkServicesServiceLbPoliciesConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/networkservicesservicelbpolicies"

&networkservicesservicelbpolicies.NetworkServicesServiceLbPoliciesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	AutoCapacityDrain: github.com/cdktn-io/cdktn-provider-google-go/google/v22.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain,
	DeletionPolicy: *string,
	Description: *string,
	FailoverConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v22.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig,
	Id: *string,
	Labels: *map[string]*string,
	LoadBalancingAlgorithm: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.location">Location</a></code> | <code>*string</code> | The location of the service lb policy. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.name">Name</a></code> | <code>*string</code> | Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.autoCapacityDrain">AutoCapacityDrain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | auto_capacity_drain block. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.description">Description</a></code> | <code>*string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.failoverConfig">FailoverConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | failover_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#id NetworkServicesServiceLbPolicies#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the ServiceLbPolicy resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.loadBalancingAlgorithm">LoadBalancingAlgorithm</a></code> | <code>*string</code> | The type of load balancing algorithm to be used. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#project NetworkServicesServiceLbPolicies#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the service lb policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#location NetworkServicesServiceLbPolicies#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#name NetworkServicesServiceLbPolicies#name}

---

##### `AutoCapacityDrain`<sup>Optional</sup> <a name="AutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.autoCapacityDrain"></a>

```go
AutoCapacityDrain NetworkServicesServiceLbPoliciesAutoCapacityDrain
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

auto_capacity_drain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#auto_capacity_drain NetworkServicesServiceLbPolicies#auto_capacity_drain}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#deletion_policy NetworkServicesServiceLbPolicies#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#description NetworkServicesServiceLbPolicies#description}

---

##### `FailoverConfig`<sup>Optional</sup> <a name="FailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.failoverConfig"></a>

```go
FailoverConfig NetworkServicesServiceLbPoliciesFailoverConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

failover_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#failover_config NetworkServicesServiceLbPolicies#failover_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#id NetworkServicesServiceLbPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the ServiceLbPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#labels NetworkServicesServiceLbPolicies#labels}

---

##### `LoadBalancingAlgorithm`<sup>Optional</sup> <a name="LoadBalancingAlgorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.loadBalancingAlgorithm"></a>

```go
LoadBalancingAlgorithm *string
```

- *Type:* *string

The type of load balancing algorithm to be used.

The default behavior is WATERFALL_BY_REGION. Possible values: ["SPRAY_TO_REGION", "SPRAY_TO_WORLD", "WATERFALL_BY_REGION", "WATERFALL_BY_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#load_balancing_algorithm NetworkServicesServiceLbPolicies#load_balancing_algorithm}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#project NetworkServicesServiceLbPolicies#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.timeouts"></a>

```go
Timeouts NetworkServicesServiceLbPoliciesTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#timeouts NetworkServicesServiceLbPolicies#timeouts}

---

### NetworkServicesServiceLbPoliciesFailoverConfig <a name="NetworkServicesServiceLbPoliciesFailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/networkservicesservicelbpolicies"

&networkservicesservicelbpolicies.NetworkServicesServiceLbPoliciesFailoverConfig {
	FailoverHealthThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig.property.failoverHealthThreshold">FailoverHealthThreshold</a></code> | <code>*f64</code> | Optional. |

---

##### `FailoverHealthThreshold`<sup>Required</sup> <a name="FailoverHealthThreshold" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig.property.failoverHealthThreshold"></a>

```go
FailoverHealthThreshold *f64
```

- *Type:* *f64

Optional.

The percentage threshold that a load balancer will begin to send traffic to failover backends. If the percentage of endpoints in a MIG/NEG is smaller than this value, traffic would be sent to failover backends if possible. This field should be set to a value between 1 and 99. The default value is 50 for Global external HTTP(S) load balancer (classic) and Proxyless service mesh, and 70 for others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#failover_health_threshold NetworkServicesServiceLbPolicies#failover_health_threshold}

---

### NetworkServicesServiceLbPoliciesTimeouts <a name="NetworkServicesServiceLbPoliciesTimeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/networkservicesservicelbpolicies"

&networkservicesservicelbpolicies.NetworkServicesServiceLbPoliciesTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#create NetworkServicesServiceLbPolicies#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#delete NetworkServicesServiceLbPolicies#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#update NetworkServicesServiceLbPolicies#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#create NetworkServicesServiceLbPolicies#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#delete NetworkServicesServiceLbPolicies#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#update NetworkServicesServiceLbPolicies#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference <a name="NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/networkservicesservicelbpolicies"

networkservicesservicelbpolicies.NewNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resetEnable"></a>

```go
func ResetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesServiceLbPoliciesAutoCapacityDrain
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---


### NetworkServicesServiceLbPoliciesFailoverConfigOutputReference <a name="NetworkServicesServiceLbPoliciesFailoverConfigOutputReference" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/networkservicesservicelbpolicies"

networkservicesservicelbpolicies.NewNetworkServicesServiceLbPoliciesFailoverConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesServiceLbPoliciesFailoverConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThresholdInput">FailoverHealthThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThreshold">FailoverHealthThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailoverHealthThresholdInput`<sup>Optional</sup> <a name="FailoverHealthThresholdInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThresholdInput"></a>

```go
func FailoverHealthThresholdInput() *f64
```

- *Type:* *f64

---

##### `FailoverHealthThreshold`<sup>Required</sup> <a name="FailoverHealthThreshold" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThreshold"></a>

```go
func FailoverHealthThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesServiceLbPoliciesFailoverConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

---


### NetworkServicesServiceLbPoliciesTimeoutsOutputReference <a name="NetworkServicesServiceLbPoliciesTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/networkservicesservicelbpolicies"

networkservicesservicelbpolicies.NewNetworkServicesServiceLbPoliciesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesServiceLbPoliciesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



