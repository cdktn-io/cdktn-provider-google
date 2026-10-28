# `dnsOutboundEndpoint` Submodule <a name="`dnsOutboundEndpoint` Submodule" id="@cdktn/provider-google.dnsOutboundEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsOutboundEndpoint <a name="DnsOutboundEndpoint" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint google_dns_outbound_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dnsoutboundendpoint"

dnsoutboundendpoint.NewDnsOutboundEndpoint(scope Construct, id *string, config DnsOutboundEndpointConfig) DnsOutboundEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig">DnsOutboundEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig">DnsOutboundEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetEndpointIp">ResetEndpointIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value DnsOutboundEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts">DnsOutboundEndpointTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEndpointIp` <a name="ResetEndpointIp" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetEndpointIp"></a>

```go
func ResetEndpointIp()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DnsOutboundEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dnsoutboundendpoint"

dnsoutboundendpoint.DnsOutboundEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dnsoutboundendpoint"

dnsoutboundendpoint.DnsOutboundEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dnsoutboundendpoint"

dnsoutboundendpoint.DnsOutboundEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dnsoutboundendpoint"

dnsoutboundendpoint.DnsOutboundEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DnsOutboundEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DnsOutboundEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DnsOutboundEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DnsOutboundEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference">DnsOutboundEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.endpointIpInput">EndpointIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.endpointIp">EndpointIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.timeouts"></a>

```go
func Timeouts() DnsOutboundEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference">DnsOutboundEndpointTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EndpointIpInput`<sup>Optional</sup> <a name="EndpointIpInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.endpointIpInput"></a>

```go
func EndpointIpInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EndpointIp`<sup>Required</sup> <a name="EndpointIp" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.endpointIp"></a>

```go
func EndpointIp() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsOutboundEndpointConfig <a name="DnsOutboundEndpointConfig" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dnsoutboundendpoint"

&dnsoutboundendpoint.DnsOutboundEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Network: *string,
	Subnetwork: *string,
	Annotations: *map[string]*string,
	DeletionPolicy: *string,
	Description: *string,
	EndpointIp: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.location">Location</a></code> | <code>*string</code> | The location of the OutboundEndpoint. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.name">Name</a></code> | <code>*string</code> | The name of the OutboundEndpoint. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.network">Network</a></code> | <code>*string</code> | The VPC network containing the outbound endpoint, specified as full path. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The subnetwork holding the endpoint_ip, specified as full path. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations as key value pairs. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.description">Description</a></code> | <code>*string</code> | User provided description. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.endpointIp">EndpointIp</a></code> | <code>*string</code> | User provided IP address to use for outbound DNS forwarding. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#id DnsOutboundEndpoint#id}. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#project DnsOutboundEndpoint#project}. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts">DnsOutboundEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the OutboundEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#location DnsOutboundEndpoint#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the OutboundEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#name DnsOutboundEndpoint#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The VPC network containing the outbound endpoint, specified as full path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#network DnsOutboundEndpoint#network}

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The subnetwork holding the endpoint_ip, specified as full path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#subnetwork DnsOutboundEndpoint#subnetwork}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations as key value pairs.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#annotations DnsOutboundEndpoint#annotations}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#deletion_policy DnsOutboundEndpoint#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User provided description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#description DnsOutboundEndpoint#description}

---

##### `EndpointIp`<sup>Optional</sup> <a name="EndpointIp" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.endpointIp"></a>

```go
EndpointIp *string
```

- *Type:* *string

User provided IP address to use for outbound DNS forwarding.

This address
must be a free address on the subnetwork. If omitted, a free IP address
from the subnetwork is automatically allocated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#endpoint_ip DnsOutboundEndpoint#endpoint_ip}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#id DnsOutboundEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#labels DnsOutboundEndpoint#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#project DnsOutboundEndpoint#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointConfig.property.timeouts"></a>

```go
Timeouts DnsOutboundEndpointTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts">DnsOutboundEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#timeouts DnsOutboundEndpoint#timeouts}

---

### DnsOutboundEndpointTimeouts <a name="DnsOutboundEndpointTimeouts" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dnsoutboundendpoint"

&dnsoutboundendpoint.DnsOutboundEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#create DnsOutboundEndpoint#create}. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#delete DnsOutboundEndpoint#delete}. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#update DnsOutboundEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#create DnsOutboundEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#delete DnsOutboundEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dns_outbound_endpoint#update DnsOutboundEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsOutboundEndpointTimeoutsOutputReference <a name="DnsOutboundEndpointTimeoutsOutputReference" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dnsoutboundendpoint"

dnsoutboundendpoint.NewDnsOutboundEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsOutboundEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dnsOutboundEndpoint.DnsOutboundEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



