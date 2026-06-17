# `networkSecurityFirewallEndpoint` Submodule <a name="`networkSecurityFirewallEndpoint` Submodule" id="@cdktn/provider-google.networkSecurityFirewallEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityFirewallEndpoint <a name="NetworkSecurityFirewallEndpoint" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint google_network_security_firewall_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityfirewallendpoint"

networksecurityfirewallendpoint.NewNetworkSecurityFirewallEndpoint(scope Construct, id *string, config NetworkSecurityFirewallEndpointConfig) NetworkSecurityFirewallEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig">NetworkSecurityFirewallEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig">NetworkSecurityFirewallEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putEndpointSettings">PutEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetBillingProjectId">ResetBillingProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetEndpointSettings">ResetEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointSettings` <a name="PutEndpointSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putEndpointSettings"></a>

```go
func PutEndpointSettings(value NetworkSecurityFirewallEndpointEndpointSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putEndpointSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value NetworkSecurityFirewallEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a>

---

##### `ResetBillingProjectId` <a name="ResetBillingProjectId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetBillingProjectId"></a>

```go
func ResetBillingProjectId()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetEndpointSettings` <a name="ResetEndpointSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetEndpointSettings"></a>

```go
func ResetEndpointSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkSecurityFirewallEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityfirewallendpoint"

networksecurityfirewallendpoint.NetworkSecurityFirewallEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityfirewallendpoint"

networksecurityfirewallendpoint.NetworkSecurityFirewallEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityfirewallendpoint"

networksecurityfirewallendpoint.NetworkSecurityFirewallEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityfirewallendpoint"

networksecurityfirewallendpoint.NetworkSecurityFirewallEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkSecurityFirewallEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkSecurityFirewallEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkSecurityFirewallEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecurityFirewallEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.associatedNetworks">AssociatedNetworks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.endpointSettings">EndpointSettings</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference">NetworkSecurityFirewallEndpointEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.reconciling">Reconciling</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference">NetworkSecurityFirewallEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.billingProjectIdInput">BillingProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.endpointSettingsInput">EndpointSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.billingProjectId">BillingProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedNetworks`<sup>Required</sup> <a name="AssociatedNetworks" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.associatedNetworks"></a>

```go
func AssociatedNetworks() *[]*string
```

- *Type:* *[]*string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EndpointSettings`<sup>Required</sup> <a name="EndpointSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.endpointSettings"></a>

```go
func EndpointSettings() NetworkSecurityFirewallEndpointEndpointSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference">NetworkSecurityFirewallEndpointEndpointSettingsOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.timeouts"></a>

```go
func Timeouts() NetworkSecurityFirewallEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference">NetworkSecurityFirewallEndpointTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BillingProjectIdInput`<sup>Optional</sup> <a name="BillingProjectIdInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.billingProjectIdInput"></a>

```go
func BillingProjectIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `EndpointSettingsInput`<sup>Optional</sup> <a name="EndpointSettingsInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.endpointSettingsInput"></a>

```go
func EndpointSettingsInput() NetworkSecurityFirewallEndpointEndpointSettings
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BillingProjectId`<sup>Required</sup> <a name="BillingProjectId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.billingProjectId"></a>

```go
func BillingProjectId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityFirewallEndpointConfig <a name="NetworkSecurityFirewallEndpointConfig" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityfirewallendpoint"

&networksecurityfirewallendpoint.NetworkSecurityFirewallEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Parent: *string,
	BillingProjectId: *string,
	DeletionPolicy: *string,
	EndpointSettings: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings,
	Id: *string,
	Labels: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.location">Location</a></code> | <code>*string</code> | The location (zone) of the firewall endpoint. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.name">Name</a></code> | <code>*string</code> | The name of the firewall endpoint resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.parent">Parent</a></code> | <code>*string</code> | The name of the parent this firewall endpoint belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.billingProjectId">BillingProjectId</a></code> | <code>*string</code> | Project to charge for the deployed firewall endpoint. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.endpointSettings">EndpointSettings</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a></code> | endpoint_settings block. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#id NetworkSecurityFirewallEndpoint#id}. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location (zone) of the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#location NetworkSecurityFirewallEndpoint#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the firewall endpoint resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#name NetworkSecurityFirewallEndpoint#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The name of the parent this firewall endpoint belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#parent NetworkSecurityFirewallEndpoint#parent}

