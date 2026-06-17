# `networkServicesMulticastDomainActivation` Submodule <a name="`networkServicesMulticastDomainActivation` Submodule" id="@cdktn/provider-google.networkServicesMulticastDomainActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastDomainActivation <a name="NetworkServicesMulticastDomainActivation" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation google_network_services_multicast_domain_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastdomainactivation"

networkservicesmulticastdomainactivation.NewNetworkServicesMulticastDomainActivation(scope Construct, id *string, config NetworkServicesMulticastDomainActivationConfig) NetworkServicesMulticastDomainActivation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig">NetworkServicesMulticastDomainActivationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig">NetworkServicesMulticastDomainActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTrafficSpec">PutTrafficSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDisablePlacementPolicy">ResetDisablePlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetTrafficSpec">ResetTrafficSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTimeouts"></a>

```go
func PutTimeouts(value NetworkServicesMulticastDomainActivationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a>

---

##### `PutTrafficSpec` <a name="PutTrafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTrafficSpec"></a>

```go
func PutTrafficSpec(value NetworkServicesMulticastDomainActivationTrafficSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTrafficSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisablePlacementPolicy` <a name="ResetDisablePlacementPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDisablePlacementPolicy"></a>

```go
func ResetDisablePlacementPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTrafficSpec` <a name="ResetTrafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetTrafficSpec"></a>

```go
func ResetTrafficSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastDomainActivation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastdomainactivation"

networkservicesmulticastdomainactivation.NetworkServicesMulticastDomainActivation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastdomainactivation"

networkservicesmulticastdomainactivation.NetworkServicesMulticastDomainActivation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastdomainactivation"

networkservicesmulticastdomainactivation.NetworkServicesMulticastDomainActivation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastdomainactivation"

networkservicesmulticastdomainactivation.NetworkServicesMulticastDomainActivation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkServicesMulticastDomainActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkServicesMulticastDomainActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkServicesMulticastDomainActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastDomainActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.adminNetwork">AdminNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.state">State</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList">NetworkServicesMulticastDomainActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference">NetworkServicesMulticastDomainActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.trafficSpec">TrafficSpec</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference">NetworkServicesMulticastDomainActivationTrafficSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.uniqueId">UniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.disablePlacementPolicyInput">DisablePlacementPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainActivationIdInput">MulticastDomainActivationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainInput">MulticastDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.trafficSpecInput">TrafficSpecInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.disablePlacementPolicy">DisablePlacementPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomain">MulticastDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainActivationId">MulticastDomainActivationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminNetwork`<sup>Required</sup> <a name="AdminNetwork" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.adminNetwork"></a>

```go
func AdminNetwork() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.state"></a>

```go
func State() NetworkServicesMulticastDomainActivationStateList
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList">NetworkServicesMulticastDomainActivationStateList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.timeouts"></a>

```go
func Timeouts() NetworkServicesMulticastDomainActivationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference">NetworkServicesMulticastDomainActivationTimeoutsOutputReference</a>

---

##### `TrafficSpec`<sup>Required</sup> <a name="TrafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.trafficSpec"></a>

```go
func TrafficSpec() NetworkServicesMulticastDomainActivationTrafficSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference">NetworkServicesMulticastDomainActivationTrafficSpecOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.uniqueId"></a>

```go
func UniqueId() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisablePlacementPolicyInput`<sup>Optional</sup> <a name="DisablePlacementPolicyInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.disablePlacementPolicyInput"></a>

```go
func DisablePlacementPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MulticastDomainActivationIdInput`<sup>Optional</sup> <a name="MulticastDomainActivationIdInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainActivationIdInput"></a>

```go
func MulticastDomainActivationIdInput() *string
```

- *Type:* *string

---

##### `MulticastDomainInput`<sup>Optional</sup> <a name="MulticastDomainInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainInput"></a>

```go
func MulticastDomainInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficSpecInput`<sup>Optional</sup> <a name="TrafficSpecInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.trafficSpecInput"></a>

```go
func TrafficSpecInput() NetworkServicesMulticastDomainActivationTrafficSpec
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisablePlacementPolicy`<sup>Required</sup> <a name="DisablePlacementPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.disablePlacementPolicy"></a>

```go
func DisablePlacementPolicy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MulticastDomain`<sup>Required</sup> <a name="MulticastDomain" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomain"></a>

```go
func MulticastDomain() *string
```

- *Type:* *string

---

##### `MulticastDomainActivationId`<sup>Required</sup> <a name="MulticastDomainActivationId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainActivationId"></a>

```go
func MulticastDomainActivationId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastDomainActivationConfig <a name="NetworkServicesMulticastDomainActivationConfig" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastdomainactivation"

&networkservicesmulticastdomainactivation.NetworkServicesMulticastDomainActivationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MulticastDomain: *string,
	MulticastDomainActivationId: *string,
	DeletionPolicy: *string,
	Description: *string,
	DisablePlacementPolicy: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts,
	TrafficSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.multicastDomain">MulticastDomain</a></code> | <code>*string</code> | The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.multicastDomainActivationId">MulticastDomainActivationId</a></code> | <code>*string</code> | A unique name for the multicast domain activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.description">Description</a></code> | <code>*string</code> | An optional text description of the multicast domain activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.disablePlacementPolicy">DisablePlacementPolicy</a></code> | <code>interface{}</code> | Option to allow disabling placement policy for multicast infrastructure. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#id NetworkServicesMulticastDomainActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#project NetworkServicesMulticastDomainActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.trafficSpec">TrafficSpec</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a></code> | traffic_spec block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#location NetworkServicesMulticastDomainActivation#location}

---

##### `MulticastDomain`<sup>Required</sup> <a name="MulticastDomain" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.multicastDomain"></a>

```go
MulticastDomain *string
```

- *Type:* *string

The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#multicast_domain NetworkServicesMulticastDomainActivation#multicast_domain}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `MulticastDomainActivationId`<sup>Required</sup> <a name="MulticastDomainActivationId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.multicastDomainActivationId"></a>

```go
MulticastDomainActivationId *string
```

- *Type:* *string

A unique name for the multicast domain activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#multicast_domain_activation_id NetworkServicesMulticastDomainActivation#multicast_domain_activation_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#deletion_policy NetworkServicesMulticastDomainActivation#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional text description of the multicast domain activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#description NetworkServicesMulticastDomainActivation#description}

---

##### `DisablePlacementPolicy`<sup>Optional</sup> <a name="DisablePlacementPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.disablePlacementPolicy"></a>

```go
DisablePlacementPolicy interface{}
```

- *Type:* interface{}

Option to allow disabling placement policy for multicast infrastructure.

Only applicable if the activation is for a domain associating with a
multicast domain group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#disable_placement_policy NetworkServicesMulticastDomainActivation#disable_placement_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#id NetworkServicesMulticastDomainActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#labels NetworkServicesMulticastDomainActivation#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#project NetworkServicesMulticastDomainActivation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.timeouts"></a>

```go
Timeouts NetworkServicesMulticastDomainActivationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#timeouts NetworkServicesMulticastDomainActivation#timeouts}

---

##### `TrafficSpec`<sup>Optional</sup> <a name="TrafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.trafficSpec"></a>

```go
TrafficSpec NetworkServicesMulticastDomainActivationTrafficSpec
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

traffic_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#traffic_spec NetworkServicesMulticastDomainActivation#traffic_spec}

---

### NetworkServicesMulticastDomainActivationState <a name="NetworkServicesMulticastDomainActivationState" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastdomainactivation"

&networkservicesmulticastdomainactivation.NetworkServicesMulticastDomainActivationState {

}
```


### NetworkServicesMulticastDomainActivationTimeouts <a name="NetworkServicesMulticastDomainActivationTimeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastdomainactivation"

&networkservicesmulticastdomainactivation.NetworkServicesMulticastDomainActivationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#create NetworkServicesMulticastDomainActivation#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#delete NetworkServicesMulticastDomainActivation#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#update NetworkServicesMulticastDomainActivation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#create NetworkServicesMulticastDomainActivation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#delete NetworkServicesMulticastDomainActivation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#update NetworkServicesMulticastDomainActivation#update}.

---

### NetworkServicesMulticastDomainActivationTrafficSpec <a name="NetworkServicesMulticastDomainActivationTrafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastdomainactivation"

&networkservicesmulticastdomainactivation.NetworkServicesMulticastDomainActivationTrafficSpec {
	AggrEgressPps: *string,
	AggrIngressPps: *string,
	AvgPacketSize: *f64,
	MaxPerGroupIngressPps: *string,
	MaxPerGroupSubscribers: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.aggrEgressPps">AggrEgressPps</a></code> | <code>*string</code> | Aggregated egress Packet-Per-Second for all multicast groups in the domain in this zone. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.aggrIngressPps">AggrIngressPps</a></code> | <code>*string</code> | Aggregated ingress Packet-Per-Second for all multicast groups in the domain in this zone. Default to (aggregated_egress_pps / max_per_group_subscribers) * 2. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.avgPacketSize">AvgPacketSize</a></code> | <code>*f64</code> | Average packet size (Default to 512 bytes). |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupIngressPps">MaxPerGroupIngressPps</a></code> | <code>*string</code> | Maximum ingress Packet-Per-Second for a single multicast group in this zone. Default to aggregated_ingress_pps / 2. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupSubscribers">MaxPerGroupSubscribers</a></code> | <code>*string</code> | Maximum number of subscribers for a single multicast group in this zone. Default to max(50, aggregated_egress_pps / aggregated_ingress_pps). |

---

##### `AggrEgressPps`<sup>Optional</sup> <a name="AggrEgressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.aggrEgressPps"></a>

```go
AggrEgressPps *string
```

- *Type:* *string

Aggregated egress Packet-Per-Second for all multicast groups in the domain in this zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#aggr_egress_pps NetworkServicesMulticastDomainActivation#aggr_egress_pps}

---

##### `AggrIngressPps`<sup>Optional</sup> <a name="AggrIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.aggrIngressPps"></a>

```go
AggrIngressPps *string
```

- *Type:* *string

Aggregated ingress Packet-Per-Second for all multicast groups in the domain in this zone. Default to (aggregated_egress_pps / max_per_group_subscribers) * 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#aggr_ingress_pps NetworkServicesMulticastDomainActivation#aggr_ingress_pps}

---

##### `AvgPacketSize`<sup>Optional</sup> <a name="AvgPacketSize" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.avgPacketSize"></a>

```go
AvgPacketSize *f64
```

- *Type:* *f64

Average packet size (Default to 512 bytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#avg_packet_size NetworkServicesMulticastDomainActivation#avg_packet_size}

---

##### `MaxPerGroupIngressPps`<sup>Optional</sup> <a name="MaxPerGroupIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupIngressPps"></a>

```go
MaxPerGroupIngressPps *string
```

- *Type:* *string

Maximum ingress Packet-Per-Second for a single multicast group in this zone. Default to aggregated_ingress_pps / 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#max_per_group_ingress_pps NetworkServicesMulticastDomainActivation#max_per_group_ingress_pps}

---

##### `MaxPerGroupSubscribers`<sup>Optional</sup> <a name="MaxPerGroupSubscribers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupSubscribers"></a>

```go
MaxPerGroupSubscribers *string
```

- *Type:* *string

Maximum number of subscribers for a single multicast group in this zone. Default to max(50, aggregated_egress_pps / aggregated_ingress_pps).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_domain_activation#max_per_group_subscribers NetworkServicesMulticastDomainActivation#max_per_group_subscribers}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastDomainActivationStateList <a name="NetworkServicesMulticastDomainActivationStateList" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastdomainactivation"

networkservicesmulticastdomainactivation.NewNetworkServicesMulticastDomainActivationStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesMulticastDomainActivationStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.get"></a>

```go
func Get(index *f64) NetworkServicesMulticastDomainActivationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkServicesMulticastDomainActivationStateOutputReference <a name="NetworkServicesMulticastDomainActivationStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastdomainactivation"

networkservicesmulticastdomainactivation.NewNetworkServicesMulticastDomainActivationStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesMulticastDomainActivationStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState">NetworkServicesMulticastDomainActivationState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesMulticastDomainActivationState
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState">NetworkServicesMulticastDomainActivationState</a>

---


### NetworkServicesMulticastDomainActivationTimeoutsOutputReference <a name="NetworkServicesMulticastDomainActivationTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastdomainactivation"

networkservicesmulticastdomainactivation.NewNetworkServicesMulticastDomainActivationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesMulticastDomainActivationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesMulticastDomainActivationTrafficSpecOutputReference <a name="NetworkServicesMulticastDomainActivationTrafficSpecOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastdomainactivation"

networkservicesmulticastdomainactivation.NewNetworkServicesMulticastDomainActivationTrafficSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesMulticastDomainActivationTrafficSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrEgressPps">ResetAggrEgressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrIngressPps">ResetAggrIngressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAvgPacketSize">ResetAvgPacketSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupIngressPps">ResetMaxPerGroupIngressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupSubscribers">ResetMaxPerGroupSubscribers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggrEgressPps` <a name="ResetAggrEgressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrEgressPps"></a>

```go
func ResetAggrEgressPps()
```

##### `ResetAggrIngressPps` <a name="ResetAggrIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrIngressPps"></a>

```go
func ResetAggrIngressPps()
```

##### `ResetAvgPacketSize` <a name="ResetAvgPacketSize" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAvgPacketSize"></a>

```go
func ResetAvgPacketSize()
```

##### `ResetMaxPerGroupIngressPps` <a name="ResetMaxPerGroupIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupIngressPps"></a>

```go
func ResetMaxPerGroupIngressPps()
```

##### `ResetMaxPerGroupSubscribers` <a name="ResetMaxPerGroupSubscribers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupSubscribers"></a>

```go
func ResetMaxPerGroupSubscribers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPpsInput">AggrEgressPpsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPpsInput">AggrIngressPpsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSizeInput">AvgPacketSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPpsInput">MaxPerGroupIngressPpsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribersInput">MaxPerGroupSubscribersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPps">AggrEgressPps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPps">AggrIngressPps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSize">AvgPacketSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPps">MaxPerGroupIngressPps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribers">MaxPerGroupSubscribers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggrEgressPpsInput`<sup>Optional</sup> <a name="AggrEgressPpsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPpsInput"></a>

```go
func AggrEgressPpsInput() *string
```

- *Type:* *string

---

##### `AggrIngressPpsInput`<sup>Optional</sup> <a name="AggrIngressPpsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPpsInput"></a>

```go
func AggrIngressPpsInput() *string
```

- *Type:* *string

---

##### `AvgPacketSizeInput`<sup>Optional</sup> <a name="AvgPacketSizeInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSizeInput"></a>

```go
func AvgPacketSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxPerGroupIngressPpsInput`<sup>Optional</sup> <a name="MaxPerGroupIngressPpsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPpsInput"></a>

```go
func MaxPerGroupIngressPpsInput() *string
```

- *Type:* *string

---

##### `MaxPerGroupSubscribersInput`<sup>Optional</sup> <a name="MaxPerGroupSubscribersInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribersInput"></a>

```go
func MaxPerGroupSubscribersInput() *string
```

- *Type:* *string

---

##### `AggrEgressPps`<sup>Required</sup> <a name="AggrEgressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPps"></a>

```go
func AggrEgressPps() *string
```

- *Type:* *string

---

##### `AggrIngressPps`<sup>Required</sup> <a name="AggrIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPps"></a>

```go
func AggrIngressPps() *string
```

- *Type:* *string

---

##### `AvgPacketSize`<sup>Required</sup> <a name="AvgPacketSize" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSize"></a>

```go
func AvgPacketSize() *f64
```

- *Type:* *f64

---

##### `MaxPerGroupIngressPps`<sup>Required</sup> <a name="MaxPerGroupIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPps"></a>

```go
func MaxPerGroupIngressPps() *string
```

- *Type:* *string

---

##### `MaxPerGroupSubscribers`<sup>Required</sup> <a name="MaxPerGroupSubscribers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribers"></a>

```go
func MaxPerGroupSubscribers() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesMulticastDomainActivationTrafficSpec
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

---



