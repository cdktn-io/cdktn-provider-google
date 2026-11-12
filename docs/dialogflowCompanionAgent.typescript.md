# `dialogflowCompanionAgent` Submodule <a name="`dialogflowCompanionAgent` Submodule" id="@cdktn/provider-google.dialogflowCompanionAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCompanionAgent <a name="DialogflowCompanionAgent" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent google_dialogflow_companion_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgent(scope: Construct, id: string, config: DialogflowCompanionAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig">DialogflowCompanionAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig">DialogflowCompanionAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putCesToolSpecs">putCesToolSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putSkillConfigs">putSkillConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putToolsetTools">putToolsetTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetCesToolSpecs">resetCesToolSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetSkillConfigs">resetSkillConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetToolsetTools">resetToolsetTools</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCesToolSpecs` <a name="putCesToolSpecs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putCesToolSpecs"></a>

```typescript
public putCesToolSpecs(value: IResolvable | DialogflowCompanionAgentCesToolSpecs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putCesToolSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>[]

---

##### `putSkillConfigs` <a name="putSkillConfigs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putSkillConfigs"></a>

```typescript
public putSkillConfigs(value: IResolvable | DialogflowCompanionAgentSkillConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putSkillConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putTimeouts"></a>

```typescript
public putTimeouts(value: DialogflowCompanionAgentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a>

---

##### `putToolsetTools` <a name="putToolsetTools" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putToolsetTools"></a>

```typescript
public putToolsetTools(value: IResolvable | DialogflowCompanionAgentToolsetTools[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putToolsetTools.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>[]

---

##### `resetCesToolSpecs` <a name="resetCesToolSpecs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetCesToolSpecs"></a>

```typescript
public resetCesToolSpecs(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSkillConfigs` <a name="resetSkillConfigs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetSkillConfigs"></a>

```typescript
public resetSkillConfigs(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetToolsetTools` <a name="resetToolsetTools" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetToolsetTools"></a>

```typescript
public resetToolsetTools(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DialogflowCompanionAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isConstruct"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

dialogflowCompanionAgent.DialogflowCompanionAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformElement"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformResource"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DialogflowCompanionAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowCompanionAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowCompanionAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowCompanionAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cesToolSpecs">cesToolSpecs</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList">DialogflowCompanionAgentCesToolSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.skillConfigs">skillConfigs</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList">DialogflowCompanionAgentSkillConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference">DialogflowCompanionAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.toolsetTools">toolsetTools</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList">DialogflowCompanionAgentToolsetToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cesToolSpecsInput">cesToolSpecsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.companionAgentIdInput">companionAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.skillConfigsInput">skillConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.toolsetToolsInput">toolsetToolsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.companionAgentId">companionAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cesToolSpecs`<sup>Required</sup> <a name="cesToolSpecs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cesToolSpecs"></a>

```typescript
public readonly cesToolSpecs: DialogflowCompanionAgentCesToolSpecsList;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList">DialogflowCompanionAgentCesToolSpecsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `skillConfigs`<sup>Required</sup> <a name="skillConfigs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.skillConfigs"></a>

```typescript
public readonly skillConfigs: DialogflowCompanionAgentSkillConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList">DialogflowCompanionAgentSkillConfigsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCompanionAgentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference">DialogflowCompanionAgentTimeoutsOutputReference</a>

---

##### `toolsetTools`<sup>Required</sup> <a name="toolsetTools" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.toolsetTools"></a>

```typescript
public readonly toolsetTools: DialogflowCompanionAgentToolsetToolsList;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList">DialogflowCompanionAgentToolsetToolsList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `cesToolSpecsInput`<sup>Optional</sup> <a name="cesToolSpecsInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cesToolSpecsInput"></a>

```typescript
public readonly cesToolSpecsInput: IResolvable | DialogflowCompanionAgentCesToolSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>[]

---

##### `companionAgentIdInput`<sup>Optional</sup> <a name="companionAgentIdInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.companionAgentIdInput"></a>

```typescript
public readonly companionAgentIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `skillConfigsInput`<sup>Optional</sup> <a name="skillConfigsInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.skillConfigsInput"></a>

```typescript
public readonly skillConfigsInput: IResolvable | DialogflowCompanionAgentSkillConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DialogflowCompanionAgentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a>

---

##### `toolsetToolsInput`<sup>Optional</sup> <a name="toolsetToolsInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.toolsetToolsInput"></a>

```typescript
public readonly toolsetToolsInput: IResolvable | DialogflowCompanionAgentToolsetTools[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>[]

---

##### `companionAgentId`<sup>Required</sup> <a name="companionAgentId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.companionAgentId"></a>

```typescript
public readonly companionAgentId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCompanionAgentCesToolSpecs <a name="DialogflowCompanionAgentCesToolSpecs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

const dialogflowCompanionAgentCesToolSpecs: dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.cesTool">cesTool</a></code> | <code>string</code> | The resource name of the CES tool. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.confirmationRequirement">confirmationRequirement</a></code> | <code>string</code> | Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.parameterOverrides">parameterOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a>[]</code> | parameter_overrides block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.proactiveEnabled">proactiveEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the tool is enabled in proactive mode. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.reactiveEnabled">reactiveEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the tool is enabled in reactive mode. |

---

##### `cesTool`<sup>Optional</sup> <a name="cesTool" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.cesTool"></a>

```typescript
public readonly cesTool: string;
```

- *Type:* string

The resource name of the CES tool. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#ces_tool DialogflowCompanionAgent#ces_tool}

---

##### `confirmationRequirement`<sup>Optional</sup> <a name="confirmationRequirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.confirmationRequirement"></a>

```typescript
public readonly confirmationRequirement: string;
```

- *Type:* string

Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#confirmation_requirement DialogflowCompanionAgent#confirmation_requirement}

---

##### `parameterOverrides`<sup>Optional</sup> <a name="parameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.parameterOverrides"></a>

```typescript
public readonly parameterOverrides: IResolvable | DialogflowCompanionAgentCesToolSpecsParameterOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a>[]

parameter_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#parameter_overrides DialogflowCompanionAgent#parameter_overrides}

---

##### `proactiveEnabled`<sup>Optional</sup> <a name="proactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.proactiveEnabled"></a>

```typescript
public readonly proactiveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the tool is enabled in proactive mode.

All tools are enabled in proactive mode by default. To disable a tool in proactive mode, set this field to 'false'.
NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#proactive_enabled DialogflowCompanionAgent#proactive_enabled}

---

##### `reactiveEnabled`<sup>Optional</sup> <a name="reactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.reactiveEnabled"></a>

```typescript
public readonly reactiveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the tool is enabled in reactive mode.

All tools are disabled in reactive mode by default. To enable a tool in reactive mode, set this field to 'true'.
NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the tool will be ignored. CompanionAgent config will throw an error if any unsupported tool is enabled in reactive mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#reactive_enabled DialogflowCompanionAgent#reactive_enabled}

---

### DialogflowCompanionAgentCesToolSpecsParameterOverrides <a name="DialogflowCompanionAgentCesToolSpecsParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

const dialogflowCompanionAgentCesToolSpecsParameterOverrides: dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.contextReferenceKey">contextReferenceKey</a></code> | <code>string</code> | The key of the context reference in ingested context references. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.parameterName">parameterName</a></code> | <code>string</code> | The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.fieldPath">fieldPath</a></code> | <code>string</code> | The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it). |

---

##### `contextReferenceKey`<sup>Required</sup> <a name="contextReferenceKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.contextReferenceKey"></a>

```typescript
public readonly contextReferenceKey: string;
```

- *Type:* string

The key of the context reference in ingested context references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#context_reference_key DialogflowCompanionAgent#context_reference_key}

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#parameter_name DialogflowCompanionAgent#parameter_name}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#field_path DialogflowCompanionAgent#field_path}

---

### DialogflowCompanionAgentConfig <a name="DialogflowCompanionAgentConfig" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

const dialogflowCompanionAgentConfig: dialogflowCompanionAgent.DialogflowCompanionAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.companionAgentId">companionAgentId</a></code> | <code>string</code> | The ID to use for the companion agent, which will become the final component of the companion agent's resource name. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.location">location</a></code> | <code>string</code> | The location of the companion agent. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.cesToolSpecs">cesToolSpecs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>[]</code> | ces_tool_specs block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.description">description</a></code> | <code>string</code> | Description for the companion agent. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name for the companion agent. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#id DialogflowCompanionAgent#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#project DialogflowCompanionAgent#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.skillConfigs">skillConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>[]</code> | skill_configs block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.toolsetTools">toolsetTools</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>[]</code> | toolset_tools block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `companionAgentId`<sup>Required</sup> <a name="companionAgentId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.companionAgentId"></a>

```typescript
public readonly companionAgentId: string;
```

- *Type:* string

The ID to use for the companion agent, which will become the final component of the companion agent's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#companion_agent_id DialogflowCompanionAgent#companion_agent_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#location DialogflowCompanionAgent#location}

---

##### `cesToolSpecs`<sup>Optional</sup> <a name="cesToolSpecs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.cesToolSpecs"></a>

```typescript
public readonly cesToolSpecs: IResolvable | DialogflowCompanionAgentCesToolSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>[]

ces_tool_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#ces_tool_specs DialogflowCompanionAgent#ces_tool_specs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#deletion_policy DialogflowCompanionAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#description DialogflowCompanionAgent#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#display_name DialogflowCompanionAgent#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#id DialogflowCompanionAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#project DialogflowCompanionAgent#project}.

---

##### `skillConfigs`<sup>Optional</sup> <a name="skillConfigs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.skillConfigs"></a>

```typescript
public readonly skillConfigs: IResolvable | DialogflowCompanionAgentSkillConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>[]

skill_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#skill_configs DialogflowCompanionAgent#skill_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCompanionAgentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#timeouts DialogflowCompanionAgent#timeouts}

---

##### `toolsetTools`<sup>Optional</sup> <a name="toolsetTools" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.toolsetTools"></a>

```typescript
public readonly toolsetTools: IResolvable | DialogflowCompanionAgentToolsetTools[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>[]

toolset_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#toolset_tools DialogflowCompanionAgent#toolset_tools}

---

### DialogflowCompanionAgentSkillConfigs <a name="DialogflowCompanionAgentSkillConfigs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

const dialogflowCompanionAgentSkillConfigs: dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs.property.guidanceSkillConfig">guidanceSkillConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | guidance_skill_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs.property.skillTriggeringEvent">skillTriggeringEvent</a></code> | <code>string</code> | The event that should trigger the skill. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]. |

---

##### `guidanceSkillConfig`<sup>Optional</sup> <a name="guidanceSkillConfig" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs.property.guidanceSkillConfig"></a>

```typescript
public readonly guidanceSkillConfig: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

guidance_skill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#guidance_skill_config DialogflowCompanionAgent#guidance_skill_config}

---

##### `skillTriggeringEvent`<sup>Optional</sup> <a name="skillTriggeringEvent" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs.property.skillTriggeringEvent"></a>

```typescript
public readonly skillTriggeringEvent: string;
```

- *Type:* string

The event that should trigger the skill. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#skill_triggering_event DialogflowCompanionAgent#skill_triggering_event}

---

### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

const dialogflowCompanionAgentSkillConfigsGuidanceSkillConfig: dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.guidanceInstructions">guidanceInstructions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>[]</code> | guidance_instructions block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.overarchingGuidance">overarchingGuidance</a></code> | <code>string</code> | This is specific additional guidance that can be configured by the user. |

---

##### `guidanceInstructions`<sup>Optional</sup> <a name="guidanceInstructions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.guidanceInstructions"></a>

```typescript
public readonly guidanceInstructions: IResolvable | DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>[]

guidance_instructions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#guidance_instructions DialogflowCompanionAgent#guidance_instructions}

---

##### `overarchingGuidance`<sup>Optional</sup> <a name="overarchingGuidance" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.overarchingGuidance"></a>

```typescript
public readonly overarchingGuidance: string;
```

- *Type:* string

This is specific additional guidance that can be configured by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#overarching_guidance DialogflowCompanionAgent#overarching_guidance}

---

### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

const dialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions: dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.actions">actions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>[]</code> | actions block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.condition">condition</a></code> | <code>string</code> | The condition of the instruction. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.disableSuggestedReply">disableSuggestedReply</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable suggested reply generation for this instruction. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayDetails">displayDetails</a></code> | <code>string</code> | The detailed description of this instruction. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayName">displayName</a></code> | <code>string</code> | Display name for the instruction. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.triggerEvent">triggerEvent</a></code> | <code>string</code> | Event that triggers the guidance instruction. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.actions"></a>

```typescript
public readonly actions: IResolvable | DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>[]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#actions DialogflowCompanionAgent#actions}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

The condition of the instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#condition DialogflowCompanionAgent#condition}

---

##### `disableSuggestedReply`<sup>Optional</sup> <a name="disableSuggestedReply" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.disableSuggestedReply"></a>

```typescript
public readonly disableSuggestedReply: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable suggested reply generation for this instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#disable_suggested_reply DialogflowCompanionAgent#disable_suggested_reply}

---

##### `displayDetails`<sup>Optional</sup> <a name="displayDetails" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayDetails"></a>

```typescript
public readonly displayDetails: string;
```

- *Type:* string

The detailed description of this instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#display_details DialogflowCompanionAgent#display_details}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name for the instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#display_name DialogflowCompanionAgent#display_name}

---

##### `triggerEvent`<sup>Optional</sup> <a name="triggerEvent" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.triggerEvent"></a>

```typescript
public readonly triggerEvent: string;
```

- *Type:* string

Event that triggers the guidance instruction. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#trigger_event DialogflowCompanionAgent#trigger_event}

---

### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

const dialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions: dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.property.description">description</a></code> | <code>string</code> | Description of action item. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of action item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#description DialogflowCompanionAgent#description}

---

### DialogflowCompanionAgentTimeouts <a name="DialogflowCompanionAgentTimeouts" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

const dialogflowCompanionAgentTimeouts: dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#create DialogflowCompanionAgent#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#delete DialogflowCompanionAgent#delete}. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#update DialogflowCompanionAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#create DialogflowCompanionAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#delete DialogflowCompanionAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#update DialogflowCompanionAgent#update}.

---

### DialogflowCompanionAgentToolsetTools <a name="DialogflowCompanionAgentToolsetTools" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

const dialogflowCompanionAgentToolsetTools: dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.toolset">toolset</a></code> | <code>string</code> | The name of the toolset to retrieve the schema for. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.confirmationRequirement">confirmationRequirement</a></code> | <code>string</code> | Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.operationId">operationId</a></code> | <code>string</code> | The 'operationId' field of the OpenAPI endpoint. The 'operationId' must be present in the toolset's definition. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.parameterOverrides">parameterOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a>[]</code> | parameter_overrides block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.proactiveEnabled">proactiveEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the toolset tool is enabled in proactive mode. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.reactiveEnabled">reactiveEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the toolset tool is enabled in reactive mode. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

The name of the toolset to retrieve the schema for. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#toolset DialogflowCompanionAgent#toolset}

---

##### `confirmationRequirement`<sup>Optional</sup> <a name="confirmationRequirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.confirmationRequirement"></a>

```typescript
public readonly confirmationRequirement: string;
```

- *Type:* string

Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#confirmation_requirement DialogflowCompanionAgent#confirmation_requirement}

---

##### `operationId`<sup>Optional</sup> <a name="operationId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

The 'operationId' field of the OpenAPI endpoint. The 'operationId' must be present in the toolset's definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#operation_id DialogflowCompanionAgent#operation_id}

---

##### `parameterOverrides`<sup>Optional</sup> <a name="parameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.parameterOverrides"></a>

```typescript
public readonly parameterOverrides: IResolvable | DialogflowCompanionAgentToolsetToolsParameterOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a>[]

parameter_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#parameter_overrides DialogflowCompanionAgent#parameter_overrides}

---

##### `proactiveEnabled`<sup>Optional</sup> <a name="proactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.proactiveEnabled"></a>

```typescript
public readonly proactiveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the toolset tool is enabled in proactive mode.

NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the toolset tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#proactive_enabled DialogflowCompanionAgent#proactive_enabled}

---

##### `reactiveEnabled`<sup>Optional</sup> <a name="reactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.reactiveEnabled"></a>

```typescript
public readonly reactiveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the toolset tool is enabled in reactive mode.

NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the toolset tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#reactive_enabled DialogflowCompanionAgent#reactive_enabled}

---

### DialogflowCompanionAgentToolsetToolsParameterOverrides <a name="DialogflowCompanionAgentToolsetToolsParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

const dialogflowCompanionAgentToolsetToolsParameterOverrides: dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.contextReferenceKey">contextReferenceKey</a></code> | <code>string</code> | The key of the context reference in ingested context references. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.parameterName">parameterName</a></code> | <code>string</code> | The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.fieldPath">fieldPath</a></code> | <code>string</code> | The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it). |

---

##### `contextReferenceKey`<sup>Required</sup> <a name="contextReferenceKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.contextReferenceKey"></a>

```typescript
public readonly contextReferenceKey: string;
```

- *Type:* string

The key of the context reference in ingested context references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#context_reference_key DialogflowCompanionAgent#context_reference_key}

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#parameter_name DialogflowCompanionAgent#parameter_name}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#field_path DialogflowCompanionAgent#field_path}

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCompanionAgentCesToolSpecsList <a name="DialogflowCompanionAgentCesToolSpecsList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.get"></a>

```typescript
public get(index: number): DialogflowCompanionAgentCesToolSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCompanionAgentCesToolSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>[]

---


### DialogflowCompanionAgentCesToolSpecsOutputReference <a name="DialogflowCompanionAgentCesToolSpecsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides">putParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetCesTool">resetCesTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetConfirmationRequirement">resetConfirmationRequirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetParameterOverrides">resetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetProactiveEnabled">resetProactiveEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetReactiveEnabled">resetReactiveEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameterOverrides` <a name="putParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides"></a>

```typescript
public putParameterOverrides(value: IResolvable | DialogflowCompanionAgentCesToolSpecsParameterOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a>[]

---

##### `resetCesTool` <a name="resetCesTool" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetCesTool"></a>

```typescript
public resetCesTool(): void
```

##### `resetConfirmationRequirement` <a name="resetConfirmationRequirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetConfirmationRequirement"></a>

```typescript
public resetConfirmationRequirement(): void
```

##### `resetParameterOverrides` <a name="resetParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetParameterOverrides"></a>

```typescript
public resetParameterOverrides(): void
```

##### `resetProactiveEnabled` <a name="resetProactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetProactiveEnabled"></a>

```typescript
public resetProactiveEnabled(): void
```

##### `resetReactiveEnabled` <a name="resetReactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetReactiveEnabled"></a>

```typescript
public resetReactiveEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverrides">parameterOverrides</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList">DialogflowCompanionAgentCesToolSpecsParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.cesToolInput">cesToolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirementInput">confirmationRequirementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverridesInput">parameterOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabledInput">proactiveEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabledInput">reactiveEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.cesTool">cesTool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirement">confirmationRequirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabled">proactiveEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabled">reactiveEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterOverrides`<sup>Required</sup> <a name="parameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverrides"></a>

```typescript
public readonly parameterOverrides: DialogflowCompanionAgentCesToolSpecsParameterOverridesList;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList">DialogflowCompanionAgentCesToolSpecsParameterOverridesList</a>

---

##### `cesToolInput`<sup>Optional</sup> <a name="cesToolInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.cesToolInput"></a>

```typescript
public readonly cesToolInput: string;
```

- *Type:* string

---

##### `confirmationRequirementInput`<sup>Optional</sup> <a name="confirmationRequirementInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirementInput"></a>

```typescript
public readonly confirmationRequirementInput: string;
```

- *Type:* string

---

##### `parameterOverridesInput`<sup>Optional</sup> <a name="parameterOverridesInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverridesInput"></a>

```typescript
public readonly parameterOverridesInput: IResolvable | DialogflowCompanionAgentCesToolSpecsParameterOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a>[]

---

##### `proactiveEnabledInput`<sup>Optional</sup> <a name="proactiveEnabledInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabledInput"></a>

```typescript
public readonly proactiveEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `reactiveEnabledInput`<sup>Optional</sup> <a name="reactiveEnabledInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabledInput"></a>

```typescript
public readonly reactiveEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cesTool`<sup>Required</sup> <a name="cesTool" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.cesTool"></a>

```typescript
public readonly cesTool: string;
```

- *Type:* string

---

##### `confirmationRequirement`<sup>Required</sup> <a name="confirmationRequirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirement"></a>

```typescript
public readonly confirmationRequirement: string;
```

- *Type:* string

---

##### `proactiveEnabled`<sup>Required</sup> <a name="proactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabled"></a>

```typescript
public readonly proactiveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `reactiveEnabled`<sup>Required</sup> <a name="reactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabled"></a>

```typescript
public readonly reactiveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCompanionAgentCesToolSpecs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs">DialogflowCompanionAgentCesToolSpecs</a>

---


### DialogflowCompanionAgentCesToolSpecsParameterOverridesList <a name="DialogflowCompanionAgentCesToolSpecsParameterOverridesList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.get"></a>

```typescript
public get(index: number): DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCompanionAgentCesToolSpecsParameterOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a>[]

---


### DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference <a name="DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resetFieldPath"></a>

```typescript
public resetFieldPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKeyInput">contextReferenceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKey">contextReferenceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contextReferenceKeyInput`<sup>Optional</sup> <a name="contextReferenceKeyInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKeyInput"></a>

```typescript
public readonly contextReferenceKeyInput: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterNameInput"></a>

```typescript
public readonly parameterNameInput: string;
```

- *Type:* string

---

##### `contextReferenceKey`<sup>Required</sup> <a name="contextReferenceKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKey"></a>

```typescript
public readonly contextReferenceKey: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCompanionAgentCesToolSpecsParameterOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides">DialogflowCompanionAgentCesToolSpecsParameterOverrides</a>

---


### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get"></a>

```typescript
public get(index: number): DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>[]

---


### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>

---


### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get"></a>

```typescript
public get(index: number): DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>[]

---


### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisableSuggestedReply">resetDisableSuggestedReply</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayDetails">resetDisplayDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetTriggerEvent">resetTriggerEvent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions"></a>

```typescript
public putActions(value: IResolvable | DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>[]

---

##### `resetActions` <a name="resetActions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDisableSuggestedReply` <a name="resetDisableSuggestedReply" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisableSuggestedReply"></a>

```typescript
public resetDisableSuggestedReply(): void
```

##### `resetDisplayDetails` <a name="resetDisplayDetails" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayDetails"></a>

```typescript
public resetDisplayDetails(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetTriggerEvent` <a name="resetTriggerEvent" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetTriggerEvent"></a>

```typescript
public resetTriggerEvent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReplyInput">disableSuggestedReplyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetailsInput">displayDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEventInput">triggerEventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReply">disableSuggestedReply</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetails">displayDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEvent">triggerEvent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actions"></a>

```typescript
public readonly actions: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>[]

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `disableSuggestedReplyInput`<sup>Optional</sup> <a name="disableSuggestedReplyInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReplyInput"></a>

```typescript
public readonly disableSuggestedReplyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayDetailsInput`<sup>Optional</sup> <a name="displayDetailsInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetailsInput"></a>

```typescript
public readonly displayDetailsInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `triggerEventInput`<sup>Optional</sup> <a name="triggerEventInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEventInput"></a>

```typescript
public readonly triggerEventInput: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `disableSuggestedReply`<sup>Required</sup> <a name="disableSuggestedReply" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReply"></a>

```typescript
public readonly disableSuggestedReply: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayDetails`<sup>Required</sup> <a name="displayDetails" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetails"></a>

```typescript
public readonly displayDetails: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `triggerEvent`<sup>Required</sup> <a name="triggerEvent" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEvent"></a>

```typescript
public readonly triggerEvent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>

---


### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions">putGuidanceInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetGuidanceInstructions">resetGuidanceInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetOverarchingGuidance">resetOverarchingGuidance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGuidanceInstructions` <a name="putGuidanceInstructions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions"></a>

```typescript
public putGuidanceInstructions(value: IResolvable | DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>[]

---

##### `resetGuidanceInstructions` <a name="resetGuidanceInstructions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetGuidanceInstructions"></a>

```typescript
public resetGuidanceInstructions(): void
```

##### `resetOverarchingGuidance` <a name="resetOverarchingGuidance" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetOverarchingGuidance"></a>

```typescript
public resetOverarchingGuidance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructions">guidanceInstructions</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructionsInput">guidanceInstructionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidanceInput">overarchingGuidanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidance">overarchingGuidance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guidanceInstructions`<sup>Required</sup> <a name="guidanceInstructions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructions"></a>

```typescript
public readonly guidanceInstructions: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList</a>

---

##### `guidanceInstructionsInput`<sup>Optional</sup> <a name="guidanceInstructionsInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructionsInput"></a>

```typescript
public readonly guidanceInstructionsInput: IResolvable | DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>[]

---

##### `overarchingGuidanceInput`<sup>Optional</sup> <a name="overarchingGuidanceInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidanceInput"></a>

```typescript
public readonly overarchingGuidanceInput: string;
```

- *Type:* string

---

##### `overarchingGuidance`<sup>Required</sup> <a name="overarchingGuidance" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidance"></a>

```typescript
public readonly overarchingGuidance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---


### DialogflowCompanionAgentSkillConfigsList <a name="DialogflowCompanionAgentSkillConfigsList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.get"></a>

```typescript
public get(index: number): DialogflowCompanionAgentSkillConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCompanionAgentSkillConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>[]

---


### DialogflowCompanionAgentSkillConfigsOutputReference <a name="DialogflowCompanionAgentSkillConfigsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig">putGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resetGuidanceSkillConfig">resetGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resetSkillTriggeringEvent">resetSkillTriggeringEvent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGuidanceSkillConfig` <a name="putGuidanceSkillConfig" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig"></a>

```typescript
public putGuidanceSkillConfig(value: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---

##### `resetGuidanceSkillConfig` <a name="resetGuidanceSkillConfig" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resetGuidanceSkillConfig"></a>

```typescript
public resetGuidanceSkillConfig(): void
```

##### `resetSkillTriggeringEvent` <a name="resetSkillTriggeringEvent" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resetSkillTriggeringEvent"></a>

```typescript
public resetSkillTriggeringEvent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfig">guidanceSkillConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfigInput">guidanceSkillConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEventInput">skillTriggeringEventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEvent">skillTriggeringEvent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guidanceSkillConfig`<sup>Required</sup> <a name="guidanceSkillConfig" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfig"></a>

```typescript
public readonly guidanceSkillConfig: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference</a>

---

##### `guidanceSkillConfigInput`<sup>Optional</sup> <a name="guidanceSkillConfigInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfigInput"></a>

```typescript
public readonly guidanceSkillConfigInput: DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---

##### `skillTriggeringEventInput`<sup>Optional</sup> <a name="skillTriggeringEventInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEventInput"></a>

```typescript
public readonly skillTriggeringEventInput: string;
```

- *Type:* string

---

##### `skillTriggeringEvent`<sup>Required</sup> <a name="skillTriggeringEvent" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEvent"></a>

```typescript
public readonly skillTriggeringEvent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCompanionAgentSkillConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs">DialogflowCompanionAgentSkillConfigs</a>

---


### DialogflowCompanionAgentTimeoutsOutputReference <a name="DialogflowCompanionAgentTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCompanionAgentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a>

---


### DialogflowCompanionAgentToolsetToolsList <a name="DialogflowCompanionAgentToolsetToolsList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.get"></a>

```typescript
public get(index: number): DialogflowCompanionAgentToolsetToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCompanionAgentToolsetTools[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>[]

---


### DialogflowCompanionAgentToolsetToolsOutputReference <a name="DialogflowCompanionAgentToolsetToolsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides">putParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetConfirmationRequirement">resetConfirmationRequirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetOperationId">resetOperationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetParameterOverrides">resetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetProactiveEnabled">resetProactiveEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetReactiveEnabled">resetReactiveEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameterOverrides` <a name="putParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides"></a>

```typescript
public putParameterOverrides(value: IResolvable | DialogflowCompanionAgentToolsetToolsParameterOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a>[]

---

##### `resetConfirmationRequirement` <a name="resetConfirmationRequirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetConfirmationRequirement"></a>

```typescript
public resetConfirmationRequirement(): void
```

##### `resetOperationId` <a name="resetOperationId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetOperationId"></a>

```typescript
public resetOperationId(): void
```

##### `resetParameterOverrides` <a name="resetParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetParameterOverrides"></a>

```typescript
public resetParameterOverrides(): void
```

##### `resetProactiveEnabled` <a name="resetProactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetProactiveEnabled"></a>

```typescript
public resetProactiveEnabled(): void
```

##### `resetReactiveEnabled` <a name="resetReactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetReactiveEnabled"></a>

```typescript
public resetReactiveEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverrides">parameterOverrides</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList">DialogflowCompanionAgentToolsetToolsParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirementInput">confirmationRequirementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.operationIdInput">operationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverridesInput">parameterOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabledInput">proactiveEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabledInput">reactiveEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirement">confirmationRequirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.operationId">operationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabled">proactiveEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabled">reactiveEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.toolset">toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterOverrides`<sup>Required</sup> <a name="parameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverrides"></a>

```typescript
public readonly parameterOverrides: DialogflowCompanionAgentToolsetToolsParameterOverridesList;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList">DialogflowCompanionAgentToolsetToolsParameterOverridesList</a>

---

##### `confirmationRequirementInput`<sup>Optional</sup> <a name="confirmationRequirementInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirementInput"></a>

```typescript
public readonly confirmationRequirementInput: string;
```

- *Type:* string

---

##### `operationIdInput`<sup>Optional</sup> <a name="operationIdInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.operationIdInput"></a>

```typescript
public readonly operationIdInput: string;
```

- *Type:* string

---

##### `parameterOverridesInput`<sup>Optional</sup> <a name="parameterOverridesInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverridesInput"></a>

```typescript
public readonly parameterOverridesInput: IResolvable | DialogflowCompanionAgentToolsetToolsParameterOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a>[]

---

##### `proactiveEnabledInput`<sup>Optional</sup> <a name="proactiveEnabledInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabledInput"></a>

```typescript
public readonly proactiveEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `reactiveEnabledInput`<sup>Optional</sup> <a name="reactiveEnabledInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabledInput"></a>

```typescript
public readonly reactiveEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.toolsetInput"></a>

```typescript
public readonly toolsetInput: string;
```

- *Type:* string

---

##### `confirmationRequirement`<sup>Required</sup> <a name="confirmationRequirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirement"></a>

```typescript
public readonly confirmationRequirement: string;
```

- *Type:* string

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

---

##### `proactiveEnabled`<sup>Required</sup> <a name="proactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabled"></a>

```typescript
public readonly proactiveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `reactiveEnabled`<sup>Required</sup> <a name="reactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabled"></a>

```typescript
public readonly reactiveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCompanionAgentToolsetTools;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools">DialogflowCompanionAgentToolsetTools</a>

---


### DialogflowCompanionAgentToolsetToolsParameterOverridesList <a name="DialogflowCompanionAgentToolsetToolsParameterOverridesList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.get"></a>

```typescript
public get(index: number): DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCompanionAgentToolsetToolsParameterOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a>[]

---


### DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference <a name="DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer"></a>

```typescript
import { dialogflowCompanionAgent } from '@cdktn/provider-google'

new dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resetFieldPath"></a>

```typescript
public resetFieldPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKeyInput">contextReferenceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKey">contextReferenceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contextReferenceKeyInput`<sup>Optional</sup> <a name="contextReferenceKeyInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKeyInput"></a>

```typescript
public readonly contextReferenceKeyInput: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterNameInput"></a>

```typescript
public readonly parameterNameInput: string;
```

- *Type:* string

---

##### `contextReferenceKey`<sup>Required</sup> <a name="contextReferenceKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKey"></a>

```typescript
public readonly contextReferenceKey: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCompanionAgentToolsetToolsParameterOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides">DialogflowCompanionAgentToolsetToolsParameterOverrides</a>

---



