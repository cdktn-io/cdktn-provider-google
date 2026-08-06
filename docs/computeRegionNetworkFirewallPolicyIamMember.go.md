# `computeRegionNetworkFirewallPolicyIamMember` Submodule <a name="`computeRegionNetworkFirewallPolicyIamMember` Submodule" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionNetworkFirewallPolicyIamMember <a name="ComputeRegionNetworkFirewallPolicyIamMember" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member google_compute_region_network_firewall_policy_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeregionnetworkfirewallpolicyiammember"

computeregionnetworkfirewallpolicyiammember.NewComputeRegionNetworkFirewallPolicyIamMember(scope Construct, id *string, config ComputeRegionNetworkFirewallPolicyIamMemberConfig) ComputeRegionNetworkFirewallPolicyIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig">ComputeRegionNetworkFirewallPolicyIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig">ComputeRegionNetworkFirewallPolicyIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.putCondition"></a>

```go
func PutCondition(value ComputeRegionNetworkFirewallPolicyIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberCondition">ComputeRegionNetworkFirewallPolicyIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRegionNetworkFirewallPolicyIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeregionnetworkfirewallpolicyiammember"

computeregionnetworkfirewallpolicyiammember.ComputeRegionNetworkFirewallPolicyIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeregionnetworkfirewallpolicyiammember"

computeregionnetworkfirewallpolicyiammember.ComputeRegionNetworkFirewallPolicyIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeregionnetworkfirewallpolicyiammember"

computeregionnetworkfirewallpolicyiammember.ComputeRegionNetworkFirewallPolicyIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeregionnetworkfirewallpolicyiammember"

computeregionnetworkfirewallpolicyiammember.ComputeRegionNetworkFirewallPolicyIamMember_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComputeRegionNetworkFirewallPolicyIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeRegionNetworkFirewallPolicyIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeRegionNetworkFirewallPolicyIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionNetworkFirewallPolicyIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference">ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberCondition">ComputeRegionNetworkFirewallPolicyIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.condition"></a>

```go
func Condition() ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference">ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.conditionInput"></a>

```go
func ConditionInput() ComputeRegionNetworkFirewallPolicyIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberCondition">ComputeRegionNetworkFirewallPolicyIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionNetworkFirewallPolicyIamMemberCondition <a name="ComputeRegionNetworkFirewallPolicyIamMemberCondition" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeregionnetworkfirewallpolicyiammember"

&computeregionnetworkfirewallpolicyiammember.ComputeRegionNetworkFirewallPolicyIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#expression ComputeRegionNetworkFirewallPolicyIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#title ComputeRegionNetworkFirewallPolicyIamMember#title}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#description ComputeRegionNetworkFirewallPolicyIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#expression ComputeRegionNetworkFirewallPolicyIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#title ComputeRegionNetworkFirewallPolicyIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#description ComputeRegionNetworkFirewallPolicyIamMember#description}.

---

### ComputeRegionNetworkFirewallPolicyIamMemberConfig <a name="ComputeRegionNetworkFirewallPolicyIamMemberConfig" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeregionnetworkfirewallpolicyiammember"

&computeregionnetworkfirewallpolicyiammember.ComputeRegionNetworkFirewallPolicyIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Member: *string,
	Name: *string,
	Role: *string,
	Condition: github.com/cdktn-io/cdktn-provider-google-go/google/v19.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberCondition,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#member ComputeRegionNetworkFirewallPolicyIamMember#member}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#name ComputeRegionNetworkFirewallPolicyIamMember#name}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#role ComputeRegionNetworkFirewallPolicyIamMember#role}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberCondition">ComputeRegionNetworkFirewallPolicyIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#id ComputeRegionNetworkFirewallPolicyIamMember#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#project ComputeRegionNetworkFirewallPolicyIamMember#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#region ComputeRegionNetworkFirewallPolicyIamMember#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#member ComputeRegionNetworkFirewallPolicyIamMember#member}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#name ComputeRegionNetworkFirewallPolicyIamMember#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#role ComputeRegionNetworkFirewallPolicyIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.condition"></a>

```go
Condition ComputeRegionNetworkFirewallPolicyIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberCondition">ComputeRegionNetworkFirewallPolicyIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#condition ComputeRegionNetworkFirewallPolicyIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#id ComputeRegionNetworkFirewallPolicyIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#project ComputeRegionNetworkFirewallPolicyIamMember#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_region_network_firewall_policy_iam_member#region ComputeRegionNetworkFirewallPolicyIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference <a name="ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeregionnetworkfirewallpolicyiammember"

computeregionnetworkfirewallpolicyiammember.NewComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberCondition">ComputeRegionNetworkFirewallPolicyIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionNetworkFirewallPolicyIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamMember.ComputeRegionNetworkFirewallPolicyIamMemberCondition">ComputeRegionNetworkFirewallPolicyIamMemberCondition</a>

---