---

##### `BillingProjectId`<sup>Optional</sup> <a name="BillingProjectId" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.billingProjectId"></a>

```go
BillingProjectId *string
```

- *Type:* *string

Project to charge for the deployed firewall endpoint.

This field is required for organization-scoped endpoints.
For project-scoped endpoints, it is optional but must match the
endpoint's project if specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#billing_project_id NetworkSecurityFirewallEndpoint#billing_project_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#deletion_policy NetworkSecurityFirewallEndpoint#deletion_policy}

---

##### `EndpointSettings`<sup>Optional</sup> <a name="EndpointSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.endpointSettings"></a>

```go
EndpointSettings NetworkSecurityFirewallEndpointEndpointSettings
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a>

endpoint_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#endpoint_settings NetworkSecurityFirewallEndpoint#endpoint_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#id NetworkSecurityFirewallEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#labels NetworkSecurityFirewallEndpoint#labels}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.timeouts"></a>

```go
Timeouts NetworkSecurityFirewallEndpointTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#timeouts NetworkSecurityFirewallEndpoint#timeouts}

---

### NetworkSecurityFirewallEndpointEndpointSettings <a name="NetworkSecurityFirewallEndpointEndpointSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityfirewallendpoint"

&networksecurityfirewallendpoint.NetworkSecurityFirewallEndpointEndpointSettings {
	JumboFramesEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.property.jumboFramesEnabled">JumboFramesEnabled</a></code> | <code>interface{}</code> | Indicates whether Jumbo Frames are enabled for the firewall endpoint. |

---

##### `JumboFramesEnabled`<sup>Optional</sup> <a name="JumboFramesEnabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.property.jumboFramesEnabled"></a>

```go
JumboFramesEnabled interface{}
```

- *Type:* interface{}

Indicates whether Jumbo Frames are enabled for the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#jumbo_frames_enabled NetworkSecurityFirewallEndpoint#jumbo_frames_enabled}

---

### NetworkSecurityFirewallEndpointTimeouts <a name="NetworkSecurityFirewallEndpointTimeouts" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityfirewallendpoint"

&networksecurityfirewallendpoint.NetworkSecurityFirewallEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#create NetworkSecurityFirewallEndpoint#create}. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#delete NetworkSecurityFirewallEndpoint#delete}. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#update NetworkSecurityFirewallEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#create NetworkSecurityFirewallEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#delete NetworkSecurityFirewallEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_firewall_endpoint#update NetworkSecurityFirewallEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityFirewallEndpointEndpointSettingsOutputReference <a name="NetworkSecurityFirewallEndpointEndpointSettingsOutputReference" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityfirewallendpoint"

networksecurityfirewallendpoint.NewNetworkSecurityFirewallEndpointEndpointSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityFirewallEndpointEndpointSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetJumboFramesEnabled">ResetJumboFramesEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJumboFramesEnabled` <a name="ResetJumboFramesEnabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetJumboFramesEnabled"></a>

```go
func ResetJumboFramesEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabledInput">JumboFramesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabled">JumboFramesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JumboFramesEnabledInput`<sup>Optional</sup> <a name="JumboFramesEnabledInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabledInput"></a>

```go
func JumboFramesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `JumboFramesEnabled`<sup>Required</sup> <a name="JumboFramesEnabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabled"></a>

```go
func JumboFramesEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityFirewallEndpointEndpointSettings
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a>

---


### NetworkSecurityFirewallEndpointTimeoutsOutputReference <a name="NetworkSecurityFirewallEndpointTimeoutsOutputReference" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecurityfirewallendpoint"

networksecurityfirewallendpoint.NewNetworkSecurityFirewallEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityFirewallEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



