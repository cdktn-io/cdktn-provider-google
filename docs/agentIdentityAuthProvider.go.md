# `agentIdentityAuthProvider` Submodule <a name="`agentIdentityAuthProvider` Submodule" id="@cdktn/provider-google.agentIdentityAuthProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentIdentityAuthProvider <a name="AgentIdentityAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider google_agent_identity_auth_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.NewAgentIdentityAuthProvider(scope Construct, id *string, config AgentIdentityAuthProviderConfig) AgentIdentityAuthProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig">AgentIdentityAuthProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig">AgentIdentityAuthProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.putAuthProviderTypeParams">PutAuthProviderTypeParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetAllowedScopes">ResetAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetBlockedScopes">ResetBlockedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetWorkloadIds">ResetWorkloadIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthProviderTypeParams` <a name="PutAuthProviderTypeParams" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.putAuthProviderTypeParams"></a>

```go
func PutAuthProviderTypeParams(value AgentIdentityAuthProviderAuthProviderTypeParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.putAuthProviderTypeParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.putTimeouts"></a>

```go
func PutTimeouts(value AgentIdentityAuthProviderTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a>

---

##### `ResetAllowedScopes` <a name="ResetAllowedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetAllowedScopes"></a>

```go
func ResetAllowedScopes()
```

##### `ResetBlockedScopes` <a name="ResetBlockedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetBlockedScopes"></a>

```go
func ResetBlockedScopes()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkloadIds` <a name="ResetWorkloadIds" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetWorkloadIds"></a>

```go
func ResetWorkloadIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AgentIdentityAuthProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.AgentIdentityAuthProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.AgentIdentityAuthProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.AgentIdentityAuthProvider_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.AgentIdentityAuthProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AgentIdentityAuthProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AgentIdentityAuthProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AgentIdentityAuthProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AgentIdentityAuthProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderTypeParams">AuthProviderTypeParams</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deleted">Deleted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference">AgentIdentityAuthProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.allowedScopesInput">AllowedScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderIdInput">AuthProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderTypeParamsInput">AuthProviderTypeParamsInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.blockedScopesInput">BlockedScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.workloadIdsInput">WorkloadIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.allowedScopes">AllowedScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderId">AuthProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.blockedScopes">BlockedScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.workloadIds">WorkloadIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthProviderTypeParams`<sup>Required</sup> <a name="AuthProviderTypeParams" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderTypeParams"></a>

```go
func AuthProviderTypeParams() AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Deleted`<sup>Required</sup> <a name="Deleted" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deleted"></a>

```go
func Deleted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.timeouts"></a>

```go
func Timeouts() AgentIdentityAuthProviderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference">AgentIdentityAuthProviderTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AllowedScopesInput`<sup>Optional</sup> <a name="AllowedScopesInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.allowedScopesInput"></a>

```go
func AllowedScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthProviderIdInput`<sup>Optional</sup> <a name="AuthProviderIdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderIdInput"></a>

```go
func AuthProviderIdInput() *string
```

- *Type:* *string

---

##### `AuthProviderTypeParamsInput`<sup>Optional</sup> <a name="AuthProviderTypeParamsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderTypeParamsInput"></a>

```go
func AuthProviderTypeParamsInput() AgentIdentityAuthProviderAuthProviderTypeParams
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a>

---

##### `BlockedScopesInput`<sup>Optional</sup> <a name="BlockedScopesInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.blockedScopesInput"></a>

```go
func BlockedScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkloadIdsInput`<sup>Optional</sup> <a name="WorkloadIdsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.workloadIdsInput"></a>

```go
func WorkloadIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedScopes`<sup>Required</sup> <a name="AllowedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.allowedScopes"></a>

```go
func AllowedScopes() *[]*string
```

- *Type:* *[]*string

---

##### `AuthProviderId`<sup>Required</sup> <a name="AuthProviderId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderId"></a>

```go
func AuthProviderId() *string
```

- *Type:* *string

---

##### `BlockedScopes`<sup>Required</sup> <a name="BlockedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.blockedScopes"></a>

```go
func BlockedScopes() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `WorkloadIds`<sup>Required</sup> <a name="WorkloadIds" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.workloadIds"></a>

```go
func WorkloadIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentIdentityAuthProviderAuthProviderTypeParams <a name="AgentIdentityAuthProviderAuthProviderTypeParams" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

&agentidentityauthprovider.AgentIdentityAuthProviderAuthProviderTypeParams {
	ApiKey: github.com/cdktn-io/cdktn-provider-google-go/google/v22.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey,
	ConnectorReferenceAuthProvider: github.com/cdktn-io/cdktn-provider-google-go/google/v22.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider,
	ThreeLeggedOauth: github.com/cdktn-io/cdktn-provider-google-go/google/v22.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth,
	TwoLeggedOauth: github.com/cdktn-io/cdktn-provider-google-go/google/v22.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth,
	XaaAuthProvider: github.com/cdktn-io/cdktn-provider-google-go/google/v22.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a></code> | api_key block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.connectorReferenceAuthProvider">ConnectorReferenceAuthProvider</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a></code> | connector_reference_auth_provider block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.threeLeggedOauth">ThreeLeggedOauth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a></code> | three_legged_oauth block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.twoLeggedOauth">TwoLeggedOauth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a></code> | two_legged_oauth block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.xaaAuthProvider">XaaAuthProvider</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a></code> | xaa_auth_provider block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.apiKey"></a>

```go
ApiKey AgentIdentityAuthProviderAuthProviderTypeParamsApiKey
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#api_key AgentIdentityAuthProvider#api_key}

---

##### `ConnectorReferenceAuthProvider`<sup>Optional</sup> <a name="ConnectorReferenceAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.connectorReferenceAuthProvider"></a>

```go
ConnectorReferenceAuthProvider AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a>

connector_reference_auth_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#connector_reference_auth_provider AgentIdentityAuthProvider#connector_reference_auth_provider}

---

##### `ThreeLeggedOauth`<sup>Optional</sup> <a name="ThreeLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.threeLeggedOauth"></a>

```go
ThreeLeggedOauth AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

three_legged_oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#three_legged_oauth AgentIdentityAuthProvider#three_legged_oauth}

---

##### `TwoLeggedOauth`<sup>Optional</sup> <a name="TwoLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.twoLeggedOauth"></a>

```go
TwoLeggedOauth AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

two_legged_oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#two_legged_oauth AgentIdentityAuthProvider#two_legged_oauth}

---

##### `XaaAuthProvider`<sup>Optional</sup> <a name="XaaAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.xaaAuthProvider"></a>

```go
XaaAuthProvider AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a>

xaa_auth_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#xaa_auth_provider AgentIdentityAuthProvider#xaa_auth_provider}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsApiKey <a name="AgentIdentityAuthProviderAuthProviderTypeParamsApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

&agentidentityauthprovider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey {
	ApiKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey.property.apiKey">ApiKey</a></code> | <code>*string</code> | Input only. The API key for this auth_provider. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Input only. The API key for this auth_provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#api_key AgentIdentityAuthProvider#api_key}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider <a name="AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

&agentidentityauthprovider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider {
	Connector: *string,
	AuthorizationDetails: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider.property.connector">Connector</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider.property.authorizationDetails">AuthorizationDetails</a></code> | <code>*string</code> | Optional. Rich Authorization Requests (RFC 9396) detailing targeted OAuth resources/scopes, formatted as a JSON array of JSON objects. |

---

##### `Connector`<sup>Required</sup> <a name="Connector" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider.property.connector"></a>

```go
Connector *string
```

- *Type:* *string

Required.

The name of the referenced connector. For Gemini Enterprise, this
is either a Data Connector name
('projects/{{project}}/locations/{{location}}/collections/{{collection}}/dataConnector'),
an Authorization name
('projects/{{project}}/locations/{{location}}/authorizations/{{authorization}}'),
or a connector ID (e.g. 'salesforce-connector-prod').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#connector AgentIdentityAuthProvider#connector}

---

##### `AuthorizationDetails`<sup>Optional</sup> <a name="AuthorizationDetails" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider.property.authorizationDetails"></a>

```go
AuthorizationDetails *string
```

- *Type:* *string

Optional. Rich Authorization Requests (RFC 9396) detailing targeted OAuth resources/scopes, formatted as a JSON array of JSON objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#authorization_details AgentIdentityAuthProvider#authorization_details}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider <a name="AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

&agentidentityauthprovider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider {

}
```


### AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth <a name="AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

&agentidentityauthprovider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth {
	AuthorizationUrl: *string,
	ClientId: *string,
	ClientSecret: *string,
	ClientSecretWo: *string,
	ClientSecretWoVersion: *string,
	DefaultContinueUri: *string,
	EnablePkce: interface{},
	TokenUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.authorizationUrl">AuthorizationUrl</a></code> | <code>*string</code> | The authorization endpoint to send users to for consenting to delegate to the agent. eg. "https://auth.atlassian.com/authorize". |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWo">ClientSecretWo</a></code> | <code>*string</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWoVersion">ClientSecretWoVersion</a></code> | <code>*string</code> | Triggers update of 'client_secret_wo' write-only. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.defaultContinueUri">DefaultContinueUri</a></code> | <code>*string</code> | The default continue URI for 3LO flow and it will be used when no continue URI is provided in the RetrieveCredentials request. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.enablePkce">EnablePkce</a></code> | <code>interface{}</code> | Enables Proof Key for Code Exchange (PKCE) for the OAuth flow to prevent authorization code interception attacks. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | The token endpoint for requesting tokens on behalf of an end user. eg. "https://auth.atlassian.com/oauth/token". |

---

##### `AuthorizationUrl`<sup>Optional</sup> <a name="AuthorizationUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.authorizationUrl"></a>

```go
AuthorizationUrl *string
```

- *Type:* *string

The authorization endpoint to send users to for consenting to delegate to the agent. eg. "https://auth.atlassian.com/authorize".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#authorization_url AgentIdentityAuthProvider#authorization_url}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_id AgentIdentityAuthProvider#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret AgentIdentityAuthProvider#client_secret}

---

##### `ClientSecretWo`<sup>Optional</sup> <a name="ClientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWo"></a>

```go
ClientSecretWo *string
```

- *Type:* *string

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret_wo AgentIdentityAuthProvider#client_secret_wo}

---

##### `ClientSecretWoVersion`<sup>Optional</sup> <a name="ClientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWoVersion"></a>

```go
ClientSecretWoVersion *string
```

- *Type:* *string

Triggers update of 'client_secret_wo' write-only.

Increment this value when an update to 'client_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret_wo_version AgentIdentityAuthProvider#client_secret_wo_version}

---

##### `DefaultContinueUri`<sup>Optional</sup> <a name="DefaultContinueUri" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.defaultContinueUri"></a>

```go
DefaultContinueUri *string
```

- *Type:* *string

The default continue URI for 3LO flow and it will be used when no continue URI is provided in the RetrieveCredentials request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#default_continue_uri AgentIdentityAuthProvider#default_continue_uri}

---

##### `EnablePkce`<sup>Optional</sup> <a name="EnablePkce" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.enablePkce"></a>

```go
EnablePkce interface{}
```

- *Type:* interface{}

Enables Proof Key for Code Exchange (PKCE) for the OAuth flow to prevent authorization code interception attacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#enable_pkce AgentIdentityAuthProvider#enable_pkce}

---

##### `TokenUrl`<sup>Optional</sup> <a name="TokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.tokenUrl"></a>

```go
TokenUrl *string
```

- *Type:* *string

The token endpoint for requesting tokens on behalf of an end user. eg. "https://auth.atlassian.com/oauth/token".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#token_url AgentIdentityAuthProvider#token_url}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth <a name="AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

&agentidentityauthprovider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth {
	ClientId: *string,
	ClientSecret: *string,
	ClientSecretWo: *string,
	ClientSecretWoVersion: *string,
	TokenUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWo">ClientSecretWo</a></code> | <code>*string</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWoVersion">ClientSecretWoVersion</a></code> | <code>*string</code> | Triggers update of 'client_secret_wo' write-only. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | The token endpoint of the OAuth client. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_id AgentIdentityAuthProvider#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret AgentIdentityAuthProvider#client_secret}

---

##### `ClientSecretWo`<sup>Optional</sup> <a name="ClientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWo"></a>

```go
ClientSecretWo *string
```

- *Type:* *string

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret_wo AgentIdentityAuthProvider#client_secret_wo}

---

##### `ClientSecretWoVersion`<sup>Optional</sup> <a name="ClientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWoVersion"></a>

```go
ClientSecretWoVersion *string
```

- *Type:* *string

Triggers update of 'client_secret_wo' write-only.

Increment this value when an update to 'client_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret_wo_version AgentIdentityAuthProvider#client_secret_wo_version}

---

##### `TokenUrl`<sup>Optional</sup> <a name="TokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.tokenUrl"></a>

```go
TokenUrl *string
```

- *Type:* *string

The token endpoint of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#token_url AgentIdentityAuthProvider#token_url}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

&agentidentityauthprovider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider {
	AdditionalParameters: *map[string]*string,
	ClientAssertionJwtAuth: github.com/cdktn-io/cdktn-provider-google-go/google/v22.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth,
	ClientSecretAuth: github.com/cdktn-io/cdktn-provider-google-go/google/v22.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth,
	CustomIssuer: github.com/cdktn-io/cdktn-provider-google-go/google/v22.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer,
	IdTokenInput: github.com/cdktn-io/cdktn-provider-google-go/google/v22.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.additionalParameters">AdditionalParameters</a></code> | <code>*map[string]*string</code> | Optional. Additional parameters to be passed to the token endpoint. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.clientAssertionJwtAuth">ClientAssertionJwtAuth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a></code> | client_assertion_jwt_auth block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.clientSecretAuth">ClientSecretAuth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a></code> | client_secret_auth block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.customIssuer">CustomIssuer</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a></code> | custom_issuer block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.idTokenInput">IdTokenInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a></code> | id_token_input block. |

---

##### `AdditionalParameters`<sup>Optional</sup> <a name="AdditionalParameters" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.additionalParameters"></a>

```go
AdditionalParameters *map[string]*string
```

- *Type:* *map[string]*string

Optional. Additional parameters to be passed to the token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#additional_parameters AgentIdentityAuthProvider#additional_parameters}

---

##### `ClientAssertionJwtAuth`<sup>Optional</sup> <a name="ClientAssertionJwtAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.clientAssertionJwtAuth"></a>

```go
ClientAssertionJwtAuth AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a>

client_assertion_jwt_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_assertion_jwt_auth AgentIdentityAuthProvider#client_assertion_jwt_auth}

---

##### `ClientSecretAuth`<sup>Optional</sup> <a name="ClientSecretAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.clientSecretAuth"></a>

```go
ClientSecretAuth AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a>

client_secret_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret_auth AgentIdentityAuthProvider#client_secret_auth}

---

##### `CustomIssuer`<sup>Optional</sup> <a name="CustomIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.customIssuer"></a>

```go
CustomIssuer AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a>

custom_issuer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#custom_issuer AgentIdentityAuthProvider#custom_issuer}

---

##### `IdTokenInput`<sup>Optional</sup> <a name="IdTokenInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.idTokenInput"></a>

```go
IdTokenInput AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a>

id_token_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#id_token_input AgentIdentityAuthProvider#id_token_input}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

&agentidentityauthprovider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth {
	ClientId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth.property.clientId">ClientId</a></code> | <code>*string</code> | Required. The client identifier. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Required. The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_id AgentIdentityAuthProvider#client_id}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

&agentidentityauthprovider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth {
	ClientId: *string,
	ClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth.property.clientId">ClientId</a></code> | <code>*string</code> | Required. The client identifier. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Required. Input only. The client secret. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Required. The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_id AgentIdentityAuthProvider#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Required. Input only. The client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret AgentIdentityAuthProvider#client_secret}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

&agentidentityauthprovider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer {
	TokenUrl: *string,
	Issuer: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | Required. The token endpoint of the target OAuth authorization server to retrieve resource tokens. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer.property.issuer">Issuer</a></code> | <code>*string</code> | Optional. The issuer identifier of the target Authorization Server. |

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer.property.tokenUrl"></a>

```go
TokenUrl *string
```

- *Type:* *string

Required. The token endpoint of the target OAuth authorization server to retrieve resource tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#token_url AgentIdentityAuthProvider#token_url}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Optional. The issuer identifier of the target Authorization Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#issuer AgentIdentityAuthProvider#issuer}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

&agentidentityauthprovider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput {
	IdJagAdditionalClaims: *string,
	IdJagAuthProvider: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput.property.idJagAdditionalClaims">IdJagAdditionalClaims</a></code> | <code>*string</code> | Optional additional claims to include when fetching an ID-JAG, represented as a JSON-encoded string. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput.property.idJagAuthProvider">IdJagAuthProvider</a></code> | <code>*string</code> | The resource name of the ID-JAG auth provider. Format: 'projects/{{project}}/locations/{{location}}/authProviders/{{auth_provider}}'. |

---

##### `IdJagAdditionalClaims`<sup>Optional</sup> <a name="IdJagAdditionalClaims" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput.property.idJagAdditionalClaims"></a>

```go
IdJagAdditionalClaims *string
```

- *Type:* *string

Optional additional claims to include when fetching an ID-JAG, represented as a JSON-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#id_jag_additional_claims AgentIdentityAuthProvider#id_jag_additional_claims}

---

##### `IdJagAuthProvider`<sup>Optional</sup> <a name="IdJagAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput.property.idJagAuthProvider"></a>

```go
IdJagAuthProvider *string
```

- *Type:* *string

The resource name of the ID-JAG auth provider. Format: 'projects/{{project}}/locations/{{location}}/authProviders/{{auth_provider}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#id_jag_auth_provider AgentIdentityAuthProvider#id_jag_auth_provider}

---

### AgentIdentityAuthProviderConfig <a name="AgentIdentityAuthProviderConfig" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

&agentidentityauthprovider.AgentIdentityAuthProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AuthProviderId: *string,
	AuthProviderTypeParams: github.com/cdktn-io/cdktn-provider-google-go/google/v22.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams,
	Location: *string,
	AllowedScopes: *[]*string,
	BlockedScopes: *[]*string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts,
	WorkloadIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.authProviderId">AuthProviderId</a></code> | <code>*string</code> | The ID to use for the AuthProvider, which will become the final segment of the AuthProvider's resource name. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.authProviderTypeParams">AuthProviderTypeParams</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a></code> | auth_provider_type_params block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.allowedScopes">AllowedScopes</a></code> | <code>*[]*string</code> | List of scopes that are allowed to be requested for this auth_provider. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.blockedScopes">BlockedScopes</a></code> | <code>*[]*string</code> | List of scopes that are blocked from being requested for this auth_provider. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.description">Description</a></code> | <code>*string</code> | Description of the resource. Must be less than 256 characters. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#id AgentIdentityAuthProvider#id}. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#project AgentIdentityAuthProvider#project}. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.workloadIds">WorkloadIds</a></code> | <code>*[]*string</code> | Input only. Represents the workload identity in IAM 'principal://' format of the agent(s) that will use this AuthProvider. Example: 'principal://agents.global.org-${ORG_ID}.system.id.goog/resources/aiplatform/projects/{PROJECT_ID}/locations/{LOCATIONS}/reasoningEngines/{ID}'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthProviderId`<sup>Required</sup> <a name="AuthProviderId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.authProviderId"></a>

```go
AuthProviderId *string
```

- *Type:* *string

The ID to use for the AuthProvider, which will become the final segment of the AuthProvider's resource name.

This value should be 1-63 characters, and valid characters
are /a-z-/. The first character must be a lowercase letter, and the
last character must be a lowercase letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#auth_provider_id AgentIdentityAuthProvider#auth_provider_id}

---

##### `AuthProviderTypeParams`<sup>Required</sup> <a name="AuthProviderTypeParams" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.authProviderTypeParams"></a>

```go
AuthProviderTypeParams AgentIdentityAuthProviderAuthProviderTypeParams
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a>

auth_provider_type_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#auth_provider_type_params AgentIdentityAuthProvider#auth_provider_type_params}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#location AgentIdentityAuthProvider#location}

---

##### `AllowedScopes`<sup>Optional</sup> <a name="AllowedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.allowedScopes"></a>

```go
AllowedScopes *[]*string
```

- *Type:* *[]*string

List of scopes that are allowed to be requested for this auth_provider.

If this list is non-empty, only scopes within this list may be requested.
If this list is empty, all scopes may be requested.
Scopes appearing in 'blocked_scopes' are disallowed even if they appear in
'allowed_scopes'.
The number of allowed scopes is limited to 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#allowed_scopes AgentIdentityAuthProvider#allowed_scopes}

---

##### `BlockedScopes`<sup>Optional</sup> <a name="BlockedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.blockedScopes"></a>

```go
BlockedScopes *[]*string
```

- *Type:* *[]*string

List of scopes that are blocked from being requested for this auth_provider.

If a scope appears in this list, it will not be requested,
even if it also appears in 'allowed_scopes'. 'blocked_scopes' takes
precedence over 'allowed_scopes'. The number of blocked scopes is limited
to 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#blocked_scopes AgentIdentityAuthProvider#blocked_scopes}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#deletion_policy AgentIdentityAuthProvider#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the resource. Must be less than 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#description AgentIdentityAuthProvider#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#id AgentIdentityAuthProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#labels AgentIdentityAuthProvider#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#project AgentIdentityAuthProvider#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.timeouts"></a>

```go
Timeouts AgentIdentityAuthProviderTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#timeouts AgentIdentityAuthProvider#timeouts}

---

##### `WorkloadIds`<sup>Optional</sup> <a name="WorkloadIds" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.workloadIds"></a>

```go
WorkloadIds *[]*string
```

- *Type:* *[]*string

Input only. Represents the workload identity in IAM 'principal://' format of the agent(s) that will use this AuthProvider. Example: 'principal://agents.global.org-${ORG_ID}.system.id.goog/resources/aiplatform/projects/{PROJECT_ID}/locations/{LOCATIONS}/reasoningEngines/{ID}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#workload_ids AgentIdentityAuthProvider#workload_ids}

---

### AgentIdentityAuthProviderTimeouts <a name="AgentIdentityAuthProviderTimeouts" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

&agentidentityauthprovider.AgentIdentityAuthProviderTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#create AgentIdentityAuthProvider#create}. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#delete AgentIdentityAuthProvider#delete}. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#update AgentIdentityAuthProvider#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#create AgentIdentityAuthProvider#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#delete AgentIdentityAuthProvider#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#update AgentIdentityAuthProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.NewAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() AgentIdentityAuthProviderAuthProviderTypeParamsApiKey
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.NewAgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.resetAuthorizationDetails">ResetAuthorizationDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationDetails` <a name="ResetAuthorizationDetails" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.resetAuthorizationDetails"></a>

```go
func ResetAuthorizationDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.authorizationDetailsInput">AuthorizationDetailsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.connectorInput">ConnectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.authorizationDetails">AuthorizationDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.connector">Connector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationDetailsInput`<sup>Optional</sup> <a name="AuthorizationDetailsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.authorizationDetailsInput"></a>

```go
func AuthorizationDetailsInput() *string
```

- *Type:* *string

---

##### `ConnectorInput`<sup>Optional</sup> <a name="ConnectorInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.connectorInput"></a>

```go
func ConnectorInput() *string
```

- *Type:* *string

---

##### `AuthorizationDetails`<sup>Required</sup> <a name="AuthorizationDetails" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.authorizationDetails"></a>

```go
func AuthorizationDetails() *string
```

- *Type:* *string

---

##### `Connector`<sup>Required</sup> <a name="Connector" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.connector"></a>

```go
func Connector() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList <a name="AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.NewAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.get"></a>

```go
func Get(index *f64) AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.NewAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.NewAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putConnectorReferenceAuthProvider">PutConnectorReferenceAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth">PutThreeLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth">PutTwoLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putXaaAuthProvider">PutXaaAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetConnectorReferenceAuthProvider">ResetConnectorReferenceAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetThreeLeggedOauth">ResetThreeLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetTwoLeggedOauth">ResetTwoLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetXaaAuthProvider">ResetXaaAuthProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putApiKey"></a>

```go
func PutApiKey(value AgentIdentityAuthProviderAuthProviderTypeParamsApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

---

##### `PutConnectorReferenceAuthProvider` <a name="PutConnectorReferenceAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putConnectorReferenceAuthProvider"></a>

```go
func PutConnectorReferenceAuthProvider(value AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putConnectorReferenceAuthProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a>

---

##### `PutThreeLeggedOauth` <a name="PutThreeLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth"></a>

```go
func PutThreeLeggedOauth(value AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

---

##### `PutTwoLeggedOauth` <a name="PutTwoLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth"></a>

```go
func PutTwoLeggedOauth(value AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

---

##### `PutXaaAuthProvider` <a name="PutXaaAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putXaaAuthProvider"></a>

```go
func PutXaaAuthProvider(value AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putXaaAuthProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetConnectorReferenceAuthProvider` <a name="ResetConnectorReferenceAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetConnectorReferenceAuthProvider"></a>

```go
func ResetConnectorReferenceAuthProvider()
```

##### `ResetThreeLeggedOauth` <a name="ResetThreeLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetThreeLeggedOauth"></a>

```go
func ResetThreeLeggedOauth()
```

##### `ResetTwoLeggedOauth` <a name="ResetTwoLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetTwoLeggedOauth"></a>

```go
func ResetTwoLeggedOauth()
```

##### `ResetXaaAuthProvider` <a name="ResetXaaAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetXaaAuthProvider"></a>

```go
func ResetXaaAuthProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.connectorReferenceAuthProvider">ConnectorReferenceAuthProvider</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.geAuthProvider">GeAuthProvider</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList">AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauth">ThreeLeggedOauth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauth">TwoLeggedOauth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.xaaAuthProvider">XaaAuthProvider</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.connectorReferenceAuthProviderInput">ConnectorReferenceAuthProviderInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauthInput">ThreeLeggedOauthInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauthInput">TwoLeggedOauthInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.xaaAuthProviderInput">XaaAuthProviderInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKey"></a>

```go
func ApiKey() AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference</a>

---

##### `ConnectorReferenceAuthProvider`<sup>Required</sup> <a name="ConnectorReferenceAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.connectorReferenceAuthProvider"></a>

```go
func ConnectorReferenceAuthProvider() AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference</a>

---

##### `GeAuthProvider`<sup>Required</sup> <a name="GeAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.geAuthProvider"></a>

```go
func GeAuthProvider() AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList">AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList</a>

---

##### `ThreeLeggedOauth`<sup>Required</sup> <a name="ThreeLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauth"></a>

```go
func ThreeLeggedOauth() AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference</a>

---

##### `TwoLeggedOauth`<sup>Required</sup> <a name="TwoLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauth"></a>

```go
func TwoLeggedOauth() AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference</a>

---

##### `XaaAuthProvider`<sup>Required</sup> <a name="XaaAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.xaaAuthProvider"></a>

```go
func XaaAuthProvider() AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() AgentIdentityAuthProviderAuthProviderTypeParamsApiKey
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

---

##### `ConnectorReferenceAuthProviderInput`<sup>Optional</sup> <a name="ConnectorReferenceAuthProviderInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.connectorReferenceAuthProviderInput"></a>

```go
func ConnectorReferenceAuthProviderInput() AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a>

---

##### `ThreeLeggedOauthInput`<sup>Optional</sup> <a name="ThreeLeggedOauthInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauthInput"></a>

```go
func ThreeLeggedOauthInput() AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

---

##### `TwoLeggedOauthInput`<sup>Optional</sup> <a name="TwoLeggedOauthInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauthInput"></a>

```go
func TwoLeggedOauthInput() AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

---

##### `XaaAuthProviderInput`<sup>Optional</sup> <a name="XaaAuthProviderInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.xaaAuthProviderInput"></a>

```go
func XaaAuthProviderInput() AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() AgentIdentityAuthProviderAuthProviderTypeParams
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.NewAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetAuthorizationUrl">ResetAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWo">ResetClientSecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWoVersion">ResetClientSecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetDefaultContinueUri">ResetDefaultContinueUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetEnablePkce">ResetEnablePkce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetTokenUrl">ResetTokenUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationUrl` <a name="ResetAuthorizationUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetAuthorizationUrl"></a>

```go
func ResetAuthorizationUrl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetClientSecretWo` <a name="ResetClientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWo"></a>

```go
func ResetClientSecretWo()
```

##### `ResetClientSecretWoVersion` <a name="ResetClientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWoVersion"></a>

```go
func ResetClientSecretWoVersion()
```

##### `ResetDefaultContinueUri` <a name="ResetDefaultContinueUri" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetDefaultContinueUri"></a>

```go
func ResetDefaultContinueUri()
```

##### `ResetEnablePkce` <a name="ResetEnablePkce" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetEnablePkce"></a>

```go
func ResetEnablePkce()
```

##### `ResetTokenUrl` <a name="ResetTokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetTokenUrl"></a>

```go
func ResetTokenUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrlInput">AuthorizationUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoInput">ClientSecretWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersionInput">ClientSecretWoVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUriInput">DefaultContinueUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkceInput">EnablePkceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrl">AuthorizationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWo">ClientSecretWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersion">ClientSecretWoVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUri">DefaultContinueUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkce">EnablePkce</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.redirectUrl"></a>

```go
func RedirectUrl() *string
```

- *Type:* *string

---

##### `AuthorizationUrlInput`<sup>Optional</sup> <a name="AuthorizationUrlInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrlInput"></a>

```go
func AuthorizationUrlInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ClientSecretWoInput`<sup>Optional</sup> <a name="ClientSecretWoInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoInput"></a>

```go
func ClientSecretWoInput() *string
```

- *Type:* *string

---

##### `ClientSecretWoVersionInput`<sup>Optional</sup> <a name="ClientSecretWoVersionInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersionInput"></a>

```go
func ClientSecretWoVersionInput() *string
```

- *Type:* *string

---

##### `DefaultContinueUriInput`<sup>Optional</sup> <a name="DefaultContinueUriInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUriInput"></a>

```go
func DefaultContinueUriInput() *string
```

- *Type:* *string

---

##### `EnablePkceInput`<sup>Optional</sup> <a name="EnablePkceInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkceInput"></a>

```go
func EnablePkceInput() interface{}
```

- *Type:* interface{}

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrlInput"></a>

```go
func TokenUrlInput() *string
```

- *Type:* *string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrl"></a>

```go
func AuthorizationUrl() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### ~~`ClientSecretWo`~~<sup>Required</sup> <a name="ClientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func ClientSecretWo() *string
```

- *Type:* *string

---

##### `ClientSecretWoVersion`<sup>Required</sup> <a name="ClientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersion"></a>

```go
func ClientSecretWoVersion() *string
```

- *Type:* *string

---

##### `DefaultContinueUri`<sup>Required</sup> <a name="DefaultContinueUri" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUri"></a>

```go
func DefaultContinueUri() *string
```

- *Type:* *string

---

##### `EnablePkce`<sup>Required</sup> <a name="EnablePkce" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkce"></a>

```go
func EnablePkce() interface{}
```

- *Type:* interface{}

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrl"></a>

```go
func TokenUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.internalValue"></a>

```go
func InternalValue() AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.NewAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWo">ResetClientSecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWoVersion">ResetClientSecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetTokenUrl">ResetTokenUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetClientSecretWo` <a name="ResetClientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWo"></a>

```go
func ResetClientSecretWo()
```

##### `ResetClientSecretWoVersion` <a name="ResetClientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWoVersion"></a>

```go
func ResetClientSecretWoVersion()
```

##### `ResetTokenUrl` <a name="ResetTokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetTokenUrl"></a>

```go
func ResetTokenUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoInput">ClientSecretWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersionInput">ClientSecretWoVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWo">ClientSecretWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersion">ClientSecretWoVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ClientSecretWoInput`<sup>Optional</sup> <a name="ClientSecretWoInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoInput"></a>

```go
func ClientSecretWoInput() *string
```

- *Type:* *string

---

##### `ClientSecretWoVersionInput`<sup>Optional</sup> <a name="ClientSecretWoVersionInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersionInput"></a>

```go
func ClientSecretWoVersionInput() *string
```

- *Type:* *string

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrlInput"></a>

```go
func TokenUrlInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### ~~`ClientSecretWo`~~<sup>Required</sup> <a name="ClientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func ClientSecretWo() *string
```

- *Type:* *string

---

##### `ClientSecretWoVersion`<sup>Required</sup> <a name="ClientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersion"></a>

```go
func ClientSecretWoVersion() *string
```

- *Type:* *string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrl"></a>

```go
func TokenUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.internalValue"></a>

```go
func InternalValue() AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.NewAgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.NewAgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.NewAgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.resetIssuer"></a>

```go
func ResetIssuer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.tokenUrlInput"></a>

```go
func TokenUrlInput() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.tokenUrl"></a>

```go
func TokenUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.internalValue"></a>

```go
func InternalValue() AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.NewAgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resetIdJagAdditionalClaims">ResetIdJagAdditionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resetIdJagAuthProvider">ResetIdJagAuthProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdJagAdditionalClaims` <a name="ResetIdJagAdditionalClaims" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resetIdJagAdditionalClaims"></a>

```go
func ResetIdJagAdditionalClaims()
```

##### `ResetIdJagAuthProvider` <a name="ResetIdJagAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resetIdJagAuthProvider"></a>

```go
func ResetIdJagAuthProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAdditionalClaimsInput">IdJagAdditionalClaimsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAuthProviderInput">IdJagAuthProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAdditionalClaims">IdJagAdditionalClaims</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAuthProvider">IdJagAuthProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdJagAdditionalClaimsInput`<sup>Optional</sup> <a name="IdJagAdditionalClaimsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAdditionalClaimsInput"></a>

```go
func IdJagAdditionalClaimsInput() *string
```

- *Type:* *string

---

##### `IdJagAuthProviderInput`<sup>Optional</sup> <a name="IdJagAuthProviderInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAuthProviderInput"></a>

```go
func IdJagAuthProviderInput() *string
```

- *Type:* *string

---

##### `IdJagAdditionalClaims`<sup>Required</sup> <a name="IdJagAdditionalClaims" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAdditionalClaims"></a>

```go
func IdJagAdditionalClaims() *string
```

- *Type:* *string

---

##### `IdJagAuthProvider`<sup>Required</sup> <a name="IdJagAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAuthProvider"></a>

```go
func IdJagAuthProvider() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.internalValue"></a>

```go
func InternalValue() AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.NewAgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putClientAssertionJwtAuth">PutClientAssertionJwtAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putClientSecretAuth">PutClientSecretAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putCustomIssuer">PutCustomIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putIdTokenInput">PutIdTokenInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetAdditionalParameters">ResetAdditionalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetClientAssertionJwtAuth">ResetClientAssertionJwtAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetClientSecretAuth">ResetClientSecretAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetCustomIssuer">ResetCustomIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetIdTokenInput">ResetIdTokenInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientAssertionJwtAuth` <a name="PutClientAssertionJwtAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putClientAssertionJwtAuth"></a>

```go
func PutClientAssertionJwtAuth(value AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putClientAssertionJwtAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a>

---

##### `PutClientSecretAuth` <a name="PutClientSecretAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putClientSecretAuth"></a>

```go
func PutClientSecretAuth(value AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putClientSecretAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a>

---

##### `PutCustomIssuer` <a name="PutCustomIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putCustomIssuer"></a>

```go
func PutCustomIssuer(value AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putCustomIssuer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a>

---

##### `PutIdTokenInput` <a name="PutIdTokenInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putIdTokenInput"></a>

```go
func PutIdTokenInput(value AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putIdTokenInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a>

---

##### `ResetAdditionalParameters` <a name="ResetAdditionalParameters" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetAdditionalParameters"></a>

```go
func ResetAdditionalParameters()
```

##### `ResetClientAssertionJwtAuth` <a name="ResetClientAssertionJwtAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetClientAssertionJwtAuth"></a>

```go
func ResetClientAssertionJwtAuth()
```

##### `ResetClientSecretAuth` <a name="ResetClientSecretAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetClientSecretAuth"></a>

```go
func ResetClientSecretAuth()
```

##### `ResetCustomIssuer` <a name="ResetCustomIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetCustomIssuer"></a>

```go
func ResetCustomIssuer()
```

##### `ResetIdTokenInput` <a name="ResetIdTokenInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetIdTokenInput"></a>

```go
func ResetIdTokenInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientAssertionJwtAuth">ClientAssertionJwtAuth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientSecretAuth">ClientSecretAuth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.customIssuer">CustomIssuer</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.idTokenInput">IdTokenInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.additionalParametersInput">AdditionalParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientAssertionJwtAuthInput">ClientAssertionJwtAuthInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientSecretAuthInput">ClientSecretAuthInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.customIssuerInput">CustomIssuerInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.idTokenInputInput">IdTokenInputInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.additionalParameters">AdditionalParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientAssertionJwtAuth`<sup>Required</sup> <a name="ClientAssertionJwtAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientAssertionJwtAuth"></a>

```go
func ClientAssertionJwtAuth() AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference</a>

---

##### `ClientSecretAuth`<sup>Required</sup> <a name="ClientSecretAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientSecretAuth"></a>

```go
func ClientSecretAuth() AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference</a>

---

##### `CustomIssuer`<sup>Required</sup> <a name="CustomIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.customIssuer"></a>

```go
func CustomIssuer() AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference</a>

---

##### `IdTokenInput`<sup>Required</sup> <a name="IdTokenInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.idTokenInput"></a>

```go
func IdTokenInput() AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference</a>

---

##### `AdditionalParametersInput`<sup>Optional</sup> <a name="AdditionalParametersInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.additionalParametersInput"></a>

```go
func AdditionalParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ClientAssertionJwtAuthInput`<sup>Optional</sup> <a name="ClientAssertionJwtAuthInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientAssertionJwtAuthInput"></a>

```go
func ClientAssertionJwtAuthInput() AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a>

---

##### `ClientSecretAuthInput`<sup>Optional</sup> <a name="ClientSecretAuthInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientSecretAuthInput"></a>

```go
func ClientSecretAuthInput() AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a>

---

##### `CustomIssuerInput`<sup>Optional</sup> <a name="CustomIssuerInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.customIssuerInput"></a>

```go
func CustomIssuerInput() AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a>

---

##### `IdTokenInputInput`<sup>Optional</sup> <a name="IdTokenInputInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.idTokenInputInput"></a>

```go
func IdTokenInputInput() AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a>

---

##### `AdditionalParameters`<sup>Required</sup> <a name="AdditionalParameters" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.additionalParameters"></a>

```go
func AdditionalParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a>

---


### AgentIdentityAuthProviderTimeoutsOutputReference <a name="AgentIdentityAuthProviderTimeoutsOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/agentidentityauthprovider"

agentidentityauthprovider.NewAgentIdentityAuthProviderTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentIdentityAuthProviderTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



