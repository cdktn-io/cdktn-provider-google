# `discoveryEngineProjectProvision` Submodule <a name="`discoveryEngineProjectProvision` Submodule" id="@cdktn/provider-google.discoveryEngineProjectProvision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineProjectProvision <a name="DiscoveryEngineProjectProvision" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision google_discovery_engine_project_provision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineProjectProvision(Construct Scope, string Id, DiscoveryEngineProjectProvisionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig">DiscoveryEngineProjectProvisionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig">DiscoveryEngineProjectProvisionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putSaasParams">PutSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetAcceptDataUseTerms">ResetAcceptDataUseTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetDataUseTermsVersion">ResetDataUseTermsVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetSaasParams">ResetSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSaasParams` <a name="PutSaasParams" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putSaasParams"></a>

```csharp
private void PutSaasParams(DiscoveryEngineProjectProvisionSaasParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putSaasParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putTimeouts"></a>

```csharp
private void PutTimeouts(DiscoveryEngineProjectProvisionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a>

---

##### `ResetAcceptDataUseTerms` <a name="ResetAcceptDataUseTerms" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetAcceptDataUseTerms"></a>

```csharp
private void ResetAcceptDataUseTerms()
```

##### `ResetDataUseTermsVersion` <a name="ResetDataUseTermsVersion" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetDataUseTermsVersion"></a>

```csharp
private void ResetDataUseTermsVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSaasParams` <a name="ResetSaasParams" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetSaasParams"></a>

```csharp
private void ResetSaasParams()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineProjectProvision resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineProjectProvision.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineProjectProvision.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineProjectProvision.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineProjectProvision.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DiscoveryEngineProjectProvision resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineProjectProvision to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineProjectProvision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineProjectProvision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.saasParams">SaasParams</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference">DiscoveryEngineProjectProvisionSaasParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference">DiscoveryEngineProjectProvisionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.acceptDataUseTermsInput">AcceptDataUseTermsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dataUseTermsVersionInput">DataUseTermsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.saasParamsInput">SaasParamsInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.acceptDataUseTerms">AcceptDataUseTerms</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dataUseTermsVersion">DataUseTermsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SaasParams`<sup>Required</sup> <a name="SaasParams" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.saasParams"></a>

```csharp
public DiscoveryEngineProjectProvisionSaasParamsOutputReference SaasParams { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference">DiscoveryEngineProjectProvisionSaasParamsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.timeouts"></a>

```csharp
public DiscoveryEngineProjectProvisionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference">DiscoveryEngineProjectProvisionTimeoutsOutputReference</a>

---

##### `AcceptDataUseTermsInput`<sup>Optional</sup> <a name="AcceptDataUseTermsInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.acceptDataUseTermsInput"></a>

```csharp
public bool|IResolvable AcceptDataUseTermsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataUseTermsVersionInput`<sup>Optional</sup> <a name="DataUseTermsVersionInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dataUseTermsVersionInput"></a>

```csharp
public string DataUseTermsVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SaasParamsInput`<sup>Optional</sup> <a name="SaasParamsInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.saasParamsInput"></a>

```csharp
public DiscoveryEngineProjectProvisionSaasParams SaasParamsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.timeoutsInput"></a>

```csharp
public IResolvable|DiscoveryEngineProjectProvisionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a>

---

##### `AcceptDataUseTerms`<sup>Required</sup> <a name="AcceptDataUseTerms" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.acceptDataUseTerms"></a>

```csharp
public bool|IResolvable AcceptDataUseTerms { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataUseTermsVersion`<sup>Required</sup> <a name="DataUseTermsVersion" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dataUseTermsVersion"></a>

```csharp
public string DataUseTermsVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineProjectProvisionConfig <a name="DiscoveryEngineProjectProvisionConfig" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineProjectProvisionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable AcceptDataUseTerms = null,
    string DataUseTermsVersion = null,
    string Id = null,
    string Location = null,
    string Project = null,
    DiscoveryEngineProjectProvisionSaasParams SaasParams = null,
    DiscoveryEngineProjectProvisionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.acceptDataUseTerms">AcceptDataUseTerms</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms). |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.dataUseTermsVersion">DataUseTermsVersion</a></code> | <code>string</code> | The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#id DiscoveryEngineProjectProvision#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.location">Location</a></code> | <code>string</code> | The geographic location in which to provision the project, such as 'global', 'us', or 'eu'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#project DiscoveryEngineProjectProvision#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.saasParams">SaasParams</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a></code> | saas_params block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AcceptDataUseTerms`<sup>Optional</sup> <a name="AcceptDataUseTerms" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.acceptDataUseTerms"></a>

```csharp
public bool|IResolvable AcceptDataUseTerms { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#accept_data_use_terms DiscoveryEngineProjectProvision#accept_data_use_terms}

---

##### `DataUseTermsVersion`<sup>Optional</sup> <a name="DataUseTermsVersion" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.dataUseTermsVersion"></a>

```csharp
public string DataUseTermsVersion { get; set; }
```

- *Type:* string

The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#data_use_terms_version DiscoveryEngineProjectProvision#data_use_terms_version}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#id DiscoveryEngineProjectProvision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location in which to provision the project, such as 'global', 'us', or 'eu'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#location DiscoveryEngineProjectProvision#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#project DiscoveryEngineProjectProvision#project}.

---

##### `SaasParams`<sup>Optional</sup> <a name="SaasParams" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.saasParams"></a>

```csharp
public DiscoveryEngineProjectProvisionSaasParams SaasParams { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a>

saas_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#saas_params DiscoveryEngineProjectProvision#saas_params}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.timeouts"></a>

```csharp
public DiscoveryEngineProjectProvisionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#timeouts DiscoveryEngineProjectProvision#timeouts}

---

### DiscoveryEngineProjectProvisionSaasParams <a name="DiscoveryEngineProjectProvisionSaasParams" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineProjectProvisionSaasParams {
    bool|IResolvable AcceptBizQos = null,
    bool|IResolvable IsBiz = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams.property.acceptBizQos">AcceptBizQos</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the Terms for business edition quality of service. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams.property.isBiz">IsBiz</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the current request is for Business edition ('true') or not ('false'). |

---

##### `AcceptBizQos`<sup>Optional</sup> <a name="AcceptBizQos" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams.property.acceptBizQos"></a>

```csharp
public bool|IResolvable AcceptBizQos { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the Terms for business edition quality of service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#accept_biz_qos DiscoveryEngineProjectProvision#accept_biz_qos}

---

##### `IsBiz`<sup>Optional</sup> <a name="IsBiz" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams.property.isBiz"></a>

```csharp
public bool|IResolvable IsBiz { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the current request is for Business edition ('true') or not ('false').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#is_biz DiscoveryEngineProjectProvision#is_biz}

---

### DiscoveryEngineProjectProvisionTimeouts <a name="DiscoveryEngineProjectProvisionTimeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineProjectProvisionTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#create DiscoveryEngineProjectProvision#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#delete DiscoveryEngineProjectProvision#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#create DiscoveryEngineProjectProvision#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#delete DiscoveryEngineProjectProvision#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineProjectProvisionSaasParamsOutputReference <a name="DiscoveryEngineProjectProvisionSaasParamsOutputReference" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineProjectProvisionSaasParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resetAcceptBizQos">ResetAcceptBizQos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resetIsBiz">ResetIsBiz</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceptBizQos` <a name="ResetAcceptBizQos" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resetAcceptBizQos"></a>

```csharp
private void ResetAcceptBizQos()
```

##### `ResetIsBiz` <a name="ResetIsBiz" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resetIsBiz"></a>

```csharp
private void ResetIsBiz()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQosInput">AcceptBizQosInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBizInput">IsBizInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQos">AcceptBizQos</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBiz">IsBiz</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceptBizQosInput`<sup>Optional</sup> <a name="AcceptBizQosInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQosInput"></a>

```csharp
public bool|IResolvable AcceptBizQosInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsBizInput`<sup>Optional</sup> <a name="IsBizInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBizInput"></a>

```csharp
public bool|IResolvable IsBizInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AcceptBizQos`<sup>Required</sup> <a name="AcceptBizQos" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQos"></a>

```csharp
public bool|IResolvable AcceptBizQos { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsBiz`<sup>Required</sup> <a name="IsBiz" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBiz"></a>

```csharp
public bool|IResolvable IsBiz { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineProjectProvisionSaasParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a>

---


### DiscoveryEngineProjectProvisionTimeoutsOutputReference <a name="DiscoveryEngineProjectProvisionTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineProjectProvisionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineProjectProvisionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a>

---



