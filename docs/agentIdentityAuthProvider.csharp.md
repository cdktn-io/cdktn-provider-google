# `agentIdentityAuthProvider` Submodule <a name="`agentIdentityAuthProvider` Submodule" id="@cdktn/provider-google.agentIdentityAuthProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentIdentityAuthProvider <a name="AgentIdentityAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider google_agent_identity_auth_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProvider(Construct Scope, string Id, AgentIdentityAuthProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig">AgentIdentityAuthProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthProviderTypeParams` <a name="PutAuthProviderTypeParams" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.putAuthProviderTypeParams"></a>

```csharp
private void PutAuthProviderTypeParams(AgentIdentityAuthProviderAuthProviderTypeParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.putAuthProviderTypeParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.putTimeouts"></a>

```csharp
private void PutTimeouts(AgentIdentityAuthProviderTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a>

---

##### `ResetAllowedScopes` <a name="ResetAllowedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetAllowedScopes"></a>

```csharp
private void ResetAllowedScopes()
```

##### `ResetBlockedScopes` <a name="ResetBlockedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetBlockedScopes"></a>

```csharp
private void ResetBlockedScopes()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkloadIds` <a name="ResetWorkloadIds" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetWorkloadIds"></a>

```csharp
private void ResetWorkloadIds()
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

```csharp
using Io.Cdktn.Providers.Google;

AgentIdentityAuthProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

AgentIdentityAuthProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

AgentIdentityAuthProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

AgentIdentityAuthProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AgentIdentityAuthProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AgentIdentityAuthProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AgentIdentityAuthProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AgentIdentityAuthProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderTypeParams">AuthProviderTypeParams</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deleted">Deleted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference">AgentIdentityAuthProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.allowedScopesInput">AllowedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderIdInput">AuthProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderTypeParamsInput">AuthProviderTypeParamsInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.blockedScopesInput">BlockedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.workloadIdsInput">WorkloadIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.allowedScopes">AllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderId">AuthProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.blockedScopes">BlockedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.workloadIds">WorkloadIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthProviderTypeParams`<sup>Required</sup> <a name="AuthProviderTypeParams" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderTypeParams"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference AuthProviderTypeParams { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Deleted`<sup>Required</sup> <a name="Deleted" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deleted"></a>

```csharp
public IResolvable Deleted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.timeouts"></a>

```csharp
public AgentIdentityAuthProviderTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference">AgentIdentityAuthProviderTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AllowedScopesInput`<sup>Optional</sup> <a name="AllowedScopesInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.allowedScopesInput"></a>

```csharp
public string[] AllowedScopesInput { get; }
```

- *Type:* string[]

---

##### `AuthProviderIdInput`<sup>Optional</sup> <a name="AuthProviderIdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderIdInput"></a>

```csharp
public string AuthProviderIdInput { get; }
```

- *Type:* string

---

##### `AuthProviderTypeParamsInput`<sup>Optional</sup> <a name="AuthProviderTypeParamsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderTypeParamsInput"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParams AuthProviderTypeParamsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a>

---

##### `BlockedScopesInput`<sup>Optional</sup> <a name="BlockedScopesInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.blockedScopesInput"></a>

```csharp
public string[] BlockedScopesInput { get; }
```

- *Type:* string[]

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.timeoutsInput"></a>

```csharp
public IResolvable|AgentIdentityAuthProviderTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a>

---

##### `WorkloadIdsInput`<sup>Optional</sup> <a name="WorkloadIdsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.workloadIdsInput"></a>

```csharp
public string[] WorkloadIdsInput { get; }
```

- *Type:* string[]

---

##### `AllowedScopes`<sup>Required</sup> <a name="AllowedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.allowedScopes"></a>

```csharp
public string[] AllowedScopes { get; }
```

- *Type:* string[]

---

##### `AuthProviderId`<sup>Required</sup> <a name="AuthProviderId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderId"></a>

```csharp
public string AuthProviderId { get; }
```

- *Type:* string

---

##### `BlockedScopes`<sup>Required</sup> <a name="BlockedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.blockedScopes"></a>

```csharp
public string[] BlockedScopes { get; }
```

- *Type:* string[]

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WorkloadIds`<sup>Required</sup> <a name="WorkloadIds" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.workloadIds"></a>

```csharp
public string[] WorkloadIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentIdentityAuthProviderAuthProviderTypeParams <a name="AgentIdentityAuthProviderAuthProviderTypeParams" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParams {
    AgentIdentityAuthProviderAuthProviderTypeParamsApiKey ApiKey = null,
    AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider ConnectorReferenceAuthProvider = null,
    AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth ThreeLeggedOauth = null,
    AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth TwoLeggedOauth = null,
    AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider XaaAuthProvider = null
};
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

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsApiKey ApiKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#api_key AgentIdentityAuthProvider#api_key}

---

##### `ConnectorReferenceAuthProvider`<sup>Optional</sup> <a name="ConnectorReferenceAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.connectorReferenceAuthProvider"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider ConnectorReferenceAuthProvider { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a>

connector_reference_auth_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#connector_reference_auth_provider AgentIdentityAuthProvider#connector_reference_auth_provider}

---

##### `ThreeLeggedOauth`<sup>Optional</sup> <a name="ThreeLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.threeLeggedOauth"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth ThreeLeggedOauth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

three_legged_oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#three_legged_oauth AgentIdentityAuthProvider#three_legged_oauth}

---

##### `TwoLeggedOauth`<sup>Optional</sup> <a name="TwoLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.twoLeggedOauth"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth TwoLeggedOauth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

two_legged_oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#two_legged_oauth AgentIdentityAuthProvider#two_legged_oauth}

---

##### `XaaAuthProvider`<sup>Optional</sup> <a name="XaaAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.xaaAuthProvider"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider XaaAuthProvider { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a>

xaa_auth_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#xaa_auth_provider AgentIdentityAuthProvider#xaa_auth_provider}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsApiKey <a name="AgentIdentityAuthProviderAuthProviderTypeParamsApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsApiKey {
    string ApiKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey.property.apiKey">ApiKey</a></code> | <code>string</code> | Input only. The API key for this auth_provider. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

Input only. The API key for this auth_provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#api_key AgentIdentityAuthProvider#api_key}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider <a name="AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider {
    string Connector,
    string AuthorizationDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider.property.connector">Connector</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider.property.authorizationDetails">AuthorizationDetails</a></code> | <code>string</code> | Optional. Rich Authorization Requests (RFC 9396) detailing targeted OAuth resources/scopes, formatted as a JSON array of JSON objects. |

---

##### `Connector`<sup>Required</sup> <a name="Connector" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider.property.connector"></a>

```csharp
public string Connector { get; set; }
```

- *Type:* string

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

```csharp
public string AuthorizationDetails { get; set; }
```

- *Type:* string

Optional. Rich Authorization Requests (RFC 9396) detailing targeted OAuth resources/scopes, formatted as a JSON array of JSON objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#authorization_details AgentIdentityAuthProvider#authorization_details}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider <a name="AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider {

};
```


### AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth <a name="AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth {
    string AuthorizationUrl = null,
    string ClientId = null,
    string ClientSecret = null,
    string ClientSecretWo = null,
    string ClientSecretWoVersion = null,
    string DefaultContinueUri = null,
    bool|IResolvable EnablePkce = null,
    string TokenUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.authorizationUrl">AuthorizationUrl</a></code> | <code>string</code> | The authorization endpoint to send users to for consenting to delegate to the agent. eg. "https://auth.atlassian.com/authorize". |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientId">ClientId</a></code> | <code>string</code> | The client ID of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWoVersion">ClientSecretWoVersion</a></code> | <code>string</code> | Triggers update of 'client_secret_wo' write-only. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.defaultContinueUri">DefaultContinueUri</a></code> | <code>string</code> | The default continue URI for 3LO flow and it will be used when no continue URI is provided in the RetrieveCredentials request. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.enablePkce">EnablePkce</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables Proof Key for Code Exchange (PKCE) for the OAuth flow to prevent authorization code interception attacks. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | The token endpoint for requesting tokens on behalf of an end user. eg. "https://auth.atlassian.com/oauth/token". |

---

##### `AuthorizationUrl`<sup>Optional</sup> <a name="AuthorizationUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.authorizationUrl"></a>

```csharp
public string AuthorizationUrl { get; set; }
```

- *Type:* string

The authorization endpoint to send users to for consenting to delegate to the agent. eg. "https://auth.atlassian.com/authorize".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#authorization_url AgentIdentityAuthProvider#authorization_url}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client ID of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_id AgentIdentityAuthProvider#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret AgentIdentityAuthProvider#client_secret}

---

##### `ClientSecretWo`<sup>Optional</sup> <a name="ClientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWo"></a>

```csharp
public string ClientSecretWo { get; set; }
```

- *Type:* string

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret_wo AgentIdentityAuthProvider#client_secret_wo}

---

##### `ClientSecretWoVersion`<sup>Optional</sup> <a name="ClientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWoVersion"></a>

```csharp
public string ClientSecretWoVersion { get; set; }
```

- *Type:* string

Triggers update of 'client_secret_wo' write-only.

Increment this value when an update to 'client_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret_wo_version AgentIdentityAuthProvider#client_secret_wo_version}

---

##### `DefaultContinueUri`<sup>Optional</sup> <a name="DefaultContinueUri" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.defaultContinueUri"></a>

```csharp
public string DefaultContinueUri { get; set; }
```

- *Type:* string

The default continue URI for 3LO flow and it will be used when no continue URI is provided in the RetrieveCredentials request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#default_continue_uri AgentIdentityAuthProvider#default_continue_uri}

---

##### `EnablePkce`<sup>Optional</sup> <a name="EnablePkce" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.enablePkce"></a>

```csharp
public bool|IResolvable EnablePkce { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables Proof Key for Code Exchange (PKCE) for the OAuth flow to prevent authorization code interception attacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#enable_pkce AgentIdentityAuthProvider#enable_pkce}

---

##### `TokenUrl`<sup>Optional</sup> <a name="TokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; set; }
```

- *Type:* string

The token endpoint for requesting tokens on behalf of an end user. eg. "https://auth.atlassian.com/oauth/token".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#token_url AgentIdentityAuthProvider#token_url}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth <a name="AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth {
    string ClientId = null,
    string ClientSecret = null,
    string ClientSecretWo = null,
    string ClientSecretWoVersion = null,
    string TokenUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientId">ClientId</a></code> | <code>string</code> | The client ID of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWoVersion">ClientSecretWoVersion</a></code> | <code>string</code> | Triggers update of 'client_secret_wo' write-only. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | The token endpoint of the OAuth client. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client ID of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_id AgentIdentityAuthProvider#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret AgentIdentityAuthProvider#client_secret}

---

##### `ClientSecretWo`<sup>Optional</sup> <a name="ClientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWo"></a>

```csharp
public string ClientSecretWo { get; set; }
```

- *Type:* string

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret_wo AgentIdentityAuthProvider#client_secret_wo}

---

##### `ClientSecretWoVersion`<sup>Optional</sup> <a name="ClientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWoVersion"></a>

```csharp
public string ClientSecretWoVersion { get; set; }
```

- *Type:* string

Triggers update of 'client_secret_wo' write-only.

Increment this value when an update to 'client_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret_wo_version AgentIdentityAuthProvider#client_secret_wo_version}

---

##### `TokenUrl`<sup>Optional</sup> <a name="TokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; set; }
```

- *Type:* string

The token endpoint of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#token_url AgentIdentityAuthProvider#token_url}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider {
    System.Collections.Generic.IDictionary<string, string> AdditionalParameters = null,
    AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth ClientAssertionJwtAuth = null,
    AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth ClientSecretAuth = null,
    AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer CustomIssuer = null,
    AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput IdTokenInput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.additionalParameters">AdditionalParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Additional parameters to be passed to the token endpoint. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.clientAssertionJwtAuth">ClientAssertionJwtAuth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a></code> | client_assertion_jwt_auth block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.clientSecretAuth">ClientSecretAuth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a></code> | client_secret_auth block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.customIssuer">CustomIssuer</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a></code> | custom_issuer block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.idTokenInput">IdTokenInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a></code> | id_token_input block. |

---

##### `AdditionalParameters`<sup>Optional</sup> <a name="AdditionalParameters" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.additionalParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Additional parameters to be passed to the token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#additional_parameters AgentIdentityAuthProvider#additional_parameters}

---

##### `ClientAssertionJwtAuth`<sup>Optional</sup> <a name="ClientAssertionJwtAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.clientAssertionJwtAuth"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth ClientAssertionJwtAuth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a>

client_assertion_jwt_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_assertion_jwt_auth AgentIdentityAuthProvider#client_assertion_jwt_auth}

---

##### `ClientSecretAuth`<sup>Optional</sup> <a name="ClientSecretAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.clientSecretAuth"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth ClientSecretAuth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a>

client_secret_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret_auth AgentIdentityAuthProvider#client_secret_auth}

---

##### `CustomIssuer`<sup>Optional</sup> <a name="CustomIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.customIssuer"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer CustomIssuer { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a>

custom_issuer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#custom_issuer AgentIdentityAuthProvider#custom_issuer}

---

##### `IdTokenInput`<sup>Optional</sup> <a name="IdTokenInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.idTokenInput"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput IdTokenInput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a>

id_token_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#id_token_input AgentIdentityAuthProvider#id_token_input}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth {
    string ClientId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth.property.clientId">ClientId</a></code> | <code>string</code> | Required. The client identifier. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Required. The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_id AgentIdentityAuthProvider#client_id}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth {
    string ClientId,
    string ClientSecret
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth.property.clientId">ClientId</a></code> | <code>string</code> | Required. The client identifier. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Required. Input only. The client secret. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Required. The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_id AgentIdentityAuthProvider#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Required. Input only. The client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret AgentIdentityAuthProvider#client_secret}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer {
    string TokenUrl,
    string Issuer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | Required. The token endpoint of the target OAuth authorization server to retrieve resource tokens. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer.property.issuer">Issuer</a></code> | <code>string</code> | Optional. The issuer identifier of the target Authorization Server. |

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; set; }
```

- *Type:* string

Required. The token endpoint of the target OAuth authorization server to retrieve resource tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#token_url AgentIdentityAuthProvider#token_url}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Optional. The issuer identifier of the target Authorization Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#issuer AgentIdentityAuthProvider#issuer}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput {
    string IdJagAdditionalClaims = null,
    string IdJagAuthProvider = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput.property.idJagAdditionalClaims">IdJagAdditionalClaims</a></code> | <code>string</code> | Optional additional claims to include when fetching an ID-JAG, represented as a JSON-encoded string. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput.property.idJagAuthProvider">IdJagAuthProvider</a></code> | <code>string</code> | The resource name of the ID-JAG auth provider. Format: 'projects/{{project}}/locations/{{location}}/authProviders/{{auth_provider}}'. |

---

##### `IdJagAdditionalClaims`<sup>Optional</sup> <a name="IdJagAdditionalClaims" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput.property.idJagAdditionalClaims"></a>

```csharp
public string IdJagAdditionalClaims { get; set; }
```

- *Type:* string

Optional additional claims to include when fetching an ID-JAG, represented as a JSON-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#id_jag_additional_claims AgentIdentityAuthProvider#id_jag_additional_claims}

---

##### `IdJagAuthProvider`<sup>Optional</sup> <a name="IdJagAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput.property.idJagAuthProvider"></a>

```csharp
public string IdJagAuthProvider { get; set; }
```

- *Type:* string

The resource name of the ID-JAG auth provider. Format: 'projects/{{project}}/locations/{{location}}/authProviders/{{auth_provider}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#id_jag_auth_provider AgentIdentityAuthProvider#id_jag_auth_provider}

---

### AgentIdentityAuthProviderConfig <a name="AgentIdentityAuthProviderConfig" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AuthProviderId,
    AgentIdentityAuthProviderAuthProviderTypeParams AuthProviderTypeParams,
    string Location,
    string[] AllowedScopes = null,
    string[] BlockedScopes = null,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    AgentIdentityAuthProviderTimeouts Timeouts = null,
    string[] WorkloadIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.authProviderId">AuthProviderId</a></code> | <code>string</code> | The ID to use for the AuthProvider, which will become the final segment of the AuthProvider's resource name. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.authProviderTypeParams">AuthProviderTypeParams</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a></code> | auth_provider_type_params block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.allowedScopes">AllowedScopes</a></code> | <code>string[]</code> | List of scopes that are allowed to be requested for this auth_provider. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.blockedScopes">BlockedScopes</a></code> | <code>string[]</code> | List of scopes that are blocked from being requested for this auth_provider. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.description">Description</a></code> | <code>string</code> | Description of the resource. Must be less than 256 characters. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#id AgentIdentityAuthProvider#id}. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#project AgentIdentityAuthProvider#project}. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.workloadIds">WorkloadIds</a></code> | <code>string[]</code> | Input only. Represents the workload identity in IAM 'principal://' format of the agent(s) that will use this AuthProvider. Example: 'principal://agents.global.org-${ORG_ID}.system.id.goog/resources/aiplatform/projects/{PROJECT_ID}/locations/{LOCATIONS}/reasoningEngines/{ID}'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthProviderId`<sup>Required</sup> <a name="AuthProviderId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.authProviderId"></a>

```csharp
public string AuthProviderId { get; set; }
```

- *Type:* string

The ID to use for the AuthProvider, which will become the final segment of the AuthProvider's resource name.

This value should be 1-63 characters, and valid characters
are /a-z-/. The first character must be a lowercase letter, and the
last character must be a lowercase letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#auth_provider_id AgentIdentityAuthProvider#auth_provider_id}

---

##### `AuthProviderTypeParams`<sup>Required</sup> <a name="AuthProviderTypeParams" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.authProviderTypeParams"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParams AuthProviderTypeParams { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a>

auth_provider_type_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#auth_provider_type_params AgentIdentityAuthProvider#auth_provider_type_params}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#location AgentIdentityAuthProvider#location}

---

##### `AllowedScopes`<sup>Optional</sup> <a name="AllowedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.allowedScopes"></a>

```csharp
public string[] AllowedScopes { get; set; }
```

- *Type:* string[]

List of scopes that are allowed to be requested for this auth_provider.

If this list is non-empty, only scopes within this list may be requested.
If this list is empty, all scopes may be requested.
Scopes appearing in 'blocked_scopes' are disallowed even if they appear in
'allowed_scopes'.
The number of allowed scopes is limited to 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#allowed_scopes AgentIdentityAuthProvider#allowed_scopes}

---

##### `BlockedScopes`<sup>Optional</sup> <a name="BlockedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.blockedScopes"></a>

```csharp
public string[] BlockedScopes { get; set; }
```

- *Type:* string[]

List of scopes that are blocked from being requested for this auth_provider.

If a scope appears in this list, it will not be requested,
even if it also appears in 'allowed_scopes'. 'blocked_scopes' takes
precedence over 'allowed_scopes'. The number of blocked scopes is limited
to 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#blocked_scopes AgentIdentityAuthProvider#blocked_scopes}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

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

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the resource. Must be less than 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#description AgentIdentityAuthProvider#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#id AgentIdentityAuthProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#labels AgentIdentityAuthProvider#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#project AgentIdentityAuthProvider#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.timeouts"></a>

```csharp
public AgentIdentityAuthProviderTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#timeouts AgentIdentityAuthProvider#timeouts}

---

##### `WorkloadIds`<sup>Optional</sup> <a name="WorkloadIds" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.workloadIds"></a>

```csharp
public string[] WorkloadIds { get; set; }
```

- *Type:* string[]

Input only. Represents the workload identity in IAM 'principal://' format of the agent(s) that will use this AuthProvider. Example: 'principal://agents.global.org-${ORG_ID}.system.id.goog/resources/aiplatform/projects/{PROJECT_ID}/locations/{LOCATIONS}/reasoningEngines/{ID}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#workload_ids AgentIdentityAuthProvider#workload_ids}

---

### AgentIdentityAuthProviderTimeouts <a name="AgentIdentityAuthProviderTimeouts" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#create AgentIdentityAuthProvider#create}. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#delete AgentIdentityAuthProvider#delete}. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#update AgentIdentityAuthProvider#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#create AgentIdentityAuthProvider#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#delete AgentIdentityAuthProvider#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#update AgentIdentityAuthProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.internalValue"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsApiKey InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationDetails` <a name="ResetAuthorizationDetails" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.resetAuthorizationDetails"></a>

```csharp
private void ResetAuthorizationDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.authorizationDetailsInput">AuthorizationDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.connectorInput">ConnectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.authorizationDetails">AuthorizationDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.connector">Connector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationDetailsInput`<sup>Optional</sup> <a name="AuthorizationDetailsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.authorizationDetailsInput"></a>

```csharp
public string AuthorizationDetailsInput { get; }
```

- *Type:* string

---

##### `ConnectorInput`<sup>Optional</sup> <a name="ConnectorInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.connectorInput"></a>

```csharp
public string ConnectorInput { get; }
```

- *Type:* string

---

##### `AuthorizationDetails`<sup>Required</sup> <a name="AuthorizationDetails" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.authorizationDetails"></a>

```csharp
public string AuthorizationDetails { get; }
```

- *Type:* string

---

##### `Connector`<sup>Required</sup> <a name="Connector" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.connector"></a>

```csharp
public string Connector { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.internalValue"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList <a name="AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.get"></a>

```csharp
private AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.internalValue"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putApiKey"></a>

```csharp
private void PutApiKey(AgentIdentityAuthProviderAuthProviderTypeParamsApiKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

---

##### `PutConnectorReferenceAuthProvider` <a name="PutConnectorReferenceAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putConnectorReferenceAuthProvider"></a>

```csharp
private void PutConnectorReferenceAuthProvider(AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putConnectorReferenceAuthProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a>

---

##### `PutThreeLeggedOauth` <a name="PutThreeLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth"></a>

```csharp
private void PutThreeLeggedOauth(AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

---

##### `PutTwoLeggedOauth` <a name="PutTwoLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth"></a>

```csharp
private void PutTwoLeggedOauth(AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

---

##### `PutXaaAuthProvider` <a name="PutXaaAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putXaaAuthProvider"></a>

```csharp
private void PutXaaAuthProvider(AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putXaaAuthProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetConnectorReferenceAuthProvider` <a name="ResetConnectorReferenceAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetConnectorReferenceAuthProvider"></a>

```csharp
private void ResetConnectorReferenceAuthProvider()
```

##### `ResetThreeLeggedOauth` <a name="ResetThreeLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetThreeLeggedOauth"></a>

```csharp
private void ResetThreeLeggedOauth()
```

##### `ResetTwoLeggedOauth` <a name="ResetTwoLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetTwoLeggedOauth"></a>

```csharp
private void ResetTwoLeggedOauth()
```

##### `ResetXaaAuthProvider` <a name="ResetXaaAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetXaaAuthProvider"></a>

```csharp
private void ResetXaaAuthProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
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

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKey"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference</a>

---

##### `ConnectorReferenceAuthProvider`<sup>Required</sup> <a name="ConnectorReferenceAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.connectorReferenceAuthProvider"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference ConnectorReferenceAuthProvider { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference</a>

---

##### `GeAuthProvider`<sup>Required</sup> <a name="GeAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.geAuthProvider"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList GeAuthProvider { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList">AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList</a>

---

##### `ThreeLeggedOauth`<sup>Required</sup> <a name="ThreeLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauth"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference ThreeLeggedOauth { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference</a>

---

##### `TwoLeggedOauth`<sup>Required</sup> <a name="TwoLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauth"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference TwoLeggedOauth { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference</a>

---

##### `XaaAuthProvider`<sup>Required</sup> <a name="XaaAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.xaaAuthProvider"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference XaaAuthProvider { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKeyInput"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsApiKey ApiKeyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

---

##### `ConnectorReferenceAuthProviderInput`<sup>Optional</sup> <a name="ConnectorReferenceAuthProviderInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.connectorReferenceAuthProviderInput"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider ConnectorReferenceAuthProviderInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a>

---

##### `ThreeLeggedOauthInput`<sup>Optional</sup> <a name="ThreeLeggedOauthInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauthInput"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth ThreeLeggedOauthInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

---

##### `TwoLeggedOauthInput`<sup>Optional</sup> <a name="TwoLeggedOauthInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauthInput"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth TwoLeggedOauthInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

---

##### `XaaAuthProviderInput`<sup>Optional</sup> <a name="XaaAuthProviderInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.xaaAuthProviderInput"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider XaaAuthProviderInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.internalValue"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationUrl` <a name="ResetAuthorizationUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetAuthorizationUrl"></a>

```csharp
private void ResetAuthorizationUrl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretWo` <a name="ResetClientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWo"></a>

```csharp
private void ResetClientSecretWo()
```

##### `ResetClientSecretWoVersion` <a name="ResetClientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWoVersion"></a>

```csharp
private void ResetClientSecretWoVersion()
```

##### `ResetDefaultContinueUri` <a name="ResetDefaultContinueUri" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetDefaultContinueUri"></a>

```csharp
private void ResetDefaultContinueUri()
```

##### `ResetEnablePkce` <a name="ResetEnablePkce" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetEnablePkce"></a>

```csharp
private void ResetEnablePkce()
```

##### `ResetTokenUrl` <a name="ResetTokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetTokenUrl"></a>

```csharp
private void ResetTokenUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrlInput">AuthorizationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoInput">ClientSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersionInput">ClientSecretWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUriInput">DefaultContinueUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkceInput">EnablePkceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrl">AuthorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersion">ClientSecretWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUri">DefaultContinueUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkce">EnablePkce</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `AuthorizationUrlInput`<sup>Optional</sup> <a name="AuthorizationUrlInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrlInput"></a>

```csharp
public string AuthorizationUrlInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientSecretWoInput`<sup>Optional</sup> <a name="ClientSecretWoInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoInput"></a>

```csharp
public string ClientSecretWoInput { get; }
```

- *Type:* string

---

##### `ClientSecretWoVersionInput`<sup>Optional</sup> <a name="ClientSecretWoVersionInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersionInput"></a>

```csharp
public string ClientSecretWoVersionInput { get; }
```

- *Type:* string

---

##### `DefaultContinueUriInput`<sup>Optional</sup> <a name="DefaultContinueUriInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUriInput"></a>

```csharp
public string DefaultContinueUriInput { get; }
```

- *Type:* string

---

##### `EnablePkceInput`<sup>Optional</sup> <a name="EnablePkceInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkceInput"></a>

```csharp
public bool|IResolvable EnablePkceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrlInput"></a>

```csharp
public string TokenUrlInput { get; }
```

- *Type:* string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrl"></a>

```csharp
public string AuthorizationUrl { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### ~~`ClientSecretWo`~~<sup>Required</sup> <a name="ClientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string ClientSecretWo { get; }
```

- *Type:* string

---

##### `ClientSecretWoVersion`<sup>Required</sup> <a name="ClientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersion"></a>

```csharp
public string ClientSecretWoVersion { get; }
```

- *Type:* string

---

##### `DefaultContinueUri`<sup>Required</sup> <a name="DefaultContinueUri" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUri"></a>

```csharp
public string DefaultContinueUri { get; }
```

- *Type:* string

---

##### `EnablePkce`<sup>Required</sup> <a name="EnablePkce" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkce"></a>

```csharp
public bool|IResolvable EnablePkce { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.internalValue"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretWo` <a name="ResetClientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWo"></a>

```csharp
private void ResetClientSecretWo()
```

##### `ResetClientSecretWoVersion` <a name="ResetClientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWoVersion"></a>

```csharp
private void ResetClientSecretWoVersion()
```

##### `ResetTokenUrl` <a name="ResetTokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetTokenUrl"></a>

```csharp
private void ResetTokenUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoInput">ClientSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersionInput">ClientSecretWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersion">ClientSecretWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientSecretWoInput`<sup>Optional</sup> <a name="ClientSecretWoInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoInput"></a>

```csharp
public string ClientSecretWoInput { get; }
```

- *Type:* string

---

##### `ClientSecretWoVersionInput`<sup>Optional</sup> <a name="ClientSecretWoVersionInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersionInput"></a>

```csharp
public string ClientSecretWoVersionInput { get; }
```

- *Type:* string

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrlInput"></a>

```csharp
public string TokenUrlInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### ~~`ClientSecretWo`~~<sup>Required</sup> <a name="ClientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string ClientSecretWo { get; }
```

- *Type:* string

---

##### `ClientSecretWoVersion`<sup>Required</sup> <a name="ClientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersion"></a>

```csharp
public string ClientSecretWoVersion { get; }
```

- *Type:* string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.internalValue"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.internalValue"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.internalValue"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.tokenUrlInput"></a>

```csharp
public string TokenUrlInput { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.internalValue"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdJagAdditionalClaims` <a name="ResetIdJagAdditionalClaims" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resetIdJagAdditionalClaims"></a>

```csharp
private void ResetIdJagAdditionalClaims()
```

##### `ResetIdJagAuthProvider` <a name="ResetIdJagAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resetIdJagAuthProvider"></a>

```csharp
private void ResetIdJagAuthProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAdditionalClaimsInput">IdJagAdditionalClaimsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAuthProviderInput">IdJagAuthProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAdditionalClaims">IdJagAdditionalClaims</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAuthProvider">IdJagAuthProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdJagAdditionalClaimsInput`<sup>Optional</sup> <a name="IdJagAdditionalClaimsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAdditionalClaimsInput"></a>

```csharp
public string IdJagAdditionalClaimsInput { get; }
```

- *Type:* string

---

##### `IdJagAuthProviderInput`<sup>Optional</sup> <a name="IdJagAuthProviderInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAuthProviderInput"></a>

```csharp
public string IdJagAuthProviderInput { get; }
```

- *Type:* string

---

##### `IdJagAdditionalClaims`<sup>Required</sup> <a name="IdJagAdditionalClaims" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAdditionalClaims"></a>

```csharp
public string IdJagAdditionalClaims { get; }
```

- *Type:* string

---

##### `IdJagAuthProvider`<sup>Required</sup> <a name="IdJagAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAuthProvider"></a>

```csharp
public string IdJagAuthProvider { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.internalValue"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientAssertionJwtAuth` <a name="PutClientAssertionJwtAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putClientAssertionJwtAuth"></a>

```csharp
private void PutClientAssertionJwtAuth(AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putClientAssertionJwtAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a>

---

##### `PutClientSecretAuth` <a name="PutClientSecretAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putClientSecretAuth"></a>

```csharp
private void PutClientSecretAuth(AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putClientSecretAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a>

---

##### `PutCustomIssuer` <a name="PutCustomIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putCustomIssuer"></a>

```csharp
private void PutCustomIssuer(AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putCustomIssuer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a>

---

##### `PutIdTokenInput` <a name="PutIdTokenInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putIdTokenInput"></a>

```csharp
private void PutIdTokenInput(AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putIdTokenInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a>

---

##### `ResetAdditionalParameters` <a name="ResetAdditionalParameters" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetAdditionalParameters"></a>

```csharp
private void ResetAdditionalParameters()
```

##### `ResetClientAssertionJwtAuth` <a name="ResetClientAssertionJwtAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetClientAssertionJwtAuth"></a>

```csharp
private void ResetClientAssertionJwtAuth()
```

##### `ResetClientSecretAuth` <a name="ResetClientSecretAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetClientSecretAuth"></a>

```csharp
private void ResetClientSecretAuth()
```

##### `ResetCustomIssuer` <a name="ResetCustomIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetCustomIssuer"></a>

```csharp
private void ResetCustomIssuer()
```

##### `ResetIdTokenInput` <a name="ResetIdTokenInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetIdTokenInput"></a>

```csharp
private void ResetIdTokenInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientAssertionJwtAuth">ClientAssertionJwtAuth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientSecretAuth">ClientSecretAuth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.customIssuer">CustomIssuer</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.idTokenInput">IdTokenInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.additionalParametersInput">AdditionalParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientAssertionJwtAuthInput">ClientAssertionJwtAuthInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientSecretAuthInput">ClientSecretAuthInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.customIssuerInput">CustomIssuerInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.idTokenInputInput">IdTokenInputInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.additionalParameters">AdditionalParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientAssertionJwtAuth`<sup>Required</sup> <a name="ClientAssertionJwtAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientAssertionJwtAuth"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference ClientAssertionJwtAuth { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference</a>

---

##### `ClientSecretAuth`<sup>Required</sup> <a name="ClientSecretAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientSecretAuth"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference ClientSecretAuth { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference</a>

---

##### `CustomIssuer`<sup>Required</sup> <a name="CustomIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.customIssuer"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference CustomIssuer { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference</a>

---

##### `IdTokenInput`<sup>Required</sup> <a name="IdTokenInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.idTokenInput"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference IdTokenInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference</a>

---

##### `AdditionalParametersInput`<sup>Optional</sup> <a name="AdditionalParametersInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.additionalParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClientAssertionJwtAuthInput`<sup>Optional</sup> <a name="ClientAssertionJwtAuthInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientAssertionJwtAuthInput"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth ClientAssertionJwtAuthInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a>

---

##### `ClientSecretAuthInput`<sup>Optional</sup> <a name="ClientSecretAuthInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientSecretAuthInput"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth ClientSecretAuthInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a>

---

##### `CustomIssuerInput`<sup>Optional</sup> <a name="CustomIssuerInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.customIssuerInput"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer CustomIssuerInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a>

---

##### `IdTokenInputInput`<sup>Optional</sup> <a name="IdTokenInputInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.idTokenInputInput"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput IdTokenInputInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a>

---

##### `AdditionalParameters`<sup>Required</sup> <a name="AdditionalParameters" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.additionalParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.internalValue"></a>

```csharp
public AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a>

---


### AgentIdentityAuthProviderTimeoutsOutputReference <a name="AgentIdentityAuthProviderTimeoutsOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AgentIdentityAuthProviderTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AgentIdentityAuthProviderTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a>

---



