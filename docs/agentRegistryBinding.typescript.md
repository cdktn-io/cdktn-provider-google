# `agentRegistryBinding` Submodule <a name="`agentRegistryBinding` Submodule" id="@cdktn/provider-google.agentRegistryBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentRegistryBinding <a name="AgentRegistryBinding" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding google_agent_registry_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer"></a>

```typescript
import { agentRegistryBinding } from '@cdktn/provider-google'

new agentRegistryBinding.AgentRegistryBinding(scope: Construct, id: string, config: AgentRegistryBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig">AgentRegistryBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig">AgentRegistryBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putAuthProviderBinding">putAuthProviderBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthProviderBinding` <a name="putAuthProviderBinding" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putAuthProviderBinding"></a>

```typescript
public putAuthProviderBinding(value: AgentRegistryBindingAuthProviderBinding): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putAuthProviderBinding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding">AgentRegistryBindingAuthProviderBinding</a>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putSource"></a>

```typescript
public putSource(value: AgentRegistryBindingSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource">AgentRegistryBindingSource</a>

---

##### `putTarget` <a name="putTarget" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putTarget"></a>

```typescript
public putTarget(value: AgentRegistryBindingTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget">AgentRegistryBindingTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: AgentRegistryBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts">AgentRegistryBindingTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AgentRegistryBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isConstruct"></a>

```typescript
import { agentRegistryBinding } from '@cdktn/provider-google'

agentRegistryBinding.AgentRegistryBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isTerraformElement"></a>

```typescript
import { agentRegistryBinding } from '@cdktn/provider-google'

agentRegistryBinding.AgentRegistryBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isTerraformResource"></a>

```typescript
import { agentRegistryBinding } from '@cdktn/provider-google'

agentRegistryBinding.AgentRegistryBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.generateConfigForImport"></a>

```typescript
import { agentRegistryBinding } from '@cdktn/provider-google'

agentRegistryBinding.AgentRegistryBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AgentRegistryBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AgentRegistryBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AgentRegistryBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AgentRegistryBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.authProviderBinding">authProviderBinding</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference">AgentRegistryBindingAuthProviderBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.source">source</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference">AgentRegistryBindingSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.target">target</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference">AgentRegistryBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference">AgentRegistryBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.authProviderBindingInput">authProviderBindingInput</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding">AgentRegistryBindingAuthProviderBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.bindingIdInput">bindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource">AgentRegistryBindingSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.targetInput">targetInput</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget">AgentRegistryBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts">AgentRegistryBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.bindingId">bindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authProviderBinding`<sup>Required</sup> <a name="authProviderBinding" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.authProviderBinding"></a>

```typescript
public readonly authProviderBinding: AgentRegistryBindingAuthProviderBindingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference">AgentRegistryBindingAuthProviderBindingOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.source"></a>

```typescript
public readonly source: AgentRegistryBindingSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference">AgentRegistryBindingSourceOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.target"></a>

```typescript
public readonly target: AgentRegistryBindingTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference">AgentRegistryBindingTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.timeouts"></a>

```typescript
public readonly timeouts: AgentRegistryBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference">AgentRegistryBindingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `authProviderBindingInput`<sup>Optional</sup> <a name="authProviderBindingInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.authProviderBindingInput"></a>

```typescript
public readonly authProviderBindingInput: AgentRegistryBindingAuthProviderBinding;
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding">AgentRegistryBindingAuthProviderBinding</a>

---

##### `bindingIdInput`<sup>Optional</sup> <a name="bindingIdInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.bindingIdInput"></a>

```typescript
public readonly bindingIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.sourceInput"></a>

```typescript
public readonly sourceInput: AgentRegistryBindingSource;
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource">AgentRegistryBindingSource</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.targetInput"></a>

```typescript
public readonly targetInput: AgentRegistryBindingTarget;
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget">AgentRegistryBindingTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AgentRegistryBindingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts">AgentRegistryBindingTimeouts</a>

---

##### `bindingId`<sup>Required</sup> <a name="bindingId" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.bindingId"></a>

```typescript
public readonly bindingId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentRegistryBindingAuthProviderBinding <a name="AgentRegistryBindingAuthProviderBinding" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding.Initializer"></a>

```typescript
import { agentRegistryBinding } from '@cdktn/provider-google'

const agentRegistryBindingAuthProviderBinding: agentRegistryBinding.AgentRegistryBindingAuthProviderBinding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding.property.authProvider">authProvider</a></code> | <code>string</code> | The resource name of the target auth provider. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding.property.continueUri">continueUri</a></code> | <code>string</code> | The continue URI of the auth provider. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding.property.scopes">scopes</a></code> | <code>string[]</code> | The list of OAuth2 scopes of the auth provider. |

---

##### `authProvider`<sup>Required</sup> <a name="authProvider" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding.property.authProvider"></a>

```typescript
public readonly authProvider: string;
```

- *Type:* string

The resource name of the target auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#auth_provider AgentRegistryBinding#auth_provider}

---

##### `continueUri`<sup>Optional</sup> <a name="continueUri" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding.property.continueUri"></a>

```typescript
public readonly continueUri: string;
```

- *Type:* string

The continue URI of the auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#continue_uri AgentRegistryBinding#continue_uri}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

The list of OAuth2 scopes of the auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#scopes AgentRegistryBinding#scopes}

---

### AgentRegistryBindingConfig <a name="AgentRegistryBindingConfig" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.Initializer"></a>

```typescript
import { agentRegistryBinding } from '@cdktn/provider-google'

const agentRegistryBindingConfig: agentRegistryBinding.AgentRegistryBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.authProviderBinding">authProviderBinding</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding">AgentRegistryBindingAuthProviderBinding</a></code> | auth_provider_binding block. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.bindingId">bindingId</a></code> | <code>string</code> | The name of the Binding. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource">AgentRegistryBindingSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.target">target</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget">AgentRegistryBindingTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.description">description</a></code> | <code>string</code> | The description of the Binding. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.displayName">displayName</a></code> | <code>string</code> | User-defined display name for the Binding. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#id AgentRegistryBinding#id}. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#project AgentRegistryBinding#project}. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts">AgentRegistryBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authProviderBinding`<sup>Required</sup> <a name="authProviderBinding" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.authProviderBinding"></a>

```typescript
public readonly authProviderBinding: AgentRegistryBindingAuthProviderBinding;
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding">AgentRegistryBindingAuthProviderBinding</a>

auth_provider_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#auth_provider_binding AgentRegistryBinding#auth_provider_binding}

---

##### `bindingId`<sup>Required</sup> <a name="bindingId" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.bindingId"></a>

```typescript
public readonly bindingId: string;
```

- *Type:* string

The name of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#binding_id AgentRegistryBinding#binding_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#location AgentRegistryBinding#location}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.source"></a>

```typescript
public readonly source: AgentRegistryBindingSource;
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource">AgentRegistryBindingSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#source AgentRegistryBinding#source}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.target"></a>

```typescript
public readonly target: AgentRegistryBindingTarget;
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget">AgentRegistryBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#target AgentRegistryBinding#target}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#deletion_policy AgentRegistryBinding#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#description AgentRegistryBinding#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-defined display name for the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#display_name AgentRegistryBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#id AgentRegistryBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#project AgentRegistryBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AgentRegistryBindingTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts">AgentRegistryBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#timeouts AgentRegistryBinding#timeouts}

---

### AgentRegistryBindingSource <a name="AgentRegistryBindingSource" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource.Initializer"></a>

```typescript
import { agentRegistryBinding } from '@cdktn/provider-google'

const agentRegistryBindingSource: agentRegistryBinding.AgentRegistryBindingSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource.property.identifier">identifier</a></code> | <code>string</code> | The identifier of the source Agent. Format: 'urn:agent:{publisher}:{namespace}:{name}'. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The identifier of the source Agent. Format: 'urn:agent:{publisher}:{namespace}:{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#identifier AgentRegistryBinding#identifier}

---

### AgentRegistryBindingTarget <a name="AgentRegistryBindingTarget" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget.Initializer"></a>

```typescript
import { agentRegistryBinding } from '@cdktn/provider-google'

const agentRegistryBindingTarget: agentRegistryBinding.AgentRegistryBindingTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget.property.identifier">identifier</a></code> | <code>string</code> | The identifier of the target Agent, MCP Server, or Endpoint. Format: * 'urn:agent:{publisher}:{namespace}:{name}' * 'urn:mcp:{publisher}:{namespace}:{name}' * 'urn:endpoint:{publisher}:{namespace}:{name}'. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The identifier of the target Agent, MCP Server, or Endpoint. Format: * 'urn:agent:{publisher}:{namespace}:{name}' * 'urn:mcp:{publisher}:{namespace}:{name}' * 'urn:endpoint:{publisher}:{namespace}:{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#identifier AgentRegistryBinding#identifier}

---

### AgentRegistryBindingTimeouts <a name="AgentRegistryBindingTimeouts" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts.Initializer"></a>

```typescript
import { agentRegistryBinding } from '@cdktn/provider-google'

const agentRegistryBindingTimeouts: agentRegistryBinding.AgentRegistryBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#create AgentRegistryBinding#create}. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#delete AgentRegistryBinding#delete}. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#update AgentRegistryBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#create AgentRegistryBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#delete AgentRegistryBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agent_registry_binding#update AgentRegistryBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AgentRegistryBindingAuthProviderBindingOutputReference <a name="AgentRegistryBindingAuthProviderBindingOutputReference" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.Initializer"></a>

```typescript
import { agentRegistryBinding } from '@cdktn/provider-google'

new agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.resetContinueUri">resetContinueUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContinueUri` <a name="resetContinueUri" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.resetContinueUri"></a>

```typescript
public resetContinueUri(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.authProviderInput">authProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.continueUriInput">continueUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.authProvider">authProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.continueUri">continueUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding">AgentRegistryBindingAuthProviderBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authProviderInput`<sup>Optional</sup> <a name="authProviderInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.authProviderInput"></a>

```typescript
public readonly authProviderInput: string;
```

- *Type:* string

---

##### `continueUriInput`<sup>Optional</sup> <a name="continueUriInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.continueUriInput"></a>

```typescript
public readonly continueUriInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `authProvider`<sup>Required</sup> <a name="authProvider" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.authProvider"></a>

```typescript
public readonly authProvider: string;
```

- *Type:* string

---

##### `continueUri`<sup>Required</sup> <a name="continueUri" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.continueUri"></a>

```typescript
public readonly continueUri: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AgentRegistryBindingAuthProviderBinding;
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingAuthProviderBinding">AgentRegistryBindingAuthProviderBinding</a>

---


### AgentRegistryBindingSourceOutputReference <a name="AgentRegistryBindingSourceOutputReference" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.Initializer"></a>

```typescript
import { agentRegistryBinding } from '@cdktn/provider-google'

new agentRegistryBinding.AgentRegistryBindingSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource">AgentRegistryBindingSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AgentRegistryBindingSource;
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingSource">AgentRegistryBindingSource</a>

---


### AgentRegistryBindingTargetOutputReference <a name="AgentRegistryBindingTargetOutputReference" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.Initializer"></a>

```typescript
import { agentRegistryBinding } from '@cdktn/provider-google'

new agentRegistryBinding.AgentRegistryBindingTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget">AgentRegistryBindingTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AgentRegistryBindingTarget;
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTarget">AgentRegistryBindingTarget</a>

---


### AgentRegistryBindingTimeoutsOutputReference <a name="AgentRegistryBindingTimeoutsOutputReference" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { agentRegistryBinding } from '@cdktn/provider-google'

new agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts">AgentRegistryBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AgentRegistryBindingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.agentRegistryBinding.AgentRegistryBindingTimeouts">AgentRegistryBindingTimeouts</a>

---



