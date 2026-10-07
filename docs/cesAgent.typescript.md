# `cesAgent` Submodule <a name="`cesAgent` Submodule" id="@cdktn/provider-google.cesAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesAgent <a name="CesAgent" id="@cdktn/provider-google.cesAgent.CesAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent google_ces_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgent(scope: Construct, id: string, config: CesAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig">CesAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentConfig">CesAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putAfterAgentCallbacks">putAfterAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putAfterModelCallbacks">putAfterModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putAfterToolCallbacks">putAfterToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putBeforeAgentCallbacks">putBeforeAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putBeforeModelCallbacks">putBeforeModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putBeforeToolCallbacks">putBeforeToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putLlmAgent">putLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putModelSettings">putModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putRemoteA2AAgent">putRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent">putRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putToolsets">putToolsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putTransferRules">putTransferRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetAfterAgentCallbacks">resetAfterAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetAfterModelCallbacks">resetAfterModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetAfterToolCallbacks">resetAfterToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetAgentId">resetAgentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetBeforeAgentCallbacks">resetBeforeAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetBeforeModelCallbacks">resetBeforeModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetBeforeToolCallbacks">resetBeforeToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetChildAgents">resetChildAgents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetGuardrails">resetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetLlmAgent">resetLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetModelSettings">resetModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetRemoteA2AAgent">resetRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetRemoteDialogflowAgent">resetRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetTools">resetTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetToolsets">resetToolsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetTransferRules">resetTransferRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesAgent.CesAgent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesAgent.CesAgent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cesAgent.CesAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesAgent.CesAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cesAgent.CesAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cesAgent.CesAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cesAgent.CesAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cesAgent.CesAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cesAgent.CesAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cesAgent.CesAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cesAgent.CesAgent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesAgent.CesAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cesAgent.CesAgent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cesAgent.CesAgent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesAgent.CesAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cesAgent.CesAgent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cesAgent.CesAgent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesAgent.CesAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cesAgent.CesAgent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAfterAgentCallbacks` <a name="putAfterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterAgentCallbacks"></a>

