# `agentRegistryService` Submodule <a name="`agentRegistryService` Submodule" id="@cdktn/provider-google.agentRegistryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentRegistryService <a name="AgentRegistryService" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service google_agent_registry_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

agentregistryservice.NewAgentRegistryService(scope Construct, id *string, config AgentRegistryServiceConfig) AgentRegistryService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig">AgentRegistryServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig">AgentRegistryServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putAgentSpec">PutAgentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putEndpointSpec">PutEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putInterfaces">PutInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putMcpServerSpec">PutMcpServerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetAgentSpec">ResetAgentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetEndpointSpec">ResetEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetInterfaces">ResetInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetMcpServerSpec">ResetMcpServerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAgentSpec` <a name="PutAgentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putAgentSpec"></a>

```go
func PutAgentSpec(value AgentRegistryServiceAgentSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putAgentSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

---

##### `PutEndpointSpec` <a name="PutEndpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putEndpointSpec"></a>

```go
func PutEndpointSpec(value AgentRegistryServiceEndpointSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

---

##### `PutInterfaces` <a name="PutInterfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putInterfaces"></a>

```go
func PutInterfaces(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putInterfaces.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMcpServerSpec` <a name="PutMcpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putMcpServerSpec"></a>

```go
func PutMcpServerSpec(value AgentRegistryServiceMcpServerSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putMcpServerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putTimeouts"></a>

```go
func PutTimeouts(value AgentRegistryServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a>

---

##### `ResetAgentSpec` <a name="ResetAgentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetAgentSpec"></a>

```go
func ResetAgentSpec()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEndpointSpec` <a name="ResetEndpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetEndpointSpec"></a>

```go
func ResetEndpointSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetId"></a>

```go
func ResetId()
```

##### `ResetInterfaces` <a name="ResetInterfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetInterfaces"></a>

```go
func ResetInterfaces()
```

##### `ResetMcpServerSpec` <a name="ResetMcpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetMcpServerSpec"></a>

```go
func ResetMcpServerSpec()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AgentRegistryService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

agentregistryservice.AgentRegistryService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

agentregistryservice.AgentRegistryService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

agentregistryservice.AgentRegistryService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

agentregistryservice.AgentRegistryService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AgentRegistryService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AgentRegistryService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AgentRegistryService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AgentRegistryService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.agentSpec">AgentSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference">AgentRegistryServiceAgentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.endpointSpec">EndpointSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference">AgentRegistryServiceEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.interfaces">Interfaces</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList">AgentRegistryServiceInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.mcpServerSpec">McpServerSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference">AgentRegistryServiceMcpServerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.registryResource">RegistryResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference">AgentRegistryServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.agentSpecInput">AgentSpecInput</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.endpointSpecInput">EndpointSpecInput</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.interfacesInput">InterfacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.mcpServerSpecInput">McpServerSpecInput</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.serviceIdInput">ServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentSpec`<sup>Required</sup> <a name="AgentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.agentSpec"></a>

```go
func AgentSpec() AgentRegistryServiceAgentSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference">AgentRegistryServiceAgentSpecOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EndpointSpec`<sup>Required</sup> <a name="EndpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.endpointSpec"></a>

```go
func EndpointSpec() AgentRegistryServiceEndpointSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference">AgentRegistryServiceEndpointSpecOutputReference</a>

---

##### `Interfaces`<sup>Required</sup> <a name="Interfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.interfaces"></a>

```go
func Interfaces() AgentRegistryServiceInterfacesList
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList">AgentRegistryServiceInterfacesList</a>

---

##### `McpServerSpec`<sup>Required</sup> <a name="McpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.mcpServerSpec"></a>

```go
func McpServerSpec() AgentRegistryServiceMcpServerSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference">AgentRegistryServiceMcpServerSpecOutputReference</a>

---

##### `RegistryResource`<sup>Required</sup> <a name="RegistryResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.registryResource"></a>

```go
func RegistryResource() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.timeouts"></a>

```go
func Timeouts() AgentRegistryServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference">AgentRegistryServiceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AgentSpecInput`<sup>Optional</sup> <a name="AgentSpecInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.agentSpecInput"></a>

```go
func AgentSpecInput() AgentRegistryServiceAgentSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EndpointSpecInput`<sup>Optional</sup> <a name="EndpointSpecInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.endpointSpecInput"></a>

```go
func EndpointSpecInput() AgentRegistryServiceEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterfacesInput`<sup>Optional</sup> <a name="InterfacesInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.interfacesInput"></a>

```go
func InterfacesInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `McpServerSpecInput`<sup>Optional</sup> <a name="McpServerSpecInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.mcpServerSpecInput"></a>

```go
func McpServerSpecInput() AgentRegistryServiceMcpServerSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.serviceIdInput"></a>

```go
func ServiceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentRegistryServiceAgentSpec <a name="AgentRegistryServiceAgentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

&agentregistryservice.AgentRegistryServiceAgentSpec {
	Type: *string,
	Content: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.property.type">Type</a></code> | <code>*string</code> | The type of the Agent spec content. Possible values: ["NO_SPEC", "A2A_AGENT_CARD"]. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.property.content">Content</a></code> | <code>*string</code> | The content of the Agent spec in the JSON format. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the Agent spec content. Possible values: ["NO_SPEC", "A2A_AGENT_CARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#type AgentRegistryService#type}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.property.content"></a>

```go
Content *string
```

- *Type:* *string

The content of the Agent spec in the JSON format.

This payload is validated against the schema for the specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#content AgentRegistryService#content}

---

### AgentRegistryServiceConfig <a name="AgentRegistryServiceConfig" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

&agentregistryservice.AgentRegistryServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ServiceId: *string,
	AgentSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.agentRegistryService.AgentRegistryServiceAgentSpec,
	DeletionPolicy: *string,
	Description: *string,
	DisplayName: *string,
	EndpointSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.agentRegistryService.AgentRegistryServiceEndpointSpec,
	Id: *string,
	Interfaces: interface{},
	McpServerSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.agentRegistryService.AgentRegistryServiceMcpServerSpec,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.agentRegistryService.AgentRegistryServiceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.serviceId">ServiceId</a></code> | <code>*string</code> | The name of the Service. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.agentSpec">AgentSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a></code> | agent_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.description">Description</a></code> | <code>*string</code> | The description of the Service. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-defined display name for the Service. Can have a maximum length of 63 characters. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.endpointSpec">EndpointSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a></code> | endpoint_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#id AgentRegistryService#id}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.interfaces">Interfaces</a></code> | <code>interface{}</code> | interfaces block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.mcpServerSpec">McpServerSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a></code> | mcp_server_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#project AgentRegistryService#project}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#location AgentRegistryService#location}

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.serviceId"></a>

```go
ServiceId *string
```

- *Type:* *string

The name of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#service_id AgentRegistryService#service_id}

---

##### `AgentSpec`<sup>Optional</sup> <a name="AgentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.agentSpec"></a>

```go
AgentSpec AgentRegistryServiceAgentSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

agent_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#agent_spec AgentRegistryService#agent_spec}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#deletion_policy AgentRegistryService#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#description AgentRegistryService#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-defined display name for the Service. Can have a maximum length of 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#display_name AgentRegistryService#display_name}

---

##### `EndpointSpec`<sup>Optional</sup> <a name="EndpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.endpointSpec"></a>

```go
EndpointSpec AgentRegistryServiceEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

endpoint_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#endpoint_spec AgentRegistryService#endpoint_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#id AgentRegistryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interfaces`<sup>Optional</sup> <a name="Interfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.interfaces"></a>

```go
Interfaces interface{}
```

- *Type:* interface{}

interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#interfaces AgentRegistryService#interfaces}

---

##### `McpServerSpec`<sup>Optional</sup> <a name="McpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.mcpServerSpec"></a>

```go
McpServerSpec AgentRegistryServiceMcpServerSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

mcp_server_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#mcp_server_spec AgentRegistryService#mcp_server_spec}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#project AgentRegistryService#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.timeouts"></a>

```go
Timeouts AgentRegistryServiceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#timeouts AgentRegistryService#timeouts}

---

### AgentRegistryServiceEndpointSpec <a name="AgentRegistryServiceEndpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

&agentregistryservice.AgentRegistryServiceEndpointSpec {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec.property.type">Type</a></code> | <code>*string</code> | The type of the Endpoint spec content. Possible values: ["NO_SPEC"]. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the Endpoint spec content. Possible values: ["NO_SPEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#type AgentRegistryService#type}

---

### AgentRegistryServiceInterfaces <a name="AgentRegistryServiceInterfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

&agentregistryservice.AgentRegistryServiceInterfaces {
	ProtocolBinding: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.property.protocolBinding">ProtocolBinding</a></code> | <code>*string</code> | The protocol binding of the interface. Possible values: ["JSONRPC", "GRPC", "HTTP_JSON"]. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.property.url">Url</a></code> | <code>*string</code> | The destination URL. |

---

##### `ProtocolBinding`<sup>Required</sup> <a name="ProtocolBinding" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.property.protocolBinding"></a>

```go
ProtocolBinding *string
```

- *Type:* *string

The protocol binding of the interface. Possible values: ["JSONRPC", "GRPC", "HTTP_JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#protocol_binding AgentRegistryService#protocol_binding}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.property.url"></a>

```go
Url *string
```

- *Type:* *string

The destination URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#url AgentRegistryService#url}

---

### AgentRegistryServiceMcpServerSpec <a name="AgentRegistryServiceMcpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

&agentregistryservice.AgentRegistryServiceMcpServerSpec {
	Type: *string,
	Content: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.property.type">Type</a></code> | <code>*string</code> | The type of the MCP Server spec content. Possible values: ["NO_SPEC", "TOOL_SPEC"]. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.property.content">Content</a></code> | <code>*string</code> | The content of the MCP Server spec. This payload is validated against the schema for the specified type. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the MCP Server spec content. Possible values: ["NO_SPEC", "TOOL_SPEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#type AgentRegistryService#type}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.property.content"></a>

```go
Content *string
```

- *Type:* *string

The content of the MCP Server spec. This payload is validated against the schema for the specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#content AgentRegistryService#content}

---

### AgentRegistryServiceTimeouts <a name="AgentRegistryServiceTimeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

&agentregistryservice.AgentRegistryServiceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#create AgentRegistryService#create}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#delete AgentRegistryService#delete}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#update AgentRegistryService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#create AgentRegistryService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#delete AgentRegistryService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/agent_registry_service#update AgentRegistryService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AgentRegistryServiceAgentSpecOutputReference <a name="AgentRegistryServiceAgentSpecOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

agentregistryservice.NewAgentRegistryServiceAgentSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentRegistryServiceAgentSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resetContent"></a>

```go
func ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() AgentRegistryServiceAgentSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

---


### AgentRegistryServiceEndpointSpecOutputReference <a name="AgentRegistryServiceEndpointSpecOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

agentregistryservice.NewAgentRegistryServiceEndpointSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentRegistryServiceEndpointSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() AgentRegistryServiceEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

---


### AgentRegistryServiceInterfacesList <a name="AgentRegistryServiceInterfacesList" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

agentregistryservice.NewAgentRegistryServiceInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentRegistryServiceInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.get"></a>

```go
func Get(index *f64) AgentRegistryServiceInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentRegistryServiceInterfacesOutputReference <a name="AgentRegistryServiceInterfacesOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

agentregistryservice.NewAgentRegistryServiceInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentRegistryServiceInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.protocolBindingInput">ProtocolBindingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.protocolBinding">ProtocolBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProtocolBindingInput`<sup>Optional</sup> <a name="ProtocolBindingInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.protocolBindingInput"></a>

```go
func ProtocolBindingInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `ProtocolBinding`<sup>Required</sup> <a name="ProtocolBinding" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.protocolBinding"></a>

```go
func ProtocolBinding() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentRegistryServiceMcpServerSpecOutputReference <a name="AgentRegistryServiceMcpServerSpecOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

agentregistryservice.NewAgentRegistryServiceMcpServerSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentRegistryServiceMcpServerSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resetContent"></a>

```go
func ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() AgentRegistryServiceMcpServerSpec
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

---


### AgentRegistryServiceTimeoutsOutputReference <a name="AgentRegistryServiceTimeoutsOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/agentregistryservice"

agentregistryservice.NewAgentRegistryServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentRegistryServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



