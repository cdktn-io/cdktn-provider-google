# `computeInterconnectAttachment` Submodule <a name="`computeInterconnectAttachment` Submodule" id="@cdktn/provider-google.computeInterconnectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInterconnectAttachment <a name="ComputeInterconnectAttachment" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment google_compute_interconnect_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

computeinterconnectattachment.NewComputeInterconnectAttachment(scope Construct, id *string, config ComputeInterconnectAttachmentConfig) ComputeInterconnectAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig">ComputeInterconnectAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig">ComputeInterconnectAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putL2Forwarding">PutL2Forwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetAdminEnabled">ResetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetBandwidth">ResetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateCloudRouterIpAddress">ResetCandidateCloudRouterIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateCloudRouterIpv6Address">ResetCandidateCloudRouterIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateCustomerRouterIpAddress">ResetCandidateCustomerRouterIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateCustomerRouterIpv6Address">ResetCandidateCustomerRouterIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateSubnets">ResetCandidateSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetEdgeAvailabilityDomain">ResetEdgeAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetInterconnect">ResetInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetIpsecInternalAddresses">ResetIpsecInternalAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetL2Forwarding">ResetL2Forwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetRouter">ResetRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetStackType">ResetStackType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetSubnetLength">ResetSubnetLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetVlanTag8021Q">ResetVlanTag8021Q</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutL2Forwarding` <a name="PutL2Forwarding" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putL2Forwarding"></a>

```go
func PutL2Forwarding(value ComputeInterconnectAttachmentL2Forwarding)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putL2Forwarding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding">ComputeInterconnectAttachmentL2Forwarding</a>

---

##### `PutParams` <a name="PutParams" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putParams"></a>

