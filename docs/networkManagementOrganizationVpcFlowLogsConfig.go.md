# `networkManagementOrganizationVpcFlowLogsConfig` Submodule <a name="`networkManagementOrganizationVpcFlowLogsConfig` Submodule" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagementOrganizationVpcFlowLogsConfig <a name="NetworkManagementOrganizationVpcFlowLogsConfig" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config google_network_management_organization_vpc_flow_logs_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkmanagementorganizationvpcflowlogsconfig"

networkmanagementorganizationvpcflowlogsconfig.NewNetworkManagementOrganizationVpcFlowLogsConfig(scope Construct, id *string, config NetworkManagementOrganizationVpcFlowLogsConfigConfig) NetworkManagementOrganizationVpcFlowLogsConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig">NetworkManagementOrganizationVpcFlowLogsConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig">NetworkManagementOrganizationVpcFlowLogsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetAggregationInterval">ResetAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetCrossProjectMetadata">ResetCrossProjectMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetFilterExpr">ResetFilterExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetFlowSampling">ResetFlowSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetMetadataFields">ResetMetadataFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts"></a>

```go
func PutTimeouts(value NetworkManagementOrganizationVpcFlowLogsConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

---

##### `ResetAggregationInterval` <a name="ResetAggregationInterval" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetAggregationInterval"></a>

```go
func ResetAggregationInterval()
```

##### `ResetCrossProjectMetadata` <a name="ResetCrossProjectMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetCrossProjectMetadata"></a>

```go
func ResetCrossProjectMetadata()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFilterExpr` <a name="ResetFilterExpr" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetFilterExpr"></a>

```go
func ResetFilterExpr()
```

##### `ResetFlowSampling` <a name="ResetFlowSampling" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetFlowSampling"></a>

```go
func ResetFlowSampling()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetMetadataFields` <a name="ResetMetadataFields" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetMetadataFields"></a>

```go
func ResetMetadataFields()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkManagementOrganizationVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkmanagementorganizationvpcflowlogsconfig"

networkmanagementorganizationvpcflowlogsconfig.NetworkManagementOrganizationVpcFlowLogsConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkmanagementorganizationvpcflowlogsconfig"

networkmanagementorganizationvpcflowlogsconfig.NetworkManagementOrganizationVpcFlowLogsConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkmanagementorganizationvpcflowlogsconfig"

networkmanagementorganizationvpcflowlogsconfig.NetworkManagementOrganizationVpcFlowLogsConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkmanagementorganizationvpcflowlogsconfig"

networkmanagementorganizationvpcflowlogsconfig.NetworkManagementOrganizationVpcFlowLogsConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkManagementOrganizationVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkManagementOrganizationVpcFlowLogsConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkManagementOrganizationVpcFlowLogsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkManagementOrganizationVpcFlowLogsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference">NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationIntervalInput">AggregationIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadataInput">CrossProjectMetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.filterExprInput">FilterExprInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.flowSamplingInput">FlowSamplingInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFieldsInput">MetadataFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput">VpcFlowLogsConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationInterval">AggregationInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadata">CrossProjectMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.filterExpr">FilterExpr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.flowSampling">FlowSampling</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFields">MetadataFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigId">VpcFlowLogsConfigId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.timeouts"></a>

```go
func Timeouts() NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference">NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AggregationIntervalInput`<sup>Optional</sup> <a name="AggregationIntervalInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationIntervalInput"></a>

```go
func AggregationIntervalInput() *string
```

- *Type:* *string

---

##### `CrossProjectMetadataInput`<sup>Optional</sup> <a name="CrossProjectMetadataInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadataInput"></a>

```go
func CrossProjectMetadataInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FilterExprInput`<sup>Optional</sup> <a name="FilterExprInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.filterExprInput"></a>

```go
func FilterExprInput() *string
```

- *Type:* *string

---

##### `FlowSamplingInput`<sup>Optional</sup> <a name="FlowSamplingInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.flowSamplingInput"></a>

```go
func FlowSamplingInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MetadataFieldsInput`<sup>Optional</sup> <a name="MetadataFieldsInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFieldsInput"></a>

```go
func MetadataFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcFlowLogsConfigIdInput`<sup>Optional</sup> <a name="VpcFlowLogsConfigIdInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput"></a>

```go
func VpcFlowLogsConfigIdInput() *string
```

- *Type:* *string

---

##### `AggregationInterval`<sup>Required</sup> <a name="AggregationInterval" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationInterval"></a>

```go
func AggregationInterval() *string
```

- *Type:* *string

---

##### `CrossProjectMetadata`<sup>Required</sup> <a name="CrossProjectMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadata"></a>

```go
func CrossProjectMetadata() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FilterExpr`<sup>Required</sup> <a name="FilterExpr" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.filterExpr"></a>

```go
func FilterExpr() *string
```

- *Type:* *string

---

##### `FlowSampling`<sup>Required</sup> <a name="FlowSampling" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.flowSampling"></a>

```go
func FlowSampling() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `MetadataFields`<sup>Required</sup> <a name="MetadataFields" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFields"></a>

```go
func MetadataFields() *[]*string
```

- *Type:* *[]*string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `VpcFlowLogsConfigId`<sup>Required</sup> <a name="VpcFlowLogsConfigId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigId"></a>

```go
func VpcFlowLogsConfigId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagementOrganizationVpcFlowLogsConfigConfig <a name="NetworkManagementOrganizationVpcFlowLogsConfigConfig" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkmanagementorganizationvpcflowlogsconfig"

&networkmanagementorganizationvpcflowlogsconfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Organization: *string,
	VpcFlowLogsConfigId: *string,
	AggregationInterval: *string,
	CrossProjectMetadata: *string,
	DeletionPolicy: *string,
	Description: *string,
	FilterExpr: *string,
	FlowSampling: *f64,
	Id: *string,
	Labels: *map[string]*string,
	Metadata: *string,
	MetadataFields: *[]*string,
	State: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.organization">Organization</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId">VpcFlowLogsConfigId</a></code> | <code>*string</code> | Required. ID of the 'VpcFlowLogsConfig'. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.aggregationInterval">AggregationInterval</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.crossProjectMetadata">CrossProjectMetadata</a></code> | <code>*string</code> | Determines whether to include cross project annotations in the logs. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.description">Description</a></code> | <code>*string</code> | Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.filterExpr">FilterExpr</a></code> | <code>*string</code> | Optional. Export filter used to define which VPC Flow Logs should be logged. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.flowSampling">FlowSampling</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#id NetworkManagementOrganizationVpcFlowLogsConfig#id}. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Resource labels to represent the user-provided metadata. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadata">Metadata</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadataFields">MetadataFields</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.state">State</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#location NetworkManagementOrganizationVpcFlowLogsConfig#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#organization NetworkManagementOrganizationVpcFlowLogsConfig#organization}

---

##### `VpcFlowLogsConfigId`<sup>Required</sup> <a name="VpcFlowLogsConfigId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId"></a>

```go
VpcFlowLogsConfigId *string
```

- *Type:* *string

Required. ID of the 'VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#vpc_flow_logs_config_id NetworkManagementOrganizationVpcFlowLogsConfig#vpc_flow_logs_config_id}

---

##### `AggregationInterval`<sup>Optional</sup> <a name="AggregationInterval" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.aggregationInterval"></a>

```go
AggregationInterval *string
```

- *Type:* *string

Optional.

The aggregation interval for the logs. Default value is
INTERVAL_5_SEC.   Possible values: INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#aggregation_interval NetworkManagementOrganizationVpcFlowLogsConfig#aggregation_interval}

---

##### `CrossProjectMetadata`<sup>Optional</sup> <a name="CrossProjectMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.crossProjectMetadata"></a>

```go
CrossProjectMetadata *string
```

- *Type:* *string

Determines whether to include cross project annotations in the logs.

This field is available only for organization configurations. If not
specified in org configs will be set to CROSS_PROJECT_METADATA_ENABLED.
Possible values:
CROSS_PROJECT_METADATA_ENABLED
CROSS_PROJECT_METADATA_DISABLED Possible values: ["CROSS_PROJECT_METADATA_ENABLED", "CROSS_PROJECT_METADATA_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#cross_project_metadata NetworkManagementOrganizationVpcFlowLogsConfig#cross_project_metadata}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#deletion_policy NetworkManagementOrganizationVpcFlowLogsConfig#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#description NetworkManagementOrganizationVpcFlowLogsConfig#description}

---

##### `FilterExpr`<sup>Optional</sup> <a name="FilterExpr" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.filterExpr"></a>

```go
FilterExpr *string
```

- *Type:* *string

Optional. Export filter used to define which VPC Flow Logs should be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#filter_expr NetworkManagementOrganizationVpcFlowLogsConfig#filter_expr}

---

##### `FlowSampling`<sup>Optional</sup> <a name="FlowSampling" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.flowSampling"></a>

```go
FlowSampling *f64
```

- *Type:* *f64

Optional.

The value of the field must be in (0, 1]. The sampling rate
of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
the state field instead. Default value is 1.0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#flow_sampling NetworkManagementOrganizationVpcFlowLogsConfig#flow_sampling}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#id NetworkManagementOrganizationVpcFlowLogsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Resource labels to represent the user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#labels NetworkManagementOrganizationVpcFlowLogsConfig#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

Optional.

Configures whether all, none or a subset of metadata fields
should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#metadata NetworkManagementOrganizationVpcFlowLogsConfig#metadata}

---

##### `MetadataFields`<sup>Optional</sup> <a name="MetadataFields" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadataFields"></a>

```go
MetadataFields *[]*string
```

- *Type:* *[]*string

Optional.

Custom metadata fields to include in the reported VPC flow
logs. Can only be specified if "metadata" was set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#metadata_fields NetworkManagementOrganizationVpcFlowLogsConfig#metadata_fields}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Optional.

The state of the VPC Flow Log configuration. Default value
is ENABLED. When creating a new configuration, it must be enabled.
Possible values: ENABLED DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#state NetworkManagementOrganizationVpcFlowLogsConfig#state}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.timeouts"></a>

```go
Timeouts NetworkManagementOrganizationVpcFlowLogsConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#timeouts NetworkManagementOrganizationVpcFlowLogsConfig#timeouts}

---

### NetworkManagementOrganizationVpcFlowLogsConfigTimeouts <a name="NetworkManagementOrganizationVpcFlowLogsConfigTimeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkmanagementorganizationvpcflowlogsconfig"

&networkmanagementorganizationvpcflowlogsconfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#create NetworkManagementOrganizationVpcFlowLogsConfig#create}. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#delete NetworkManagementOrganizationVpcFlowLogsConfig#delete}. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#update NetworkManagementOrganizationVpcFlowLogsConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#create NetworkManagementOrganizationVpcFlowLogsConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#delete NetworkManagementOrganizationVpcFlowLogsConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_management_organization_vpc_flow_logs_config#update NetworkManagementOrganizationVpcFlowLogsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference <a name="NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkmanagementorganizationvpcflowlogsconfig"

networkmanagementorganizationvpcflowlogsconfig.NewNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



