# `workloadIdentityServiceAgent` Submodule <a name="`workloadIdentityServiceAgent` Submodule" id="@cdktn/provider-google.workloadIdentityServiceAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkloadIdentityServiceAgent <a name="WorkloadIdentityServiceAgent" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/workload_identity_service_agent google_workload_identity_service_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkloadIdentityServiceAgent(Construct Scope, string Id, WorkloadIdentityServiceAgentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig">WorkloadIdentityServiceAgentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig">WorkloadIdentityServiceAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.putTimeouts"></a>

```csharp
private void PutTimeouts(WorkloadIdentityServiceAgentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkloadIdentityServiceAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

WorkloadIdentityServiceAgent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

WorkloadIdentityServiceAgent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

WorkloadIdentityServiceAgent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

WorkloadIdentityServiceAgent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WorkloadIdentityServiceAgent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkloadIdentityServiceAgent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkloadIdentityServiceAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/workload_identity_service_agent#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WorkloadIdentityServiceAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.serviceAgents">ServiceAgents</a></code> | <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList">WorkloadIdentityServiceAgentServiceAgentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference">WorkloadIdentityServiceAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ServiceAgents`<sup>Required</sup> <a name="ServiceAgents" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.serviceAgents"></a>

```csharp
public WorkloadIdentityServiceAgentServiceAgentsList ServiceAgents { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList">WorkloadIdentityServiceAgentServiceAgentsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.timeouts"></a>

```csharp
public WorkloadIdentityServiceAgentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference">WorkloadIdentityServiceAgentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.timeoutsInput"></a>

```csharp
public IResolvable|WorkloadIdentityServiceAgentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkloadIdentityServiceAgentConfig <a name="WorkloadIdentityServiceAgentConfig" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkloadIdentityServiceAgentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Parent,
    string Id = null,
    WorkloadIdentityServiceAgentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.parent">Parent</a></code> | <code>string</code> | The parent resource path. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/workload_identity_service_agent#id WorkloadIdentityServiceAgent#id}. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent resource path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/workload_identity_service_agent#parent WorkloadIdentityServiceAgent#parent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/workload_identity_service_agent#id WorkloadIdentityServiceAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.timeouts"></a>

```csharp
public WorkloadIdentityServiceAgentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/workload_identity_service_agent#timeouts WorkloadIdentityServiceAgent#timeouts}

---

### WorkloadIdentityServiceAgentServiceAgents <a name="WorkloadIdentityServiceAgentServiceAgents" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkloadIdentityServiceAgentServiceAgents {

};
```


### WorkloadIdentityServiceAgentTimeouts <a name="WorkloadIdentityServiceAgentTimeouts" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkloadIdentityServiceAgentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/workload_identity_service_agent#create WorkloadIdentityServiceAgent#create}. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/workload_identity_service_agent#delete WorkloadIdentityServiceAgent#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/workload_identity_service_agent#create WorkloadIdentityServiceAgent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/workload_identity_service_agent#delete WorkloadIdentityServiceAgent#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkloadIdentityServiceAgentServiceAgentsList <a name="WorkloadIdentityServiceAgentServiceAgentsList" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkloadIdentityServiceAgentServiceAgentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.get"></a>

```csharp
private WorkloadIdentityServiceAgentServiceAgentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WorkloadIdentityServiceAgentServiceAgentsOutputReference <a name="WorkloadIdentityServiceAgentServiceAgentsOutputReference" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkloadIdentityServiceAgentServiceAgentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.container">Container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.serviceProducer">ServiceProducer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgents">WorkloadIdentityServiceAgentServiceAgents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.container"></a>

```csharp
public string Container { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `ServiceProducer`<sup>Required</sup> <a name="ServiceProducer" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.serviceProducer"></a>

```csharp
public string ServiceProducer { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.internalValue"></a>

```csharp
public WorkloadIdentityServiceAgentServiceAgents InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgents">WorkloadIdentityServiceAgentServiceAgents</a>

---


### WorkloadIdentityServiceAgentTimeoutsOutputReference <a name="WorkloadIdentityServiceAgentTimeoutsOutputReference" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkloadIdentityServiceAgentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkloadIdentityServiceAgentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a>

---