```go
func PutParams(value ComputeInterconnectAttachmentParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams">ComputeInterconnectAttachmentParams</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putTimeouts"></a>

```go
func PutTimeouts(value ComputeInterconnectAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts">ComputeInterconnectAttachmentTimeouts</a>

---

##### `ResetAdminEnabled` <a name="ResetAdminEnabled" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetAdminEnabled"></a>

```go
func ResetAdminEnabled()
```

##### `ResetBandwidth` <a name="ResetBandwidth" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetBandwidth"></a>

```go
func ResetBandwidth()
```

##### `ResetCandidateCloudRouterIpAddress` <a name="ResetCandidateCloudRouterIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateCloudRouterIpAddress"></a>

```go
func ResetCandidateCloudRouterIpAddress()
```

##### `ResetCandidateCloudRouterIpv6Address` <a name="ResetCandidateCloudRouterIpv6Address" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateCloudRouterIpv6Address"></a>

```go
func ResetCandidateCloudRouterIpv6Address()
```

##### `ResetCandidateCustomerRouterIpAddress` <a name="ResetCandidateCustomerRouterIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateCustomerRouterIpAddress"></a>

```go
func ResetCandidateCustomerRouterIpAddress()
```

##### `ResetCandidateCustomerRouterIpv6Address` <a name="ResetCandidateCustomerRouterIpv6Address" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateCustomerRouterIpv6Address"></a>

```go
func ResetCandidateCustomerRouterIpv6Address()
```

##### `ResetCandidateSubnets` <a name="ResetCandidateSubnets" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateSubnets"></a>

```go
func ResetCandidateSubnets()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEdgeAvailabilityDomain` <a name="ResetEdgeAvailabilityDomain" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetEdgeAvailabilityDomain"></a>

```go
func ResetEdgeAvailabilityDomain()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetInterconnect` <a name="ResetInterconnect" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetInterconnect"></a>

```go
func ResetInterconnect()
```

##### `ResetIpsecInternalAddresses` <a name="ResetIpsecInternalAddresses" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetIpsecInternalAddresses"></a>

```go
func ResetIpsecInternalAddresses()
```

##### `ResetL2Forwarding` <a name="ResetL2Forwarding" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetL2Forwarding"></a>

```go
func ResetL2Forwarding()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetParams"></a>

```go
func ResetParams()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRouter` <a name="ResetRouter" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetRouter"></a>

```go
func ResetRouter()
```

##### `ResetStackType` <a name="ResetStackType" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetStackType"></a>

```go
func ResetStackType()
```

##### `ResetSubnetLength` <a name="ResetSubnetLength" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetSubnetLength"></a>

```go
func ResetSubnetLength()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetType"></a>

```go
func ResetType()
```

##### `ResetVlanTag8021Q` <a name="ResetVlanTag8021Q" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetVlanTag8021Q"></a>

```go
func ResetVlanTag8021Q()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeInterconnectAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

computeinterconnectattachment.ComputeInterconnectAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

computeinterconnectattachment.ComputeInterconnectAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

computeinterconnectattachment.ComputeInterconnectAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

computeinterconnectattachment.ComputeInterconnectAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComputeInterconnectAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeInterconnectAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeInterconnectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComputeInterconnectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.attachmentGroup">AttachmentGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.cloudRouterIpAddress">CloudRouterIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.cloudRouterIpv6Address">CloudRouterIpv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.customerRouterIpAddress">CustomerRouterIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.customerRouterIpv6Address">CustomerRouterIpv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.googleReferenceId">GoogleReferenceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.l2Forwarding">L2Forwarding</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference">ComputeInterconnectAttachmentL2ForwardingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.labelFingerprint">LabelFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.pairingKey">PairingKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference">ComputeInterconnectAttachmentParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.partnerAsn">PartnerAsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.privateInterconnectInfo">PrivateInterconnectInfo</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList">ComputeInterconnectAttachmentPrivateInterconnectInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference">ComputeInterconnectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.adminEnabledInput">AdminEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.bandwidthInput">BandwidthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCloudRouterIpAddressInput">CandidateCloudRouterIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCloudRouterIpv6AddressInput">CandidateCloudRouterIpv6AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCustomerRouterIpAddressInput">CandidateCustomerRouterIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCustomerRouterIpv6AddressInput">CandidateCustomerRouterIpv6AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateSubnetsInput">CandidateSubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.edgeAvailabilityDomainInput">EdgeAvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.encryptionInput">EncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.interconnectInput">InterconnectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.ipsecInternalAddressesInput">IpsecInternalAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.l2ForwardingInput">L2ForwardingInput</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding">ComputeInterconnectAttachmentL2Forwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.mtuInput">MtuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams">ComputeInterconnectAttachmentParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.routerInput">RouterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.stackTypeInput">StackTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.subnetLengthInput">SubnetLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.vlanTag8021QInput">VlanTag8021QInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.adminEnabled">AdminEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.bandwidth">Bandwidth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCloudRouterIpAddress">CandidateCloudRouterIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCloudRouterIpv6Address">CandidateCloudRouterIpv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCustomerRouterIpAddress">CandidateCustomerRouterIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCustomerRouterIpv6Address">CandidateCustomerRouterIpv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateSubnets">CandidateSubnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.edgeAvailabilityDomain">EdgeAvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.encryption">Encryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.interconnect">Interconnect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.ipsecInternalAddresses">IpsecInternalAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.mtu">Mtu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.router">Router</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.stackType">StackType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.subnetLength">SubnetLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.vlanTag8021Q">VlanTag8021Q</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentGroup`<sup>Required</sup> <a name="AttachmentGroup" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.attachmentGroup"></a>

```go
func AttachmentGroup() *string
```

- *Type:* *string

---

##### `CloudRouterIpAddress`<sup>Required</sup> <a name="CloudRouterIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.cloudRouterIpAddress"></a>

```go
func CloudRouterIpAddress() *string
```

- *Type:* *string

---

##### `CloudRouterIpv6Address`<sup>Required</sup> <a name="CloudRouterIpv6Address" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.cloudRouterIpv6Address"></a>

```go
func CloudRouterIpv6Address() *string
```

- *Type:* *string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `CustomerRouterIpAddress`<sup>Required</sup> <a name="CustomerRouterIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.customerRouterIpAddress"></a>

```go
func CustomerRouterIpAddress() *string
```

- *Type:* *string

---

##### `CustomerRouterIpv6Address`<sup>Required</sup> <a name="CustomerRouterIpv6Address" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.customerRouterIpv6Address"></a>

```go
func CustomerRouterIpv6Address() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `GoogleReferenceId`<sup>Required</sup> <a name="GoogleReferenceId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.googleReferenceId"></a>

```go
func GoogleReferenceId() *string
```

- *Type:* *string

---

##### `L2Forwarding`<sup>Required</sup> <a name="L2Forwarding" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.l2Forwarding"></a>

```go
func L2Forwarding() ComputeInterconnectAttachmentL2ForwardingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference">ComputeInterconnectAttachmentL2ForwardingOutputReference</a>

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.labelFingerprint"></a>

```go
func LabelFingerprint() *string
```

- *Type:* *string

---

##### `PairingKey`<sup>Required</sup> <a name="PairingKey" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.pairingKey"></a>

```go
func PairingKey() *string
```

- *Type:* *string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.params"></a>

```go
func Params() ComputeInterconnectAttachmentParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference">ComputeInterconnectAttachmentParamsOutputReference</a>

---

##### `PartnerAsn`<sup>Required</sup> <a name="PartnerAsn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.partnerAsn"></a>

```go
func PartnerAsn() *string
```

- *Type:* *string

---

##### `PrivateInterconnectInfo`<sup>Required</sup> <a name="PrivateInterconnectInfo" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.privateInterconnectInfo"></a>

```go
func PrivateInterconnectInfo() ComputeInterconnectAttachmentPrivateInterconnectInfoList
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList">ComputeInterconnectAttachmentPrivateInterconnectInfoList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.timeouts"></a>

```go
func Timeouts() ComputeInterconnectAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference">ComputeInterconnectAttachmentTimeoutsOutputReference</a>

---

##### `AdminEnabledInput`<sup>Optional</sup> <a name="AdminEnabledInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.adminEnabledInput"></a>

```go
func AdminEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.bandwidthInput"></a>

```go
func BandwidthInput() *string
```

- *Type:* *string

---

##### `CandidateCloudRouterIpAddressInput`<sup>Optional</sup> <a name="CandidateCloudRouterIpAddressInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCloudRouterIpAddressInput"></a>

```go
func CandidateCloudRouterIpAddressInput() *string
```

- *Type:* *string

---

##### `CandidateCloudRouterIpv6AddressInput`<sup>Optional</sup> <a name="CandidateCloudRouterIpv6AddressInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCloudRouterIpv6AddressInput"></a>

```go
func CandidateCloudRouterIpv6AddressInput() *string
```

- *Type:* *string

---

##### `CandidateCustomerRouterIpAddressInput`<sup>Optional</sup> <a name="CandidateCustomerRouterIpAddressInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCustomerRouterIpAddressInput"></a>

```go
func CandidateCustomerRouterIpAddressInput() *string
```

- *Type:* *string

---

##### `CandidateCustomerRouterIpv6AddressInput`<sup>Optional</sup> <a name="CandidateCustomerRouterIpv6AddressInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCustomerRouterIpv6AddressInput"></a>

```go
func CandidateCustomerRouterIpv6AddressInput() *string
```

- *Type:* *string

---

##### `CandidateSubnetsInput`<sup>Optional</sup> <a name="CandidateSubnetsInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateSubnetsInput"></a>

```go
func CandidateSubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EdgeAvailabilityDomainInput`<sup>Optional</sup> <a name="EdgeAvailabilityDomainInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.edgeAvailabilityDomainInput"></a>

```go
func EdgeAvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.encryptionInput"></a>

```go
func EncryptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterconnectInput`<sup>Optional</sup> <a name="InterconnectInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.interconnectInput"></a>

```go
func InterconnectInput() *string
```

- *Type:* *string

---

##### `IpsecInternalAddressesInput`<sup>Optional</sup> <a name="IpsecInternalAddressesInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.ipsecInternalAddressesInput"></a>

```go
func IpsecInternalAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `L2ForwardingInput`<sup>Optional</sup> <a name="L2ForwardingInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.l2ForwardingInput"></a>

```go
func L2ForwardingInput() ComputeInterconnectAttachmentL2Forwarding
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding">ComputeInterconnectAttachmentL2Forwarding</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.mtuInput"></a>

```go
func MtuInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.paramsInput"></a>

```go
func ParamsInput() ComputeInterconnectAttachmentParams
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams">ComputeInterconnectAttachmentParams</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.routerInput"></a>

```go
func RouterInput() *string
```

- *Type:* *string

---

##### `StackTypeInput`<sup>Optional</sup> <a name="StackTypeInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.stackTypeInput"></a>

```go
func StackTypeInput() *string
```

- *Type:* *string

---

##### `SubnetLengthInput`<sup>Optional</sup> <a name="SubnetLengthInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.subnetLengthInput"></a>

```go
func SubnetLengthInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VlanTag8021QInput`<sup>Optional</sup> <a name="VlanTag8021QInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.vlanTag8021QInput"></a>

```go
func VlanTag8021QInput() *f64
```

- *Type:* *f64

---

##### `AdminEnabled`<sup>Required</sup> <a name="AdminEnabled" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.adminEnabled"></a>

```go
func AdminEnabled() interface{}
```

- *Type:* interface{}

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.bandwidth"></a>

```go
func Bandwidth() *string
```

- *Type:* *string

---

##### `CandidateCloudRouterIpAddress`<sup>Required</sup> <a name="CandidateCloudRouterIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCloudRouterIpAddress"></a>

```go
func CandidateCloudRouterIpAddress() *string
```

- *Type:* *string

---

##### `CandidateCloudRouterIpv6Address`<sup>Required</sup> <a name="CandidateCloudRouterIpv6Address" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCloudRouterIpv6Address"></a>

```go
func CandidateCloudRouterIpv6Address() *string
```

- *Type:* *string

---

##### `CandidateCustomerRouterIpAddress`<sup>Required</sup> <a name="CandidateCustomerRouterIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCustomerRouterIpAddress"></a>

```go
func CandidateCustomerRouterIpAddress() *string
```

- *Type:* *string

---

##### `CandidateCustomerRouterIpv6Address`<sup>Required</sup> <a name="CandidateCustomerRouterIpv6Address" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCustomerRouterIpv6Address"></a>

```go
func CandidateCustomerRouterIpv6Address() *string
```

- *Type:* *string

---

##### `CandidateSubnets`<sup>Required</sup> <a name="CandidateSubnets" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateSubnets"></a>

```go
func CandidateSubnets() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EdgeAvailabilityDomain`<sup>Required</sup> <a name="EdgeAvailabilityDomain" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.edgeAvailabilityDomain"></a>

```go
func EdgeAvailabilityDomain() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.encryption"></a>

```go
func Encryption() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Interconnect`<sup>Required</sup> <a name="Interconnect" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.interconnect"></a>

```go
func Interconnect() *string
```

- *Type:* *string

---

##### `IpsecInternalAddresses`<sup>Required</sup> <a name="IpsecInternalAddresses" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.ipsecInternalAddresses"></a>

```go
func IpsecInternalAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.mtu"></a>

```go
func Mtu() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.router"></a>

```go
func Router() *string
```

- *Type:* *string

---

##### `StackType`<sup>Required</sup> <a name="StackType" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.stackType"></a>

```go
func StackType() *string
```

- *Type:* *string

---

##### `SubnetLength`<sup>Required</sup> <a name="SubnetLength" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.subnetLength"></a>

```go
func SubnetLength() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VlanTag8021Q`<sup>Required</sup> <a name="VlanTag8021Q" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.vlanTag8021Q"></a>

```go
func VlanTag8021Q() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInterconnectAttachmentConfig <a name="ComputeInterconnectAttachmentConfig" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

&computeinterconnectattachment.ComputeInterconnectAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AdminEnabled: interface{},
	Bandwidth: *string,
	CandidateCloudRouterIpAddress: *string,
	CandidateCloudRouterIpv6Address: *string,
	CandidateCustomerRouterIpAddress: *string,
	CandidateCustomerRouterIpv6Address: *string,
	CandidateSubnets: *[]*string,
	DeletionPolicy: *string,
	Description: *string,
	EdgeAvailabilityDomain: *string,
	Encryption: *string,
	Id: *string,
	Interconnect: *string,
	IpsecInternalAddresses: *[]*string,
	L2Forwarding: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding,
	Labels: *map[string]*string,
	Mtu: *string,
	Params: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeInterconnectAttachment.ComputeInterconnectAttachmentParams,
	Project: *string,
	Region: *string,
	Router: *string,
	StackType: *string,
	SubnetLength: *f64,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts,
	Type: *string,
	VlanTag8021Q: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.adminEnabled">AdminEnabled</a></code> | <code>interface{}</code> | Whether the VLAN attachment is enabled or disabled.  When using PARTNER type this will Pre-Activate the interconnect attachment. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.bandwidth">Bandwidth</a></code> | <code>*string</code> | Provisioned bandwidth capacity for the interconnect attachment. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateCloudRouterIpAddress">CandidateCloudRouterIpAddress</a></code> | <code>*string</code> | Single IPv4 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 203.0.113.1/29. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateCloudRouterIpv6Address">CandidateCloudRouterIpv6Address</a></code> | <code>*string</code> | Single IPv6 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 2001:db8::1/125. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateCustomerRouterIpAddress">CandidateCustomerRouterIpAddress</a></code> | <code>*string</code> | Single IPv4 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 203.0.113.2/29. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateCustomerRouterIpv6Address">CandidateCustomerRouterIpv6Address</a></code> | <code>*string</code> | Single IPv6 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 2001:db8::2/125. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateSubnets">CandidateSubnets</a></code> | <code>*[]*string</code> | Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.edgeAvailabilityDomain">EdgeAvailabilityDomain</a></code> | <code>*string</code> | Desired availability domain for the attachment. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.encryption">Encryption</a></code> | <code>*string</code> | Indicates the user-supplied encryption option of this interconnect attachment. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#id ComputeInterconnectAttachment#id}. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.interconnect">Interconnect</a></code> | <code>*string</code> | URL of the underlying Interconnect object that this attachment's traffic will traverse through. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.ipsecInternalAddresses">IpsecInternalAddresses</a></code> | <code>*[]*string</code> | URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has the encryption option as IPSEC. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.l2Forwarding">L2Forwarding</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding">ComputeInterconnectAttachmentL2Forwarding</a></code> | l2_forwarding block. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels for this resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.mtu">Mtu</a></code> | <code>*string</code> | Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams">ComputeInterconnectAttachmentParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#project ComputeInterconnectAttachment#project}. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.region">Region</a></code> | <code>*string</code> | Region where the regional interconnect attachment resides. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.router">Router</a></code> | <code>*string</code> | URL of the cloud router to be used for dynamic routing. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.stackType">StackType</a></code> | <code>*string</code> | The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.subnetLength">SubnetLength</a></code> | <code>*f64</code> | Length of the IPv4 subnet mask. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts">ComputeInterconnectAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.type">Type</a></code> | <code>*string</code> | The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER", "L2_DEDICATED"]. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.vlanTag8021Q">VlanTag8021Q</a></code> | <code>*f64</code> | The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed upstream. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character must be a
lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#name ComputeInterconnectAttachment#name}

---

##### `AdminEnabled`<sup>Optional</sup> <a name="AdminEnabled" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.adminEnabled"></a>

```go
AdminEnabled interface{}
```

- *Type:* interface{}

Whether the VLAN attachment is enabled or disabled.  When using PARTNER type this will Pre-Activate the interconnect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#admin_enabled ComputeInterconnectAttachment#admin_enabled}

---

##### `Bandwidth`<sup>Optional</sup> <a name="Bandwidth" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.bandwidth"></a>

```go
Bandwidth *string
```

- *Type:* *string

Provisioned bandwidth capacity for the interconnect attachment.

For attachments of type DEDICATED, the user can set the bandwidth.
For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.
Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
Defaults to BPS_10G Possible values: ["BPS_50M", "BPS_100M", "BPS_200M", "BPS_300M", "BPS_400M", "BPS_500M", "BPS_1G", "BPS_2G", "BPS_5G", "BPS_10G", "BPS_20G", "BPS_50G", "BPS_100G", "BPS_400G"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#bandwidth ComputeInterconnectAttachment#bandwidth}

---

##### `CandidateCloudRouterIpAddress`<sup>Optional</sup> <a name="CandidateCloudRouterIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateCloudRouterIpAddress"></a>

```go
CandidateCloudRouterIpAddress *string
```

- *Type:* *string

Single IPv4 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 203.0.113.1/29.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#candidate_cloud_router_ip_address ComputeInterconnectAttachment#candidate_cloud_router_ip_address}

---

##### `CandidateCloudRouterIpv6Address`<sup>Optional</sup> <a name="CandidateCloudRouterIpv6Address" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateCloudRouterIpv6Address"></a>

```go
CandidateCloudRouterIpv6Address *string
```

- *Type:* *string

Single IPv6 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 2001:db8::1/125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#candidate_cloud_router_ipv6_address ComputeInterconnectAttachment#candidate_cloud_router_ipv6_address}

---

##### `CandidateCustomerRouterIpAddress`<sup>Optional</sup> <a name="CandidateCustomerRouterIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateCustomerRouterIpAddress"></a>

```go
CandidateCustomerRouterIpAddress *string
```

- *Type:* *string

Single IPv4 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 203.0.113.2/29.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#candidate_customer_router_ip_address ComputeInterconnectAttachment#candidate_customer_router_ip_address}

---

##### `CandidateCustomerRouterIpv6Address`<sup>Optional</sup> <a name="CandidateCustomerRouterIpv6Address" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateCustomerRouterIpv6Address"></a>

```go
CandidateCustomerRouterIpv6Address *string
```

- *Type:* *string

Single IPv6 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 2001:db8::2/125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#candidate_customer_router_ipv6_address ComputeInterconnectAttachment#candidate_customer_router_ipv6_address}

---

##### `CandidateSubnets`<sup>Optional</sup> <a name="CandidateSubnets" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateSubnets"></a>

```go
CandidateSubnets *[]*string
```

- *Type:* *[]*string

Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment.

All prefixes must be within link-local address space (169.254.0.0/16)
and must be /29 or shorter (/28, /27, etc). Google will attempt to select
an unused /29 from the supplied candidate prefix(es). The request will
fail if all possible /29s are in use on Google's edge. If not supplied,
Google will randomly select an unused /29 from all of link-local space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#candidate_subnets ComputeInterconnectAttachment#candidate_subnets}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#deletion_policy ComputeInterconnectAttachment#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#description ComputeInterconnectAttachment#description}

---

##### `EdgeAvailabilityDomain`<sup>Optional</sup> <a name="EdgeAvailabilityDomain" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.edgeAvailabilityDomain"></a>

```go
EdgeAvailabilityDomain *string
```

- *Type:* *string

Desired availability domain for the attachment.

Only available for type
PARTNER, at creation time. For improved reliability, customers should
configure a pair of attachments with one per availability domain. The
selected availability domain will be provided to the Partner via the
pairing key so that the provisioned circuit will lie in the specified
domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#edge_availability_domain ComputeInterconnectAttachment#edge_availability_domain}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.encryption"></a>

```go
Encryption *string
```

- *Type:* *string

Indicates the user-supplied encryption option of this interconnect attachment.

Can only be specified at attachment creation for PARTNER or
DEDICATED attachments.

* NONE - This is the default value, which means that the VLAN attachment
  carries unencrypted traffic. VMs are able to send traffic to, or receive
  traffic from, such a VLAN attachment.
* IPSEC - The VLAN attachment carries only encrypted traffic that is
  encrypted by an IPsec device, such as an HA VPN gateway or third-party
  IPsec VPN. VMs cannot directly send traffic to, or receive traffic from,
  such a VLAN attachment. To use HA VPN over Cloud Interconnect, the VLAN
  attachment must be created with this option. Default value: "NONE" Possible values: ["NONE", "IPSEC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#encryption ComputeInterconnectAttachment#encryption}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#id ComputeInterconnectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interconnect`<sup>Optional</sup> <a name="Interconnect" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.interconnect"></a>

```go
Interconnect *string
```

- *Type:* *string

URL of the underlying Interconnect object that this attachment's traffic will traverse through.

Required if type is DEDICATED, must not
be set if type is PARTNER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#interconnect ComputeInterconnectAttachment#interconnect}

---

##### `IpsecInternalAddresses`<sup>Optional</sup> <a name="IpsecInternalAddresses" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.ipsecInternalAddresses"></a>

```go
IpsecInternalAddresses *[]*string
```

- *Type:* *[]*string

URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has the encryption option as IPSEC.

The addresses must be RFC 1918 IP address ranges. When creating HA VPN
gateway over the interconnect attachment, if the attachment is configured
to use an RFC 1918 IP address, then the VPN gateway's IP address will be
allocated from the IP address range specified here.
For example, if the HA VPN gateway's interface 0 is paired to this
interconnect attachment, then an RFC 1918 IP address for the VPN gateway
interface 0 will be allocated from the IP address specified for this
interconnect attachment.
If this field is not specified for interconnect attachment that has
encryption option as IPSEC, later on when creating HA VPN gateway on this
interconnect attachment, the HA VPN gateway's IP address will be
allocated from regional external IP address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#ipsec_internal_addresses ComputeInterconnectAttachment#ipsec_internal_addresses}

---

##### `L2Forwarding`<sup>Optional</sup> <a name="L2Forwarding" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.l2Forwarding"></a>

```go
L2Forwarding ComputeInterconnectAttachmentL2Forwarding
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding">ComputeInterconnectAttachmentL2Forwarding</a>

l2_forwarding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#l2_forwarding ComputeInterconnectAttachment#l2_forwarding}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels for this resource.

These can only be added or modified by the setLabels
method. Each label key/value pair must comply with RFC1035. Label values may be empty.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#labels ComputeInterconnectAttachment#labels}

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.mtu"></a>

```go
Mtu *string
```

- *Type:* *string

Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment.

Valid values are 1440, 1460, 1500, and 8896. If not specified, the value will default to 1440.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#mtu ComputeInterconnectAttachment#mtu}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.params"></a>

```go
Params ComputeInterconnectAttachmentParams
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams">ComputeInterconnectAttachmentParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#params ComputeInterconnectAttachment#params}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#project ComputeInterconnectAttachment#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where the regional interconnect attachment resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#region ComputeInterconnectAttachment#region}

---

##### `Router`<sup>Optional</sup> <a name="Router" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.router"></a>

```go
Router *string
```

- *Type:* *string

URL of the cloud router to be used for dynamic routing.

This router must be in
the same region as this InterconnectAttachment. The InterconnectAttachment will
automatically connect the Interconnect to the network & region within which the
Cloud Router is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#router ComputeInterconnectAttachment#router}

---

##### `StackType`<sup>Optional</sup> <a name="StackType" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.stackType"></a>

```go
StackType *string
```

- *Type:* *string

The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.
This field can be both set at interconnect attachments creation and update
interconnect attachment operations. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#stack_type ComputeInterconnectAttachment#stack_type}

---

##### `SubnetLength`<sup>Optional</sup> <a name="SubnetLength" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.subnetLength"></a>

```go
SubnetLength *f64
```

- *Type:* *f64

Length of the IPv4 subnet mask.

Allowed values: 29 (default), 30. The default value is 29,
except for Cross-Cloud Interconnect connections that use an InterconnectRemoteLocation with a
constraints.subnetLengthRange.min equal to 30. For example, connections that use an Azure
remote location fall into this category. In these cases, the default value is 30, and
requesting 29 returns an error. Where both 29 and 30 are allowed, 29 is preferred, because it
gives Google Cloud Support more debugging visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#subnet_length ComputeInterconnectAttachment#subnet_length}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.timeouts"></a>

```go
Timeouts ComputeInterconnectAttachmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts">ComputeInterconnectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#timeouts ComputeInterconnectAttachment#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER", "L2_DEDICATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#type ComputeInterconnectAttachment#type}

---

##### `VlanTag8021Q`<sup>Optional</sup> <a name="VlanTag8021Q" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.vlanTag8021Q"></a>

```go
VlanTag8021Q *f64
```

- *Type:* *f64

The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#vlan_tag8021q ComputeInterconnectAttachment#vlan_tag8021q}

---

### ComputeInterconnectAttachmentL2Forwarding <a name="ComputeInterconnectAttachmentL2Forwarding" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

&computeinterconnectattachment.ComputeInterconnectAttachmentL2Forwarding {
	ApplianceMappings: interface{},
	DefaultApplianceIpAddress: *string,
	GeneveHeader: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader,
	Network: *string,
	TunnelEndpointIpAddress: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.applianceMappings">ApplianceMappings</a></code> | <code>interface{}</code> | appliance_mappings block. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.defaultApplianceIpAddress">DefaultApplianceIpAddress</a></code> | <code>*string</code> | The default appliance IP address. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.geneveHeader">GeneveHeader</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader">ComputeInterconnectAttachmentL2ForwardingGeneveHeader</a></code> | geneve_header block. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.network">Network</a></code> | <code>*string</code> | URL of the network to which this attachment belongs. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.tunnelEndpointIpAddress">TunnelEndpointIpAddress</a></code> | <code>*string</code> | The tunnel endpoint IP address. |

---

##### `ApplianceMappings`<sup>Optional</sup> <a name="ApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.applianceMappings"></a>

```go
ApplianceMappings interface{}
```

- *Type:* interface{}

appliance_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#appliance_mappings ComputeInterconnectAttachment#appliance_mappings}

---

##### `DefaultApplianceIpAddress`<sup>Optional</sup> <a name="DefaultApplianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.defaultApplianceIpAddress"></a>

```go
DefaultApplianceIpAddress *string
```

- *Type:* *string

The default appliance IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#default_appliance_ip_address ComputeInterconnectAttachment#default_appliance_ip_address}

---

##### `GeneveHeader`<sup>Optional</sup> <a name="GeneveHeader" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.geneveHeader"></a>

```go
GeneveHeader ComputeInterconnectAttachmentL2ForwardingGeneveHeader
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader">ComputeInterconnectAttachmentL2ForwardingGeneveHeader</a>

geneve_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#geneve_header ComputeInterconnectAttachment#geneve_header}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.network"></a>

```go
Network *string
```

- *Type:* *string

URL of the network to which this attachment belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#network ComputeInterconnectAttachment#network}

---

##### `TunnelEndpointIpAddress`<sup>Optional</sup> <a name="TunnelEndpointIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.tunnelEndpointIpAddress"></a>

```go
TunnelEndpointIpAddress *string
```

- *Type:* *string

The tunnel endpoint IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#tunnel_endpoint_ip_address ComputeInterconnectAttachment#tunnel_endpoint_ip_address}

---

### ComputeInterconnectAttachmentL2ForwardingApplianceMappings <a name="ComputeInterconnectAttachmentL2ForwardingApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

&computeinterconnectattachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings {
	ApplianceIpAddress: *string,
	InnerVlanToApplianceMappings: interface{},
	Name: *string,
	VlanId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.applianceIpAddress">ApplianceIpAddress</a></code> | <code>*string</code> | The appliance IP address. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.innerVlanToApplianceMappings">InnerVlanToApplianceMappings</a></code> | <code>interface{}</code> | inner_vlan_to_appliance_mappings block. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.name">Name</a></code> | <code>*string</code> | The name of this appliance mapping rule. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.vlanId">VlanId</a></code> | <code>*string</code> | The VLAN tag. |

---

##### `ApplianceIpAddress`<sup>Optional</sup> <a name="ApplianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.applianceIpAddress"></a>

```go
ApplianceIpAddress *string
```

- *Type:* *string

The appliance IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#appliance_ip_address ComputeInterconnectAttachment#appliance_ip_address}

---

##### `InnerVlanToApplianceMappings`<sup>Optional</sup> <a name="InnerVlanToApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.innerVlanToApplianceMappings"></a>

```go
InnerVlanToApplianceMappings interface{}
```

- *Type:* interface{}

inner_vlan_to_appliance_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#inner_vlan_to_appliance_mappings ComputeInterconnectAttachment#inner_vlan_to_appliance_mappings}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of this appliance mapping rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#name ComputeInterconnectAttachment#name}

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.vlanId"></a>

```go
VlanId *string
```

- *Type:* *string

The VLAN tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#vlan_id ComputeInterconnectAttachment#vlan_id}

---

### ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings <a name="ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

&computeinterconnectattachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings {
	InnerApplianceIpAddress: *string,
	InnerVlanTags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.property.innerApplianceIpAddress">InnerApplianceIpAddress</a></code> | <code>*string</code> | The inner appliance IP address. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.property.innerVlanTags">InnerVlanTags</a></code> | <code>*[]*string</code> | List of inner VLAN tags. |

---

##### `InnerApplianceIpAddress`<sup>Optional</sup> <a name="InnerApplianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.property.innerApplianceIpAddress"></a>

```go
InnerApplianceIpAddress *string
```

- *Type:* *string

The inner appliance IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#inner_appliance_ip_address ComputeInterconnectAttachment#inner_appliance_ip_address}

---

##### `InnerVlanTags`<sup>Optional</sup> <a name="InnerVlanTags" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.property.innerVlanTags"></a>

```go
InnerVlanTags *[]*string
```

- *Type:* *[]*string

List of inner VLAN tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#inner_vlan_tags ComputeInterconnectAttachment#inner_vlan_tags}

---

### ComputeInterconnectAttachmentL2ForwardingGeneveHeader <a name="ComputeInterconnectAttachmentL2ForwardingGeneveHeader" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

&computeinterconnectattachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader {
	Vni: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader.property.vni">Vni</a></code> | <code>*f64</code> | VNI is a 24-bit unique virtual network identifier. |

---

##### `Vni`<sup>Optional</sup> <a name="Vni" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader.property.vni"></a>

```go
Vni *f64
```

- *Type:* *f64

VNI is a 24-bit unique virtual network identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#vni ComputeInterconnectAttachment#vni}

---

### ComputeInterconnectAttachmentParams <a name="ComputeInterconnectAttachmentParams" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

&computeinterconnectattachment.ComputeInterconnectAttachmentParams {
	ResourceManagerTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | Resource manager tags to be bound to the interconnect attachment. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams.property.resourceManagerTags"></a>

```go
ResourceManagerTags *map[string]*string
```

- *Type:* *map[string]*string

Resource manager tags to be bound to the interconnect attachment.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#resource_manager_tags ComputeInterconnectAttachment#resource_manager_tags}

---

### ComputeInterconnectAttachmentPrivateInterconnectInfo <a name="ComputeInterconnectAttachmentPrivateInterconnectInfo" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

&computeinterconnectattachment.ComputeInterconnectAttachmentPrivateInterconnectInfo {

}
```


### ComputeInterconnectAttachmentTimeouts <a name="ComputeInterconnectAttachmentTimeouts" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

&computeinterconnectattachment.ComputeInterconnectAttachmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#create ComputeInterconnectAttachment#create}. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#delete ComputeInterconnectAttachment#delete}. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#update ComputeInterconnectAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#create ComputeInterconnectAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#delete ComputeInterconnectAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_interconnect_attachment#update ComputeInterconnectAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList <a name="ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

computeinterconnectattachment.NewComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.get"></a>

```go
func Get(index *f64) ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference <a name="ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

computeinterconnectattachment.NewComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resetInnerApplianceIpAddress">ResetInnerApplianceIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resetInnerVlanTags">ResetInnerVlanTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInnerApplianceIpAddress` <a name="ResetInnerApplianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resetInnerApplianceIpAddress"></a>

```go
func ResetInnerApplianceIpAddress()
```

##### `ResetInnerVlanTags` <a name="ResetInnerVlanTags" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resetInnerVlanTags"></a>

```go
func ResetInnerVlanTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerApplianceIpAddressInput">InnerApplianceIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerVlanTagsInput">InnerVlanTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerApplianceIpAddress">InnerApplianceIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerVlanTags">InnerVlanTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InnerApplianceIpAddressInput`<sup>Optional</sup> <a name="InnerApplianceIpAddressInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerApplianceIpAddressInput"></a>

```go
func InnerApplianceIpAddressInput() *string
```

- *Type:* *string

---

##### `InnerVlanTagsInput`<sup>Optional</sup> <a name="InnerVlanTagsInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerVlanTagsInput"></a>

```go
func InnerVlanTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InnerApplianceIpAddress`<sup>Required</sup> <a name="InnerApplianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerApplianceIpAddress"></a>

```go
func InnerApplianceIpAddress() *string
```

- *Type:* *string

---

##### `InnerVlanTags`<sup>Required</sup> <a name="InnerVlanTags" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerVlanTags"></a>

```go
func InnerVlanTags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList <a name="ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

computeinterconnectattachment.NewComputeInterconnectAttachmentL2ForwardingApplianceMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.get"></a>

```go
func Get(index *f64) ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference <a name="ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

computeinterconnectattachment.NewComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.putInnerVlanToApplianceMappings">PutInnerVlanToApplianceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetApplianceIpAddress">ResetApplianceIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetInnerVlanToApplianceMappings">ResetInnerVlanToApplianceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetVlanId">ResetVlanId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInnerVlanToApplianceMappings` <a name="PutInnerVlanToApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.putInnerVlanToApplianceMappings"></a>

```go
func PutInnerVlanToApplianceMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.putInnerVlanToApplianceMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplianceIpAddress` <a name="ResetApplianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetApplianceIpAddress"></a>

```go
func ResetApplianceIpAddress()
```

##### `ResetInnerVlanToApplianceMappings` <a name="ResetInnerVlanToApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetInnerVlanToApplianceMappings"></a>

```go
func ResetInnerVlanToApplianceMappings()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetVlanId` <a name="ResetVlanId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetVlanId"></a>

```go
func ResetVlanId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.innerVlanToApplianceMappings">InnerVlanToApplianceMappings</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.applianceIpAddressInput">ApplianceIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.innerVlanToApplianceMappingsInput">InnerVlanToApplianceMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.vlanIdInput">VlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.applianceIpAddress">ApplianceIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InnerVlanToApplianceMappings`<sup>Required</sup> <a name="InnerVlanToApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.innerVlanToApplianceMappings"></a>

```go
func InnerVlanToApplianceMappings() ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList</a>

---

##### `ApplianceIpAddressInput`<sup>Optional</sup> <a name="ApplianceIpAddressInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.applianceIpAddressInput"></a>

```go
func ApplianceIpAddressInput() *string
```

- *Type:* *string

---

##### `InnerVlanToApplianceMappingsInput`<sup>Optional</sup> <a name="InnerVlanToApplianceMappingsInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.innerVlanToApplianceMappingsInput"></a>

```go
func InnerVlanToApplianceMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.vlanIdInput"></a>

```go
func VlanIdInput() *string
```

- *Type:* *string

---

##### `ApplianceIpAddress`<sup>Required</sup> <a name="ApplianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.applianceIpAddress"></a>

```go
func ApplianceIpAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference <a name="ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

computeinterconnectattachment.NewComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resetVni">ResetVni</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVni` <a name="ResetVni" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resetVni"></a>

```go
func ResetVni()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.vniInput">VniInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.vni">Vni</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader">ComputeInterconnectAttachmentL2ForwardingGeneveHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VniInput`<sup>Optional</sup> <a name="VniInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.vniInput"></a>

```go
func VniInput() *f64
```

- *Type:* *f64

---

##### `Vni`<sup>Required</sup> <a name="Vni" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.vni"></a>

```go
func Vni() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeInterconnectAttachmentL2ForwardingGeneveHeader
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader">ComputeInterconnectAttachmentL2ForwardingGeneveHeader</a>

---


### ComputeInterconnectAttachmentL2ForwardingOutputReference <a name="ComputeInterconnectAttachmentL2ForwardingOutputReference" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

computeinterconnectattachment.NewComputeInterconnectAttachmentL2ForwardingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeInterconnectAttachmentL2ForwardingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.putApplianceMappings">PutApplianceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.putGeneveHeader">PutGeneveHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetApplianceMappings">ResetApplianceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetDefaultApplianceIpAddress">ResetDefaultApplianceIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetGeneveHeader">ResetGeneveHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetTunnelEndpointIpAddress">ResetTunnelEndpointIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplianceMappings` <a name="PutApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.putApplianceMappings"></a>

```go
func PutApplianceMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.putApplianceMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGeneveHeader` <a name="PutGeneveHeader" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.putGeneveHeader"></a>

```go
func PutGeneveHeader(value ComputeInterconnectAttachmentL2ForwardingGeneveHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.putGeneveHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader">ComputeInterconnectAttachmentL2ForwardingGeneveHeader</a>

---

##### `ResetApplianceMappings` <a name="ResetApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetApplianceMappings"></a>

```go
func ResetApplianceMappings()
```

##### `ResetDefaultApplianceIpAddress` <a name="ResetDefaultApplianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetDefaultApplianceIpAddress"></a>

```go
func ResetDefaultApplianceIpAddress()
```

##### `ResetGeneveHeader` <a name="ResetGeneveHeader" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetGeneveHeader"></a>

```go
func ResetGeneveHeader()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetTunnelEndpointIpAddress` <a name="ResetTunnelEndpointIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetTunnelEndpointIpAddress"></a>

```go
func ResetTunnelEndpointIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.applianceMappings">ApplianceMappings</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.geneveHeader">GeneveHeader</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference">ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.applianceMappingsInput">ApplianceMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.defaultApplianceIpAddressInput">DefaultApplianceIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.geneveHeaderInput">GeneveHeaderInput</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader">ComputeInterconnectAttachmentL2ForwardingGeneveHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.tunnelEndpointIpAddressInput">TunnelEndpointIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.defaultApplianceIpAddress">DefaultApplianceIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.tunnelEndpointIpAddress">TunnelEndpointIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding">ComputeInterconnectAttachmentL2Forwarding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplianceMappings`<sup>Required</sup> <a name="ApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.applianceMappings"></a>

```go
func ApplianceMappings() ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList</a>

---

##### `GeneveHeader`<sup>Required</sup> <a name="GeneveHeader" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.geneveHeader"></a>

```go
func GeneveHeader() ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference">ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference</a>

---

##### `ApplianceMappingsInput`<sup>Optional</sup> <a name="ApplianceMappingsInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.applianceMappingsInput"></a>

```go
func ApplianceMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultApplianceIpAddressInput`<sup>Optional</sup> <a name="DefaultApplianceIpAddressInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.defaultApplianceIpAddressInput"></a>

```go
func DefaultApplianceIpAddressInput() *string
```

- *Type:* *string

---

##### `GeneveHeaderInput`<sup>Optional</sup> <a name="GeneveHeaderInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.geneveHeaderInput"></a>

```go
func GeneveHeaderInput() ComputeInterconnectAttachmentL2ForwardingGeneveHeader
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader">ComputeInterconnectAttachmentL2ForwardingGeneveHeader</a>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `TunnelEndpointIpAddressInput`<sup>Optional</sup> <a name="TunnelEndpointIpAddressInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.tunnelEndpointIpAddressInput"></a>

```go
func TunnelEndpointIpAddressInput() *string
```

- *Type:* *string

---

##### `DefaultApplianceIpAddress`<sup>Required</sup> <a name="DefaultApplianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.defaultApplianceIpAddress"></a>

```go
func DefaultApplianceIpAddress() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `TunnelEndpointIpAddress`<sup>Required</sup> <a name="TunnelEndpointIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.tunnelEndpointIpAddress"></a>

```go
func TunnelEndpointIpAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeInterconnectAttachmentL2Forwarding
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding">ComputeInterconnectAttachmentL2Forwarding</a>

---


### ComputeInterconnectAttachmentParamsOutputReference <a name="ComputeInterconnectAttachmentParamsOutputReference" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

computeinterconnectattachment.NewComputeInterconnectAttachmentParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeInterconnectAttachmentParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.resetResourceManagerTags"></a>

```go
func ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams">ComputeInterconnectAttachmentParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.resourceManagerTagsInput"></a>

```go
func ResourceManagerTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.resourceManagerTags"></a>

```go
func ResourceManagerTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeInterconnectAttachmentParams
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams">ComputeInterconnectAttachmentParams</a>

---


### ComputeInterconnectAttachmentPrivateInterconnectInfoList <a name="ComputeInterconnectAttachmentPrivateInterconnectInfoList" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

computeinterconnectattachment.NewComputeInterconnectAttachmentPrivateInterconnectInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeInterconnectAttachmentPrivateInterconnectInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.get"></a>

```go
func Get(index *f64) ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference <a name="ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

computeinterconnectattachment.NewComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.tag8021Q">Tag8021Q</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfo">ComputeInterconnectAttachmentPrivateInterconnectInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tag8021Q`<sup>Required</sup> <a name="Tag8021Q" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.tag8021Q"></a>

```go
func Tag8021Q() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeInterconnectAttachmentPrivateInterconnectInfo
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfo">ComputeInterconnectAttachmentPrivateInterconnectInfo</a>

---


### ComputeInterconnectAttachmentTimeoutsOutputReference <a name="ComputeInterconnectAttachmentTimeoutsOutputReference" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeinterconnectattachment"

computeinterconnectattachment.NewComputeInterconnectAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeInterconnectAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