```typescript
public putAfterAgentCallbacks(value: IResolvable | CesAgentAfterAgentCallbacks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterAgentCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>[]

---

##### `putAfterModelCallbacks` <a name="putAfterModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterModelCallbacks"></a>

```typescript
public putAfterModelCallbacks(value: IResolvable | CesAgentAfterModelCallbacks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterModelCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>[]

---

##### `putAfterToolCallbacks` <a name="putAfterToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterToolCallbacks"></a>

```typescript
public putAfterToolCallbacks(value: IResolvable | CesAgentAfterToolCallbacks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterToolCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>[]

---

##### `putBeforeAgentCallbacks` <a name="putBeforeAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeAgentCallbacks"></a>

```typescript
public putBeforeAgentCallbacks(value: IResolvable | CesAgentBeforeAgentCallbacks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeAgentCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>[]

---

##### `putBeforeModelCallbacks` <a name="putBeforeModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeModelCallbacks"></a>

```typescript
public putBeforeModelCallbacks(value: IResolvable | CesAgentBeforeModelCallbacks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeModelCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>[]

---

##### `putBeforeToolCallbacks` <a name="putBeforeToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeToolCallbacks"></a>

```typescript
public putBeforeToolCallbacks(value: IResolvable | CesAgentBeforeToolCallbacks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeToolCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>[]

---

##### `putLlmAgent` <a name="putLlmAgent" id="@cdktn/provider-google.cesAgent.CesAgent.putLlmAgent"></a>

```typescript
public putLlmAgent(value: CesAgentLlmAgent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putLlmAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

---

##### `putModelSettings` <a name="putModelSettings" id="@cdktn/provider-google.cesAgent.CesAgent.putModelSettings"></a>

```typescript
public putModelSettings(value: CesAgentModelSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

---

##### `putRemoteA2AAgent` <a name="putRemoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteA2AAgent"></a>

```typescript
public putRemoteA2AAgent(value: CesAgentRemoteA2AAgent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteA2AAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

---

##### `putRemoteDialogflowAgent` <a name="putRemoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent"></a>

```typescript
public putRemoteDialogflowAgent(value: CesAgentRemoteDialogflowAgent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cesAgent.CesAgent.putTimeouts"></a>

```typescript
public putTimeouts(value: CesAgentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a>

---

##### `putToolsets` <a name="putToolsets" id="@cdktn/provider-google.cesAgent.CesAgent.putToolsets"></a>

```typescript
public putToolsets(value: IResolvable | CesAgentToolsets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putToolsets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>[]

---

##### `putTransferRules` <a name="putTransferRules" id="@cdktn/provider-google.cesAgent.CesAgent.putTransferRules"></a>

```typescript
public putTransferRules(value: IResolvable | CesAgentTransferRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putTransferRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>[]

---

##### `resetAfterAgentCallbacks` <a name="resetAfterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetAfterAgentCallbacks"></a>

```typescript
public resetAfterAgentCallbacks(): void
```

##### `resetAfterModelCallbacks` <a name="resetAfterModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetAfterModelCallbacks"></a>

```typescript
public resetAfterModelCallbacks(): void
```

##### `resetAfterToolCallbacks` <a name="resetAfterToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetAfterToolCallbacks"></a>

```typescript
public resetAfterToolCallbacks(): void
```

##### `resetAgentId` <a name="resetAgentId" id="@cdktn/provider-google.cesAgent.CesAgent.resetAgentId"></a>

```typescript
public resetAgentId(): void
```

##### `resetBeforeAgentCallbacks` <a name="resetBeforeAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetBeforeAgentCallbacks"></a>

```typescript
public resetBeforeAgentCallbacks(): void
```

##### `resetBeforeModelCallbacks` <a name="resetBeforeModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetBeforeModelCallbacks"></a>

```typescript
public resetBeforeModelCallbacks(): void
```

##### `resetBeforeToolCallbacks` <a name="resetBeforeToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetBeforeToolCallbacks"></a>

```typescript
public resetBeforeToolCallbacks(): void
```

##### `resetChildAgents` <a name="resetChildAgents" id="@cdktn/provider-google.cesAgent.CesAgent.resetChildAgents"></a>

```typescript
public resetChildAgents(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cesAgent.CesAgent.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesAgent.CesAgent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGuardrails` <a name="resetGuardrails" id="@cdktn/provider-google.cesAgent.CesAgent.resetGuardrails"></a>

```typescript
public resetGuardrails(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cesAgent.CesAgent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-google.cesAgent.CesAgent.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetLlmAgent` <a name="resetLlmAgent" id="@cdktn/provider-google.cesAgent.CesAgent.resetLlmAgent"></a>

```typescript
public resetLlmAgent(): void
```

##### `resetModelSettings` <a name="resetModelSettings" id="@cdktn/provider-google.cesAgent.CesAgent.resetModelSettings"></a>

```typescript
public resetModelSettings(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.cesAgent.CesAgent.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRemoteA2AAgent` <a name="resetRemoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgent.resetRemoteA2AAgent"></a>

```typescript
public resetRemoteA2AAgent(): void
```

##### `resetRemoteDialogflowAgent` <a name="resetRemoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgent.resetRemoteDialogflowAgent"></a>

```typescript
public resetRemoteDialogflowAgent(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cesAgent.CesAgent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTools` <a name="resetTools" id="@cdktn/provider-google.cesAgent.CesAgent.resetTools"></a>

```typescript
public resetTools(): void
```

##### `resetToolsets` <a name="resetToolsets" id="@cdktn/provider-google.cesAgent.CesAgent.resetToolsets"></a>

```typescript
public resetToolsets(): void
```

##### `resetTransferRules` <a name="resetTransferRules" id="@cdktn/provider-google.cesAgent.CesAgent.resetTransferRules"></a>

```typescript
public resetTransferRules(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CesAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cesAgent.CesAgent.isConstruct"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

cesAgent.CesAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesAgent.CesAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cesAgent.CesAgent.isTerraformElement"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

cesAgent.CesAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesAgent.CesAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cesAgent.CesAgent.isTerraformResource"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

cesAgent.CesAgent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesAgent.CesAgent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

cesAgent.CesAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CesAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CesAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CesAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CesAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterAgentCallbacks">afterAgentCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList">CesAgentAfterAgentCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterModelCallbacks">afterModelCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList">CesAgentAfterModelCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterToolCallbacks">afterToolCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList">CesAgentAfterToolCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeAgentCallbacks">beforeAgentCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList">CesAgentBeforeAgentCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeModelCallbacks">beforeModelCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList">CesAgentBeforeModelCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeToolCallbacks">beforeToolCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList">CesAgentBeforeToolCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.generatedSummary">generatedSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.llmAgent">llmAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference">CesAgentLlmAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference">CesAgentModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.remoteA2AAgent">remoteA2AAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference">CesAgentRemoteA2AAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.remoteDialogflowAgent">remoteDialogflowAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference">CesAgentRemoteDialogflowAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference">CesAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.toolsets">toolsets</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList">CesAgentToolsetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.transferRules">transferRules</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList">CesAgentTransferRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterAgentCallbacksInput">afterAgentCallbacksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterModelCallbacksInput">afterModelCallbacksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterToolCallbacksInput">afterToolCallbacksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.agentIdInput">agentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.appInput">appInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeAgentCallbacksInput">beforeAgentCallbacksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeModelCallbacksInput">beforeModelCallbacksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeToolCallbacksInput">beforeToolCallbacksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.childAgentsInput">childAgentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.guardrailsInput">guardrailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.llmAgentInput">llmAgentInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.modelSettingsInput">modelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.remoteA2AAgentInput">remoteA2AAgentInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.remoteDialogflowAgentInput">remoteDialogflowAgentInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.toolsetsInput">toolsetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.toolsInput">toolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.transferRulesInput">transferRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.app">app</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.childAgents">childAgents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.guardrails">guardrails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.tools">tools</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesAgent.CesAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cesAgent.CesAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cesAgent.CesAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cesAgent.CesAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cesAgent.CesAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cesAgent.CesAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesAgent.CesAgent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesAgent.CesAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesAgent.CesAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesAgent.CesAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesAgent.CesAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesAgent.CesAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesAgent.CesAgent.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `afterAgentCallbacks`<sup>Required</sup> <a name="afterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterAgentCallbacks"></a>

```typescript
public readonly afterAgentCallbacks: CesAgentAfterAgentCallbacksList;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList">CesAgentAfterAgentCallbacksList</a>

---

##### `afterModelCallbacks`<sup>Required</sup> <a name="afterModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterModelCallbacks"></a>

```typescript
public readonly afterModelCallbacks: CesAgentAfterModelCallbacksList;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList">CesAgentAfterModelCallbacksList</a>

---

##### `afterToolCallbacks`<sup>Required</sup> <a name="afterToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterToolCallbacks"></a>

```typescript
public readonly afterToolCallbacks: CesAgentAfterToolCallbacksList;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList">CesAgentAfterToolCallbacksList</a>

---

##### `beforeAgentCallbacks`<sup>Required</sup> <a name="beforeAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeAgentCallbacks"></a>

```typescript
public readonly beforeAgentCallbacks: CesAgentBeforeAgentCallbacksList;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList">CesAgentBeforeAgentCallbacksList</a>

---

##### `beforeModelCallbacks`<sup>Required</sup> <a name="beforeModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeModelCallbacks"></a>

```typescript
public readonly beforeModelCallbacks: CesAgentBeforeModelCallbacksList;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList">CesAgentBeforeModelCallbacksList</a>

---

##### `beforeToolCallbacks`<sup>Required</sup> <a name="beforeToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeToolCallbacks"></a>

```typescript
public readonly beforeToolCallbacks: CesAgentBeforeToolCallbacksList;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList">CesAgentBeforeToolCallbacksList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.cesAgent.CesAgent.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesAgent.CesAgent.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `generatedSummary`<sup>Required</sup> <a name="generatedSummary" id="@cdktn/provider-google.cesAgent.CesAgent.property.generatedSummary"></a>

```typescript
public readonly generatedSummary: string;
```

- *Type:* string

---

##### `llmAgent`<sup>Required</sup> <a name="llmAgent" id="@cdktn/provider-google.cesAgent.CesAgent.property.llmAgent"></a>

```typescript
public readonly llmAgent: CesAgentLlmAgentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference">CesAgentLlmAgentOutputReference</a>

---

##### `modelSettings`<sup>Required</sup> <a name="modelSettings" id="@cdktn/provider-google.cesAgent.CesAgent.property.modelSettings"></a>

```typescript
public readonly modelSettings: CesAgentModelSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference">CesAgentModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesAgent.CesAgent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `remoteA2AAgent`<sup>Required</sup> <a name="remoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgent.property.remoteA2AAgent"></a>

```typescript
public readonly remoteA2AAgent: CesAgentRemoteA2AAgentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference">CesAgentRemoteA2AAgentOutputReference</a>

---

##### `remoteDialogflowAgent`<sup>Required</sup> <a name="remoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgent.property.remoteDialogflowAgent"></a>

```typescript
public readonly remoteDialogflowAgent: CesAgentRemoteDialogflowAgentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference">CesAgentRemoteDialogflowAgentOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesAgent.CesAgent.property.timeouts"></a>

```typescript
public readonly timeouts: CesAgentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference">CesAgentTimeoutsOutputReference</a>

---

##### `toolsets`<sup>Required</sup> <a name="toolsets" id="@cdktn/provider-google.cesAgent.CesAgent.property.toolsets"></a>

```typescript
public readonly toolsets: CesAgentToolsetsList;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList">CesAgentToolsetsList</a>

---

##### `transferRules`<sup>Required</sup> <a name="transferRules" id="@cdktn/provider-google.cesAgent.CesAgent.property.transferRules"></a>

```typescript
public readonly transferRules: CesAgentTransferRulesList;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList">CesAgentTransferRulesList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.cesAgent.CesAgent.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `afterAgentCallbacksInput`<sup>Optional</sup> <a name="afterAgentCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterAgentCallbacksInput"></a>

```typescript
public readonly afterAgentCallbacksInput: IResolvable | CesAgentAfterAgentCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>[]

---

##### `afterModelCallbacksInput`<sup>Optional</sup> <a name="afterModelCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterModelCallbacksInput"></a>

```typescript
public readonly afterModelCallbacksInput: IResolvable | CesAgentAfterModelCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>[]

---

##### `afterToolCallbacksInput`<sup>Optional</sup> <a name="afterToolCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterToolCallbacksInput"></a>

```typescript
public readonly afterToolCallbacksInput: IResolvable | CesAgentAfterToolCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>[]

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.agentIdInput"></a>

```typescript
public readonly agentIdInput: string;
```

- *Type:* string

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.appInput"></a>

```typescript
public readonly appInput: string;
```

- *Type:* string

---

##### `beforeAgentCallbacksInput`<sup>Optional</sup> <a name="beforeAgentCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeAgentCallbacksInput"></a>

```typescript
public readonly beforeAgentCallbacksInput: IResolvable | CesAgentBeforeAgentCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>[]

---

##### `beforeModelCallbacksInput`<sup>Optional</sup> <a name="beforeModelCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeModelCallbacksInput"></a>

```typescript
public readonly beforeModelCallbacksInput: IResolvable | CesAgentBeforeModelCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>[]

---

##### `beforeToolCallbacksInput`<sup>Optional</sup> <a name="beforeToolCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeToolCallbacksInput"></a>

```typescript
public readonly beforeToolCallbacksInput: IResolvable | CesAgentBeforeToolCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>[]

---

##### `childAgentsInput`<sup>Optional</sup> <a name="childAgentsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.childAgentsInput"></a>

```typescript
public readonly childAgentsInput: string[];
```

- *Type:* string[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `guardrailsInput`<sup>Optional</sup> <a name="guardrailsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.guardrailsInput"></a>

```typescript
public readonly guardrailsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `llmAgentInput`<sup>Optional</sup> <a name="llmAgentInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.llmAgentInput"></a>

```typescript
public readonly llmAgentInput: CesAgentLlmAgent;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `modelSettingsInput`<sup>Optional</sup> <a name="modelSettingsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.modelSettingsInput"></a>

```typescript
public readonly modelSettingsInput: CesAgentModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `remoteA2AAgentInput`<sup>Optional</sup> <a name="remoteA2AAgentInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.remoteA2AAgentInput"></a>

```typescript
public readonly remoteA2AAgentInput: CesAgentRemoteA2AAgent;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

---

##### `remoteDialogflowAgentInput`<sup>Optional</sup> <a name="remoteDialogflowAgentInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.remoteDialogflowAgentInput"></a>

```typescript
public readonly remoteDialogflowAgentInput: CesAgentRemoteDialogflowAgent;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CesAgentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a>

---

##### `toolsetsInput`<sup>Optional</sup> <a name="toolsetsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.toolsetsInput"></a>

```typescript
public readonly toolsetsInput: IResolvable | CesAgentToolsets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>[]

---

##### `toolsInput`<sup>Optional</sup> <a name="toolsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.toolsInput"></a>

```typescript
public readonly toolsInput: string[];
```

- *Type:* string[]

---

##### `transferRulesInput`<sup>Optional</sup> <a name="transferRulesInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.transferRulesInput"></a>

```typescript
public readonly transferRulesInput: IResolvable | CesAgentTransferRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>[]

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-google.cesAgent.CesAgent.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesAgent.CesAgent.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

---

##### `childAgents`<sup>Required</sup> <a name="childAgents" id="@cdktn/provider-google.cesAgent.CesAgent.property.childAgents"></a>

```typescript
public readonly childAgents: string[];
```

- *Type:* string[]

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesAgent.CesAgent.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesAgent.CesAgent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktn/provider-google.cesAgent.CesAgent.property.guardrails"></a>

```typescript
public readonly guardrails: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-google.cesAgent.CesAgent.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesAgent.CesAgent.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesAgent.CesAgent.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google.cesAgent.CesAgent.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesAgent.CesAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CesAgentAfterAgentCallbacks <a name="CesAgentAfterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentAfterAgentCallbacks: cesAgent.CesAgentAfterAgentCallbacks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.description">description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentAfterModelCallbacks <a name="CesAgentAfterModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentAfterModelCallbacks: cesAgent.CesAgentAfterModelCallbacks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.description">description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentAfterToolCallbacks <a name="CesAgentAfterToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentAfterToolCallbacks: cesAgent.CesAgentAfterToolCallbacks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.description">description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentBeforeAgentCallbacks <a name="CesAgentBeforeAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentBeforeAgentCallbacks: cesAgent.CesAgentBeforeAgentCallbacks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.description">description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentBeforeModelCallbacks <a name="CesAgentBeforeModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentBeforeModelCallbacks: cesAgent.CesAgentBeforeModelCallbacks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.description">description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentBeforeToolCallbacks <a name="CesAgentBeforeToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentBeforeToolCallbacks: cesAgent.CesAgentBeforeToolCallbacks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.description">description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentConfig <a name="CesAgentConfig" id="@cdktn/provider-google.cesAgent.CesAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentConfig.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentConfig: cesAgent.CesAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.app">app</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterAgentCallbacks">afterAgentCallbacks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>[]</code> | after_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterModelCallbacks">afterModelCallbacks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>[]</code> | after_model_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterToolCallbacks">afterToolCallbacks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>[]</code> | after_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.agentId">agentId</a></code> | <code>string</code> | The ID to use for the agent, which will become the final component of the agent's resource name. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeAgentCallbacks">beforeAgentCallbacks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>[]</code> | before_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeModelCallbacks">beforeModelCallbacks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>[]</code> | before_model_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeToolCallbacks">beforeToolCallbacks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>[]</code> | before_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.childAgents">childAgents</a></code> | <code>string[]</code> | List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.description">description</a></code> | <code>string</code> | Human-readable description of the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.guardrails">guardrails</a></code> | <code>string[]</code> | List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.instruction">instruction</a></code> | <code>string</code> | Instructions for the LLM model to guide the agent's behavior. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.llmAgent">llmAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a></code> | llm_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#project CesAgent#project}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.remoteA2AAgent">remoteA2AAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a></code> | remote_a2a_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.remoteDialogflowAgent">remoteDialogflowAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a></code> | remote_dialogflow_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.tools">tools</a></code> | <code>string[]</code> | List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.toolsets">toolsets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>[]</code> | toolsets block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.transferRules">transferRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>[]</code> | transfer_rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#app CesAgent#app}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#display_name CesAgent#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#location CesAgent#location}

---

##### `afterAgentCallbacks`<sup>Optional</sup> <a name="afterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterAgentCallbacks"></a>

```typescript
public readonly afterAgentCallbacks: IResolvable | CesAgentAfterAgentCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>[]

after_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_agent_callbacks CesAgent#after_agent_callbacks}

---

##### `afterModelCallbacks`<sup>Optional</sup> <a name="afterModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterModelCallbacks"></a>

```typescript
public readonly afterModelCallbacks: IResolvable | CesAgentAfterModelCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>[]

after_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_model_callbacks CesAgent#after_model_callbacks}

---

##### `afterToolCallbacks`<sup>Optional</sup> <a name="afterToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterToolCallbacks"></a>

```typescript
public readonly afterToolCallbacks: IResolvable | CesAgentAfterToolCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>[]

after_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_tool_callbacks CesAgent#after_tool_callbacks}

---

##### `agentId`<sup>Optional</sup> <a name="agentId" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

The ID to use for the agent, which will become the final component of the agent's resource name.

If not provided, a unique ID will be
automatically assigned for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_id CesAgent#agent_id}

---

##### `beforeAgentCallbacks`<sup>Optional</sup> <a name="beforeAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeAgentCallbacks"></a>

```typescript
public readonly beforeAgentCallbacks: IResolvable | CesAgentBeforeAgentCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>[]

before_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_agent_callbacks CesAgent#before_agent_callbacks}

---

##### `beforeModelCallbacks`<sup>Optional</sup> <a name="beforeModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeModelCallbacks"></a>

```typescript
public readonly beforeModelCallbacks: IResolvable | CesAgentBeforeModelCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>[]

before_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_model_callbacks CesAgent#before_model_callbacks}

---

##### `beforeToolCallbacks`<sup>Optional</sup> <a name="beforeToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeToolCallbacks"></a>

```typescript
public readonly beforeToolCallbacks: IResolvable | CesAgentBeforeToolCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>[]

before_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_tool_callbacks CesAgent#before_tool_callbacks}

---

##### `childAgents`<sup>Optional</sup> <a name="childAgents" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.childAgents"></a>

```typescript
public readonly childAgents: string[];
```

- *Type:* string[]

List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#child_agents CesAgent#child_agents}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#deletion_policy CesAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.guardrails"></a>

```typescript
public readonly guardrails: string[];
```

- *Type:* string[]

List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#guardrails CesAgent#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

Instructions for the LLM model to guide the agent's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#instruction CesAgent#instruction}

---

##### `llmAgent`<sup>Optional</sup> <a name="llmAgent" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.llmAgent"></a>

```typescript
public readonly llmAgent: CesAgentLlmAgent;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

llm_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#llm_agent CesAgent#llm_agent}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.modelSettings"></a>

```typescript
public readonly modelSettings: CesAgentModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#model_settings CesAgent#model_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#project CesAgent#project}.

---

##### `remoteA2AAgent`<sup>Optional</sup> <a name="remoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.remoteA2AAgent"></a>

```typescript
public readonly remoteA2AAgent: CesAgentRemoteA2AAgent;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

remote_a2a_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#remote_a2a_agent CesAgent#remote_a2a_agent}

---

##### `remoteDialogflowAgent`<sup>Optional</sup> <a name="remoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.remoteDialogflowAgent"></a>

```typescript
public readonly remoteDialogflowAgent: CesAgentRemoteDialogflowAgent;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a>

remote_dialogflow_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#remote_dialogflow_agent CesAgent#remote_dialogflow_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CesAgentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#timeouts CesAgent#timeouts}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tools CesAgent#tools}

---

##### `toolsets`<sup>Optional</sup> <a name="toolsets" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.toolsets"></a>

```typescript
public readonly toolsets: IResolvable | CesAgentToolsets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>[]

toolsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#toolsets CesAgent#toolsets}

---

##### `transferRules`<sup>Optional</sup> <a name="transferRules" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.transferRules"></a>

```typescript
public readonly transferRules: IResolvable | CesAgentTransferRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>[]

transfer_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#transfer_rules CesAgent#transfer_rules}

---

### CesAgentLlmAgent <a name="CesAgentLlmAgent" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgent.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentLlmAgent: cesAgent.CesAgentLlmAgent = { ... }
```


### CesAgentModelSettings <a name="CesAgentModelSettings" id="@cdktn/provider-google.cesAgent.CesAgentModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentModelSettings.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentModelSettings: cesAgent.CesAgentModelSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings.property.model">model</a></code> | <code>string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings.property.temperature">temperature</a></code> | <code>number</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesAgent.CesAgentModelSettings.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#model CesAgent#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesAgent.CesAgentModelSettings.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#temperature CesAgent#temperature}

---

### CesAgentRemoteA2AAgent <a name="CesAgentRemoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentRemoteA2AAgent: cesAgent.CesAgentRemoteA2AAgent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent.property.a2AConfig">a2AConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a></code> | a2a_config block. |

---

##### `a2AConfig`<sup>Required</sup> <a name="a2AConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent.property.a2AConfig"></a>

```typescript
public readonly a2AConfig: CesAgentRemoteA2AAgentA2AConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a>

a2a_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#a2a_config CesAgent#a2a_config}

---

### CesAgentRemoteA2AAgentA2AConfig <a name="CesAgentRemoteA2AAgentA2AConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentRemoteA2AAgentA2AConfig: cesAgent.CesAgentRemoteA2AAgentA2AConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.agentCard">agentCard</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | agent_card block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.agentRegistry">agentRegistry</a></code> | <code>string</code> | Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.contextId">contextId</a></code> | <code>string</code> | If not empty, interactions with the remote A2A agent will use this context ID. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.inputVariableMapping">inputVariableMapping</a></code> | <code>{[ key: string ]: string}</code> | Mapping of input variable names of remote agent to GECX variable names. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.outputVariableMapping">outputVariableMapping</a></code> | <code>{[ key: string ]: string}</code> | Mapping of output variable names of remote agent to GECX variable names. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.streamingEnabled">streamingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether streaming is enabled for the remote agent. |

---

##### `agentCard`<sup>Optional</sup> <a name="agentCard" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.agentCard"></a>

```typescript
public readonly agentCard: CesAgentRemoteA2AAgentA2AConfigAgentCard;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a>

agent_card block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_card CesAgent#agent_card}

---

##### `agentRegistry`<sup>Optional</sup> <a name="agentRegistry" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.agentRegistry"></a>

```typescript
public readonly agentRegistry: string;
```

- *Type:* string

Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_registry CesAgent#agent_registry}

---

##### `apiAuthentication`<sup>Optional</sup> <a name="apiAuthentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.apiAuthentication"></a>

```typescript
public readonly apiAuthentication: CesAgentRemoteA2AAgentA2AConfigApiAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_authentication CesAgent#api_authentication}

---

##### `contextId`<sup>Optional</sup> <a name="contextId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.contextId"></a>

```typescript
public readonly contextId: string;
```

- *Type:* string

If not empty, interactions with the remote A2A agent will use this context ID.

This context_id field can refer to a session variable like
'$context.variables.order_agent_session_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#context_id CesAgent#context_id}

---

##### `inputVariableMapping`<sup>Optional</sup> <a name="inputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.inputVariableMapping"></a>

```typescript
public readonly inputVariableMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Mapping of input variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_variable_mapping CesAgent#input_variable_mapping}

---

##### `outputVariableMapping`<sup>Optional</sup> <a name="outputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.outputVariableMapping"></a>

```typescript
public readonly outputVariableMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Mapping of output variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_variable_mapping CesAgent#output_variable_mapping}

---

##### `streamingEnabled`<sup>Optional</sup> <a name="streamingEnabled" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.streamingEnabled"></a>

```typescript
public readonly streamingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether streaming is enabled for the remote agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#streaming_enabled CesAgent#streaming_enabled}

---

### CesAgentRemoteA2AAgentA2AConfigAgentCard <a name="CesAgentRemoteA2AAgentA2AConfigAgentCard" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentRemoteA2AAgentA2AConfigAgentCard: cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.description">description</a></code> | <code>string</code> | A description of the agent's domain of action/solution space. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.name">name</a></code> | <code>string</code> | A human-readable name for the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.skills">skills</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]</code> | skills block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.supportedInterfaces">supportedInterfaces</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]</code> | supported_interfaces block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.version">version</a></code> | <code>string</code> | The version of the agent. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the agent's domain of action/solution space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-readable name for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#name CesAgent#name}

---

##### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.skills"></a>

```typescript
public readonly skills: IResolvable | CesAgentRemoteA2AAgentA2AConfigAgentCardSkills[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]

skills block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#skills CesAgent#skills}

---

##### `supportedInterfaces`<sup>Required</sup> <a name="supportedInterfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.supportedInterfaces"></a>

```typescript
public readonly supportedInterfaces: IResolvable | CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]

supported_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#supported_interfaces CesAgent#supported_interfaces}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#version CesAgent#version}

---

### CesAgentRemoteA2AAgentA2AConfigAgentCardSkills <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSkills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentRemoteA2AAgentA2AConfigAgentCardSkills: cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.description">description</a></code> | <code>string</code> | A detailed description of the skill. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.id">id</a></code> | <code>string</code> | A unique identifier for the agent's skill. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.name">name</a></code> | <code>string</code> | A human-readable name for the skill. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.tags">tags</a></code> | <code>string[]</code> | A set of keywords describing the skill's capabilities. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.examples">examples</a></code> | <code>string[]</code> | Example prompts or scenarios that this skill can handle. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.inputModes">inputModes</a></code> | <code>string[]</code> | The set of supported input media types for this skill, overriding the agent's defaults. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.outputModes">outputModes</a></code> | <code>string[]</code> | The set of supported output media types for this skill, overriding the agent's defaults. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A detailed description of the skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the agent's skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-readable name for the skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#name CesAgent#name}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A set of keywords describing the skill's capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tags CesAgent#tags}

---

##### `examples`<sup>Optional</sup> <a name="examples" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.examples"></a>

```typescript
public readonly examples: string[];
```

- *Type:* string[]

Example prompts or scenarios that this skill can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#examples CesAgent#examples}

---

##### `inputModes`<sup>Optional</sup> <a name="inputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.inputModes"></a>

```typescript
public readonly inputModes: string[];
```

- *Type:* string[]

The set of supported input media types for this skill, overriding the agent's defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_modes CesAgent#input_modes}

---

##### `outputModes`<sup>Optional</sup> <a name="outputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.outputModes"></a>

```typescript
public readonly outputModes: string[];
```

- *Type:* string[]

The set of supported output media types for this skill, overriding the agent's defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_modes CesAgent#output_modes}

---

### CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces: cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolBinding">protocolBinding</a></code> | <code>string</code> | The protocol binding supported at this URL. The core ones officially supported are JSONRPC, GRPC and HTTP+JSON. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | The version of the A2A protocol this interface exposes. Examples: "0.3", "1.0". |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.url">url</a></code> | <code>string</code> | The URL where this interface is available. Must be a valid absolute HTTPS URL in production. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.tenant">tenant</a></code> | <code>string</code> | Tenant ID to be used in the request when calling the agent. |

---

##### `protocolBinding`<sup>Required</sup> <a name="protocolBinding" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolBinding"></a>

```typescript
public readonly protocolBinding: string;
```

- *Type:* string

The protocol binding supported at this URL. The core ones officially supported are JSONRPC, GRPC and HTTP+JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#protocol_binding CesAgent#protocol_binding}

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

The version of the A2A protocol this interface exposes. Examples: "0.3", "1.0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#protocol_version CesAgent#protocol_version}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL where this interface is available. Must be a valid absolute HTTPS URL in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#url CesAgent#url}

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

Tenant ID to be used in the request when calling the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tenant CesAgent#tenant}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthentication <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentRemoteA2AAgentA2AConfigApiAuthentication: cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_key_config CesAgent#api_key_config}

---

##### `bearerTokenConfig`<sup>Optional</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#bearer_token_config CesAgent#bearer_token_config}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#oauth_config CesAgent#oauth_config}

---

##### `serviceAccountAuthConfig`<sup>Optional</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.serviceAccountAuthConfig"></a>

```typescript
public readonly serviceAccountAuthConfig: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#service_account_auth_config CesAgent#service_account_auth_config}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig: cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.keyName">keyName</a></code> | <code>string</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.requestLocation">requestLocation</a></code> | <code>string</code> | Key location in the request. Possible values: HEADER QUERY_STRING. |

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```typescript
public readonly apiKeySecretVersion: string;
```

- *Type:* string

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_key_secret_version CesAgent#api_key_secret_version}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#key_name CesAgent#key_name}

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#request_location CesAgent#request_location}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig: cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>string</code> | The bearer token. Must be in the format '$context.variables.<name_of_variable>'. |

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The bearer token. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#token CesAgent#token}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig: cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientId">clientId</a></code> | <code>string</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientSecretVersion">clientSecretVersion</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>string[]</code> | The OAuth scopes to grant. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#client_id CesAgent#client_id}

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```typescript
public readonly clientSecretVersion: string;
```

- *Type:* string

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#client_secret_version CesAgent#client_secret_version}

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#oauth_grant_type CesAgent#oauth_grant_type}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#token_endpoint CesAgent#token_endpoint}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#scopes CesAgent#scopes}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig: cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.scopes">scopes</a></code> | <code>string[]</code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#service_account CesAgent#service_account}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#scopes CesAgent#scopes}

---

### CesAgentRemoteDialogflowAgent <a name="CesAgentRemoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentRemoteDialogflowAgent: cesAgent.CesAgentRemoteDialogflowAgent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.agent">agent</a></code> | <code>string</code> | The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.flowId">flowId</a></code> | <code>string</code> | The flow ID of the flow in the Dialogflow agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.environmentId">environmentId</a></code> | <code>string</code> | The environment ID of the Dialogflow agent be used for the agent execution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.inputVariableMapping">inputVariableMapping</a></code> | <code>{[ key: string ]: string}</code> | The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.languageCodeVariable">languageCodeVariable</a></code> | <code>string</code> | The name of the variable that contains the language code to be used for the Dialogflow session. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.outputVariableMapping">outputVariableMapping</a></code> | <code>{[ key: string ]: string}</code> | The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.respectResponseInterruptionSettings">respectResponseInterruptionSettings</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent. |

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.agent"></a>

```typescript
public readonly agent: string;
```

- *Type:* string

The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent CesAgent#agent}

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The flow ID of the flow in the Dialogflow agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#flow_id CesAgent#flow_id}

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The environment ID of the Dialogflow agent be used for the agent execution.

If not specified, the draft environment will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#environment_id CesAgent#environment_id}

---

##### `inputVariableMapping`<sup>Optional</sup> <a name="inputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.inputVariableMapping"></a>

```typescript
public readonly inputVariableMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_variable_mapping CesAgent#input_variable_mapping}

---

##### `languageCodeVariable`<sup>Optional</sup> <a name="languageCodeVariable" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.languageCodeVariable"></a>

```typescript
public readonly languageCodeVariable: string;
```

- *Type:* string

The name of the variable that contains the language code to be used for the Dialogflow session.

If unspecified, the default language code of the
Dialogflow agent will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#language_code_variable CesAgent#language_code_variable}

---

##### `outputVariableMapping`<sup>Optional</sup> <a name="outputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.outputVariableMapping"></a>

```typescript
public readonly outputVariableMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_variable_mapping CesAgent#output_variable_mapping}

---

##### `respectResponseInterruptionSettings`<sup>Optional</sup> <a name="respectResponseInterruptionSettings" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.respectResponseInterruptionSettings"></a>

```typescript
public readonly respectResponseInterruptionSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent.

* If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with ['allow_playback_interruption'](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#respect_response_interruption_settings CesAgent#respect_response_interruption_settings}

---

### CesAgentTimeouts <a name="CesAgentTimeouts" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentTimeouts: cesAgent.CesAgentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#create CesAgent#create}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#delete CesAgent#delete}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#update CesAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#create CesAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#delete CesAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#update CesAgent#update}.

---

### CesAgentToolsets <a name="CesAgentToolsets" id="@cdktn/provider-google.cesAgent.CesAgentToolsets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentToolsets.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentToolsets: cesAgent.CesAgentToolsets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets.property.toolset">toolset</a></code> | <code>string</code> | The resource name of the toolset. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets.property.toolIds">toolIds</a></code> | <code>string[]</code> | The tools IDs to filter the toolset. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.cesAgent.CesAgentToolsets.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

The resource name of the toolset. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#toolset CesAgent#toolset}

---

##### `toolIds`<sup>Optional</sup> <a name="toolIds" id="@cdktn/provider-google.cesAgent.CesAgentToolsets.property.toolIds"></a>

```typescript
public readonly toolIds: string[];
```

- *Type:* string[]

The tools IDs to filter the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tool_ids CesAgent#tool_ids}

---

### CesAgentTransferRules <a name="CesAgentTransferRules" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentTransferRules: cesAgent.CesAgentTransferRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.childAgent">childAgent</a></code> | <code>string</code> | The resource name of the child agent the rule applies to. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.direction">direction</a></code> | <code>string</code> | The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"]. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.deterministicTransfer">deterministicTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a></code> | deterministic_transfer block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.disablePlannerTransfer">disablePlannerTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a></code> | disable_planner_transfer block. |

---

##### `childAgent`<sup>Required</sup> <a name="childAgent" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.childAgent"></a>

```typescript
public readonly childAgent: string;
```

- *Type:* string

The resource name of the child agent the rule applies to. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#child_agent CesAgent#child_agent}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#direction CesAgent#direction}

---

##### `deterministicTransfer`<sup>Optional</sup> <a name="deterministicTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.deterministicTransfer"></a>

```typescript
public readonly deterministicTransfer: CesAgentTransferRulesDeterministicTransfer;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a>

deterministic_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#deterministic_transfer CesAgent#deterministic_transfer}

---

##### `disablePlannerTransfer`<sup>Optional</sup> <a name="disablePlannerTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.disablePlannerTransfer"></a>

```typescript
public readonly disablePlannerTransfer: CesAgentTransferRulesDisablePlannerTransfer;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a>

disable_planner_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disable_planner_transfer CesAgent#disable_planner_transfer}

---

### CesAgentTransferRulesDeterministicTransfer <a name="CesAgentTransferRulesDeterministicTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentTransferRulesDeterministicTransfer: cesAgent.CesAgentTransferRulesDeterministicTransfer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.property.expressionCondition">expressionCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | expression_condition block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.property.pythonCodeCondition">pythonCodeCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | python_code_condition block. |

---

##### `expressionCondition`<sup>Optional</sup> <a name="expressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.property.expressionCondition"></a>

```typescript
public readonly expressionCondition: CesAgentTransferRulesDeterministicTransferExpressionCondition;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression_condition CesAgent#expression_condition}

---

##### `pythonCodeCondition`<sup>Optional</sup> <a name="pythonCodeCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.property.pythonCodeCondition"></a>

```typescript
public readonly pythonCodeCondition: CesAgentTransferRulesDeterministicTransferPythonCodeCondition;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

python_code_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code_condition CesAgent#python_code_condition}

---

### CesAgentTransferRulesDeterministicTransferExpressionCondition <a name="CesAgentTransferRulesDeterministicTransferExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentTransferRulesDeterministicTransferExpressionCondition: cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition.property.expression">expression</a></code> | <code>string</code> | The string representation of cloud.api.Expression condition. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression CesAgent#expression}

---

### CesAgentTransferRulesDeterministicTransferPythonCodeCondition <a name="CesAgentTransferRulesDeterministicTransferPythonCodeCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentTransferRulesDeterministicTransferPythonCodeCondition: cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute. The function must be named 'should_trigger_transfer_callback'. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute. The function must be named 'should_trigger_transfer_callback'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

### CesAgentTransferRulesDisablePlannerTransfer <a name="CesAgentTransferRulesDisablePlannerTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentTransferRulesDisablePlannerTransfer: cesAgent.CesAgentTransferRulesDisablePlannerTransfer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer.property.expressionCondition">expressionCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | expression_condition block. |

---

##### `expressionCondition`<sup>Required</sup> <a name="expressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer.property.expressionCondition"></a>

```typescript
public readonly expressionCondition: CesAgentTransferRulesDisablePlannerTransferExpressionCondition;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression_condition CesAgent#expression_condition}

---

### CesAgentTransferRulesDisablePlannerTransferExpressionCondition <a name="CesAgentTransferRulesDisablePlannerTransferExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

const cesAgentTransferRulesDisablePlannerTransferExpressionCondition: cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition.property.expression">expression</a></code> | <code>string</code> | The string representation of cloud.api.Expression condition. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression CesAgent#expression}

---

## Classes <a name="Classes" id="Classes"></a>

### CesAgentAfterAgentCallbacksList <a name="CesAgentAfterAgentCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentAfterAgentCallbacksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.get"></a>

```typescript
public get(index: number): CesAgentAfterAgentCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentAfterAgentCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>[]

---


### CesAgentAfterAgentCallbacksOutputReference <a name="CesAgentAfterAgentCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentAfterAgentCallbacksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```typescript
public resetProactiveExecutionEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```typescript
public readonly proactiveExecutionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentAfterAgentCallbacks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks">CesAgentAfterAgentCallbacks</a>

---


### CesAgentAfterModelCallbacksList <a name="CesAgentAfterModelCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentAfterModelCallbacksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.get"></a>

```typescript
public get(index: number): CesAgentAfterModelCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentAfterModelCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>[]

---


### CesAgentAfterModelCallbacksOutputReference <a name="CesAgentAfterModelCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentAfterModelCallbacksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```typescript
public resetProactiveExecutionEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```typescript
public readonly proactiveExecutionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentAfterModelCallbacks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks">CesAgentAfterModelCallbacks</a>

---


### CesAgentAfterToolCallbacksList <a name="CesAgentAfterToolCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentAfterToolCallbacksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.get"></a>

```typescript
public get(index: number): CesAgentAfterToolCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentAfterToolCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>[]

---


### CesAgentAfterToolCallbacksOutputReference <a name="CesAgentAfterToolCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentAfterToolCallbacksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```typescript
public resetProactiveExecutionEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```typescript
public readonly proactiveExecutionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentAfterToolCallbacks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks">CesAgentAfterToolCallbacks</a>

---


### CesAgentBeforeAgentCallbacksList <a name="CesAgentBeforeAgentCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentBeforeAgentCallbacksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.get"></a>

```typescript
public get(index: number): CesAgentBeforeAgentCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentBeforeAgentCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>[]

---


### CesAgentBeforeAgentCallbacksOutputReference <a name="CesAgentBeforeAgentCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentBeforeAgentCallbacksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```typescript
public resetProactiveExecutionEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```typescript
public readonly proactiveExecutionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentBeforeAgentCallbacks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks">CesAgentBeforeAgentCallbacks</a>

---


### CesAgentBeforeModelCallbacksList <a name="CesAgentBeforeModelCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentBeforeModelCallbacksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.get"></a>

```typescript
public get(index: number): CesAgentBeforeModelCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentBeforeModelCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>[]

---


### CesAgentBeforeModelCallbacksOutputReference <a name="CesAgentBeforeModelCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentBeforeModelCallbacksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```typescript
public resetProactiveExecutionEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```typescript
public readonly proactiveExecutionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentBeforeModelCallbacks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks">CesAgentBeforeModelCallbacks</a>

---


### CesAgentBeforeToolCallbacksList <a name="CesAgentBeforeToolCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentBeforeToolCallbacksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.get"></a>

```typescript
public get(index: number): CesAgentBeforeToolCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentBeforeToolCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>[]

---


### CesAgentBeforeToolCallbacksOutputReference <a name="CesAgentBeforeToolCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentBeforeToolCallbacksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```typescript
public resetProactiveExecutionEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```typescript
public readonly proactiveExecutionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentBeforeToolCallbacks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks">CesAgentBeforeToolCallbacks</a>

---


### CesAgentLlmAgentOutputReference <a name="CesAgentLlmAgentOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentLlmAgentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAgentLlmAgent;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

---


### CesAgentModelSettingsOutputReference <a name="CesAgentModelSettingsOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentModelSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resetTemperature"></a>

```typescript
public resetTemperature(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.temperatureInput"></a>

```typescript
public readonly temperatureInput: number;
```

- *Type:* number

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAgentModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills">putSkills</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces">putSupportedInterfaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSkills` <a name="putSkills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills"></a>

```typescript
public putSkills(value: IResolvable | CesAgentRemoteA2AAgentA2AConfigAgentCardSkills[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]

---

##### `putSupportedInterfaces` <a name="putSupportedInterfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces"></a>

```typescript
public putSupportedInterfaces(value: IResolvable | CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skills">skills</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList">CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfaces">supportedInterfaces</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skillsInput">skillsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfacesInput">supportedInterfacesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skills"></a>

```typescript
public readonly skills: CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList">CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList</a>

---

##### `supportedInterfaces`<sup>Required</sup> <a name="supportedInterfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfaces"></a>

```typescript
public readonly supportedInterfaces: CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `skillsInput`<sup>Optional</sup> <a name="skillsInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skillsInput"></a>

```typescript
public readonly skillsInput: IResolvable | CesAgentRemoteA2AAgentA2AConfigAgentCardSkills[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]

---

##### `supportedInterfacesInput`<sup>Optional</sup> <a name="supportedInterfacesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfacesInput"></a>

```typescript
public readonly supportedInterfacesInput: IResolvable | CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAgentRemoteA2AAgentA2AConfigAgentCard;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get"></a>

```typescript
public get(index: number): CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentRemoteA2AAgentA2AConfigAgentCardSkills[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetExamples">resetExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetInputModes">resetInputModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetOutputModes">resetOutputModes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExamples` <a name="resetExamples" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetExamples"></a>

```typescript
public resetExamples(): void
```

##### `resetInputModes` <a name="resetInputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetInputModes"></a>

```typescript
public resetInputModes(): void
```

##### `resetOutputModes` <a name="resetOutputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetOutputModes"></a>

```typescript
public resetOutputModes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examplesInput">examplesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModesInput">inputModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModesInput">outputModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examples">examples</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModes">inputModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModes">outputModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `examplesInput`<sup>Optional</sup> <a name="examplesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examplesInput"></a>

```typescript
public readonly examplesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputModesInput`<sup>Optional</sup> <a name="inputModesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModesInput"></a>

```typescript
public readonly inputModesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputModesInput`<sup>Optional</sup> <a name="outputModesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModesInput"></a>

```typescript
public readonly outputModesInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `examples`<sup>Required</sup> <a name="examples" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examples"></a>

```typescript
public readonly examples: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputModes`<sup>Required</sup> <a name="inputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModes"></a>

```typescript
public readonly inputModes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputModes`<sup>Required</sup> <a name="outputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModes"></a>

```typescript
public readonly outputModes: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentRemoteA2AAgentA2AConfigAgentCardSkills;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills">CesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get"></a>

```typescript
public get(index: number): CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resetTenant">resetTenant</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTenant` <a name="resetTenant" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resetTenant"></a>

```typescript
public resetTenant(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBindingInput">protocolBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersionInput">protocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenantInput">tenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBinding">protocolBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenant">tenant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `protocolBindingInput`<sup>Optional</sup> <a name="protocolBindingInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBindingInput"></a>

```typescript
public readonly protocolBindingInput: string;
```

- *Type:* string

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersionInput"></a>

```typescript
public readonly protocolVersionInput: string;
```

- *Type:* string

---

##### `tenantInput`<sup>Optional</sup> <a name="tenantInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenantInput"></a>

```typescript
public readonly tenantInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `protocolBinding`<sup>Required</sup> <a name="protocolBinding" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBinding"></a>

```typescript
public readonly protocolBinding: string;
```

- *Type:* string

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">apiKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">requestLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">requestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeySecretVersionInput`<sup>Optional</sup> <a name="apiKeySecretVersionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```typescript
public readonly apiKeySecretVersionInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `requestLocationInput`<sup>Optional</sup> <a name="requestLocationInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```typescript
public readonly requestLocationInput: string;
```

- *Type:* string

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```typescript
public readonly apiKeySecretVersion: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">clientSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauthGrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">clientSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretVersionInput`<sup>Optional</sup> <a name="clientSecretVersionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```typescript
public readonly clientSecretVersionInput: string;
```

- *Type:* string

---

##### `oauthGrantTypeInput`<sup>Optional</sup> <a name="oauthGrantTypeInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```typescript
public readonly oauthGrantTypeInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```typescript
public readonly clientSecretVersion: string;
```

- *Type:* string

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig">putBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig">putServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetBearerTokenConfig">resetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetOauthConfig">resetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetServiceAccountAuthConfig">resetServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig"></a>

```typescript
public putApiKeyConfig(value: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---

##### `putBearerTokenConfig` <a name="putBearerTokenConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```typescript
public putBearerTokenConfig(value: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig"></a>

```typescript
public putOauthConfig(value: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---

##### `putServiceAccountAuthConfig` <a name="putServiceAccountAuthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```typescript
public putServiceAccountAuthConfig(value: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```typescript
public resetApiKeyConfig(): void
```

##### `resetBearerTokenConfig` <a name="resetBearerTokenConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```typescript
public resetBearerTokenConfig(): void
```

##### `resetOauthConfig` <a name="resetOauthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetOauthConfig"></a>

```typescript
public resetOauthConfig(): void
```

##### `resetServiceAccountAuthConfig` <a name="resetServiceAccountAuthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```typescript
public resetServiceAccountAuthConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfigInput">bearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">serviceAccountAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearerTokenConfig`<sup>Required</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference</a>

---

##### `serviceAccountAuthConfig`<sup>Required</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```typescript
public readonly serviceAccountAuthConfig: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```typescript
public readonly apiKeyConfigInput: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---

##### `bearerTokenConfigInput`<sup>Optional</sup> <a name="bearerTokenConfigInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```typescript
public readonly bearerTokenConfigInput: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```typescript
public readonly oauthConfigInput: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---

##### `serviceAccountAuthConfigInput`<sup>Optional</sup> <a name="serviceAccountAuthConfigInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```typescript
public readonly serviceAccountAuthConfigInput: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAgentRemoteA2AAgentA2AConfigApiAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---


### CesAgentRemoteA2AAgentA2AConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard">putAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication">putApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentCard">resetAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentRegistry">resetAgentRegistry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetApiAuthentication">resetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetContextId">resetContextId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetInputVariableMapping">resetInputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetOutputVariableMapping">resetOutputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetStreamingEnabled">resetStreamingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentCard` <a name="putAgentCard" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard"></a>

```typescript
public putAgentCard(value: CesAgentRemoteA2AAgentA2AConfigAgentCard): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---

##### `putApiAuthentication` <a name="putApiAuthentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication"></a>

```typescript
public putApiAuthentication(value: CesAgentRemoteA2AAgentA2AConfigApiAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---

##### `resetAgentCard` <a name="resetAgentCard" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentCard"></a>

```typescript
public resetAgentCard(): void
```

##### `resetAgentRegistry` <a name="resetAgentRegistry" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentRegistry"></a>

```typescript
public resetAgentRegistry(): void
```

##### `resetApiAuthentication` <a name="resetApiAuthentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetApiAuthentication"></a>

```typescript
public resetApiAuthentication(): void
```

##### `resetContextId` <a name="resetContextId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetContextId"></a>

```typescript
public resetContextId(): void
```

##### `resetInputVariableMapping` <a name="resetInputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetInputVariableMapping"></a>

```typescript
public resetInputVariableMapping(): void
```

##### `resetOutputVariableMapping` <a name="resetOutputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetOutputVariableMapping"></a>

```typescript
public resetOutputVariableMapping(): void
```

##### `resetStreamingEnabled` <a name="resetStreamingEnabled" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetStreamingEnabled"></a>

```typescript
public resetStreamingEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCard">agentCard</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference">CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCardInput">agentCardInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistryInput">agentRegistryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthenticationInput">apiAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextIdInput">contextIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMappingInput">inputVariableMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMappingInput">outputVariableMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabledInput">streamingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistry">agentRegistry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextId">contextId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMapping">inputVariableMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMapping">outputVariableMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabled">streamingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentCard`<sup>Required</sup> <a name="agentCard" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCard"></a>

```typescript
public readonly agentCard: CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference">CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference</a>

---

##### `apiAuthentication`<sup>Required</sup> <a name="apiAuthentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthentication"></a>

```typescript
public readonly apiAuthentication: CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference</a>

---

##### `agentCardInput`<sup>Optional</sup> <a name="agentCardInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCardInput"></a>

```typescript
public readonly agentCardInput: CesAgentRemoteA2AAgentA2AConfigAgentCard;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---

##### `agentRegistryInput`<sup>Optional</sup> <a name="agentRegistryInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistryInput"></a>

```typescript
public readonly agentRegistryInput: string;
```

- *Type:* string

---

##### `apiAuthenticationInput`<sup>Optional</sup> <a name="apiAuthenticationInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthenticationInput"></a>

```typescript
public readonly apiAuthenticationInput: CesAgentRemoteA2AAgentA2AConfigApiAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---

##### `contextIdInput`<sup>Optional</sup> <a name="contextIdInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextIdInput"></a>

```typescript
public readonly contextIdInput: string;
```

- *Type:* string

---

##### `inputVariableMappingInput`<sup>Optional</sup> <a name="inputVariableMappingInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMappingInput"></a>

```typescript
public readonly inputVariableMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `outputVariableMappingInput`<sup>Optional</sup> <a name="outputVariableMappingInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMappingInput"></a>

```typescript
public readonly outputVariableMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `streamingEnabledInput`<sup>Optional</sup> <a name="streamingEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabledInput"></a>

```typescript
public readonly streamingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `agentRegistry`<sup>Required</sup> <a name="agentRegistry" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistry"></a>

```typescript
public readonly agentRegistry: string;
```

- *Type:* string

---

##### `contextId`<sup>Required</sup> <a name="contextId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextId"></a>

```typescript
public readonly contextId: string;
```

- *Type:* string

---

##### `inputVariableMapping`<sup>Required</sup> <a name="inputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMapping"></a>

```typescript
public readonly inputVariableMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `outputVariableMapping`<sup>Required</sup> <a name="outputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMapping"></a>

```typescript
public readonly outputVariableMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `streamingEnabled`<sup>Required</sup> <a name="streamingEnabled" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabled"></a>

```typescript
public readonly streamingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAgentRemoteA2AAgentA2AConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a>

---


### CesAgentRemoteA2AAgentOutputReference <a name="CesAgentRemoteA2AAgentOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentRemoteA2AAgentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig">putA2AConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putA2AConfig` <a name="putA2AConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig"></a>

```typescript
public putA2AConfig(value: CesAgentRemoteA2AAgentA2AConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.a2AConfig">a2AConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.a2AConfigInput">a2AConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `a2AConfig`<sup>Required</sup> <a name="a2AConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.a2AConfig"></a>

```typescript
public readonly a2AConfig: CesAgentRemoteA2AAgentA2AConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigOutputReference</a>

---

##### `a2AConfigInput`<sup>Optional</sup> <a name="a2AConfigInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.a2AConfigInput"></a>

```typescript
public readonly a2AConfigInput: CesAgentRemoteA2AAgentA2AConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAgentRemoteA2AAgent;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

---


### CesAgentRemoteDialogflowAgentOutputReference <a name="CesAgentRemoteDialogflowAgentOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentRemoteDialogflowAgentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetEnvironmentId">resetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetInputVariableMapping">resetInputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetLanguageCodeVariable">resetLanguageCodeVariable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetOutputVariableMapping">resetOutputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetRespectResponseInterruptionSettings">resetRespectResponseInterruptionSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironmentId` <a name="resetEnvironmentId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetEnvironmentId"></a>

```typescript
public resetEnvironmentId(): void
```

##### `resetInputVariableMapping` <a name="resetInputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetInputVariableMapping"></a>

```typescript
public resetInputVariableMapping(): void
```

##### `resetLanguageCodeVariable` <a name="resetLanguageCodeVariable" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetLanguageCodeVariable"></a>

```typescript
public resetLanguageCodeVariable(): void
```

##### `resetOutputVariableMapping` <a name="resetOutputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetOutputVariableMapping"></a>

```typescript
public resetOutputVariableMapping(): void
```

##### `resetRespectResponseInterruptionSettings` <a name="resetRespectResponseInterruptionSettings" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetRespectResponseInterruptionSettings"></a>

```typescript
public resetRespectResponseInterruptionSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.agentInput">agentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.environmentIdInput">environmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.flowIdInput">flowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMappingInput">inputVariableMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariableInput">languageCodeVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMappingInput">outputVariableMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettingsInput">respectResponseInterruptionSettingsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.agent">agent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.flowId">flowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMapping">inputVariableMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariable">languageCodeVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMapping">outputVariableMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettings">respectResponseInterruptionSettings</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.agentInput"></a>

```typescript
public readonly agentInput: string;
```

- *Type:* string

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.environmentIdInput"></a>

```typescript
public readonly environmentIdInput: string;
```

- *Type:* string

---

##### `flowIdInput`<sup>Optional</sup> <a name="flowIdInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.flowIdInput"></a>

```typescript
public readonly flowIdInput: string;
```

- *Type:* string

---

##### `inputVariableMappingInput`<sup>Optional</sup> <a name="inputVariableMappingInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMappingInput"></a>

```typescript
public readonly inputVariableMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `languageCodeVariableInput`<sup>Optional</sup> <a name="languageCodeVariableInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariableInput"></a>

```typescript
public readonly languageCodeVariableInput: string;
```

- *Type:* string

---

##### `outputVariableMappingInput`<sup>Optional</sup> <a name="outputVariableMappingInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMappingInput"></a>

```typescript
public readonly outputVariableMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `respectResponseInterruptionSettingsInput`<sup>Optional</sup> <a name="respectResponseInterruptionSettingsInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettingsInput"></a>

```typescript
public readonly respectResponseInterruptionSettingsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.agent"></a>

```typescript
public readonly agent: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

---

##### `inputVariableMapping`<sup>Required</sup> <a name="inputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMapping"></a>

```typescript
public readonly inputVariableMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `languageCodeVariable`<sup>Required</sup> <a name="languageCodeVariable" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariable"></a>

```typescript
public readonly languageCodeVariable: string;
```

- *Type:* string

---

##### `outputVariableMapping`<sup>Required</sup> <a name="outputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMapping"></a>

```typescript
public readonly outputVariableMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `respectResponseInterruptionSettings`<sup>Required</sup> <a name="respectResponseInterruptionSettings" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettings"></a>

```typescript
public readonly respectResponseInterruptionSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAgentRemoteDialogflowAgent;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a>

---


### CesAgentTimeoutsOutputReference <a name="CesAgentTimeoutsOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a>

---


### CesAgentToolsetsList <a name="CesAgentToolsetsList" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentToolsetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.get"></a>

```typescript
public get(index: number): CesAgentToolsetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentToolsets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>[]

---


### CesAgentToolsetsOutputReference <a name="CesAgentToolsetsOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentToolsetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resetToolIds">resetToolIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolIds` <a name="resetToolIds" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resetToolIds"></a>

```typescript
public resetToolIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolIdsInput">toolIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolIds">toolIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolset">toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `toolIdsInput`<sup>Optional</sup> <a name="toolIdsInput" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolIdsInput"></a>

```typescript
public readonly toolIdsInput: string[];
```

- *Type:* string[]

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolsetInput"></a>

```typescript
public readonly toolsetInput: string;
```

- *Type:* string

---

##### `toolIds`<sup>Required</sup> <a name="toolIds" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolIds"></a>

```typescript
public readonly toolIds: string[];
```

- *Type:* string[]

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentToolsets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets">CesAgentToolsets</a>

---


### CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference <a name="CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAgentTransferRulesDeterministicTransferExpressionCondition;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---


### CesAgentTransferRulesDeterministicTransferOutputReference <a name="CesAgentTransferRulesDeterministicTransferOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition">putExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition">putPythonCodeCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resetExpressionCondition">resetExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resetPythonCodeCondition">resetPythonCodeCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpressionCondition` <a name="putExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition"></a>

```typescript
public putExpressionCondition(value: CesAgentTransferRulesDeterministicTransferExpressionCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---

##### `putPythonCodeCondition` <a name="putPythonCodeCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition"></a>

```typescript
public putPythonCodeCondition(value: CesAgentTransferRulesDeterministicTransferPythonCodeCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---

##### `resetExpressionCondition` <a name="resetExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resetExpressionCondition"></a>

```typescript
public resetExpressionCondition(): void
```

##### `resetPythonCodeCondition` <a name="resetPythonCodeCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resetPythonCodeCondition"></a>

```typescript
public resetPythonCodeCondition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.expressionCondition">expressionCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference">CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeCondition">pythonCodeCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference">CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.expressionConditionInput">expressionConditionInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeConditionInput">pythonCodeConditionInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionCondition`<sup>Required</sup> <a name="expressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.expressionCondition"></a>

```typescript
public readonly expressionCondition: CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference">CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference</a>

---

##### `pythonCodeCondition`<sup>Required</sup> <a name="pythonCodeCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeCondition"></a>

```typescript
public readonly pythonCodeCondition: CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference">CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference</a>

---

##### `expressionConditionInput`<sup>Optional</sup> <a name="expressionConditionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.expressionConditionInput"></a>

```typescript
public readonly expressionConditionInput: CesAgentTransferRulesDeterministicTransferExpressionCondition;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---

##### `pythonCodeConditionInput`<sup>Optional</sup> <a name="pythonCodeConditionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeConditionInput"></a>

```typescript
public readonly pythonCodeConditionInput: CesAgentTransferRulesDeterministicTransferPythonCodeCondition;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAgentTransferRulesDeterministicTransfer;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a>

---


### CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference <a name="CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAgentTransferRulesDeterministicTransferPythonCodeCondition;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---


### CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference <a name="CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAgentTransferRulesDisablePlannerTransferExpressionCondition;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---


### CesAgentTransferRulesDisablePlannerTransferOutputReference <a name="CesAgentTransferRulesDisablePlannerTransferOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition">putExpressionCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpressionCondition` <a name="putExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition"></a>

```typescript
public putExpressionCondition(value: CesAgentTransferRulesDisablePlannerTransferExpressionCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionCondition">expressionCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference">CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionConditionInput">expressionConditionInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionCondition`<sup>Required</sup> <a name="expressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionCondition"></a>

```typescript
public readonly expressionCondition: CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference">CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference</a>

---

##### `expressionConditionInput`<sup>Optional</sup> <a name="expressionConditionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionConditionInput"></a>

```typescript
public readonly expressionConditionInput: CesAgentTransferRulesDisablePlannerTransferExpressionCondition;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAgentTransferRulesDisablePlannerTransfer;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a>

---


### CesAgentTransferRulesList <a name="CesAgentTransferRulesList" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentTransferRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.get"></a>

```typescript
public get(index: number): CesAgentTransferRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentTransferRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>[]

---


### CesAgentTransferRulesOutputReference <a name="CesAgentTransferRulesOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer"></a>

```typescript
import { cesAgent } from '@cdktn/provider-google'

new cesAgent.CesAgentTransferRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDeterministicTransfer">putDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDisablePlannerTransfer">putDisablePlannerTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resetDeterministicTransfer">resetDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resetDisablePlannerTransfer">resetDisablePlannerTransfer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeterministicTransfer` <a name="putDeterministicTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDeterministicTransfer"></a>

```typescript
public putDeterministicTransfer(value: CesAgentTransferRulesDeterministicTransfer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDeterministicTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a>

---

##### `putDisablePlannerTransfer` <a name="putDisablePlannerTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDisablePlannerTransfer"></a>

```typescript
public putDisablePlannerTransfer(value: CesAgentTransferRulesDisablePlannerTransfer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDisablePlannerTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a>

---

##### `resetDeterministicTransfer` <a name="resetDeterministicTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resetDeterministicTransfer"></a>

```typescript
public resetDeterministicTransfer(): void
```

##### `resetDisablePlannerTransfer` <a name="resetDisablePlannerTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resetDisablePlannerTransfer"></a>

```typescript
public resetDisablePlannerTransfer(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.deterministicTransfer">deterministicTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference">CesAgentTransferRulesDeterministicTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.disablePlannerTransfer">disablePlannerTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference">CesAgentTransferRulesDisablePlannerTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.childAgentInput">childAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.deterministicTransferInput">deterministicTransferInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.disablePlannerTransferInput">disablePlannerTransferInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.childAgent">childAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deterministicTransfer`<sup>Required</sup> <a name="deterministicTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.deterministicTransfer"></a>

```typescript
public readonly deterministicTransfer: CesAgentTransferRulesDeterministicTransferOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference">CesAgentTransferRulesDeterministicTransferOutputReference</a>

---

##### `disablePlannerTransfer`<sup>Required</sup> <a name="disablePlannerTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.disablePlannerTransfer"></a>

```typescript
public readonly disablePlannerTransfer: CesAgentTransferRulesDisablePlannerTransferOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference">CesAgentTransferRulesDisablePlannerTransferOutputReference</a>

---

##### `childAgentInput`<sup>Optional</sup> <a name="childAgentInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.childAgentInput"></a>

```typescript
public readonly childAgentInput: string;
```

- *Type:* string

---

##### `deterministicTransferInput`<sup>Optional</sup> <a name="deterministicTransferInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.deterministicTransferInput"></a>

```typescript
public readonly deterministicTransferInput: CesAgentTransferRulesDeterministicTransfer;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `disablePlannerTransferInput`<sup>Optional</sup> <a name="disablePlannerTransferInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.disablePlannerTransferInput"></a>

```typescript
public readonly disablePlannerTransferInput: CesAgentTransferRulesDisablePlannerTransfer;
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a>

---

##### `childAgent`<sup>Required</sup> <a name="childAgent" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.childAgent"></a>

```typescript
public readonly childAgent: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAgentTransferRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules">CesAgentTransferRules</a>

---



