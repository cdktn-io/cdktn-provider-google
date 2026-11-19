# `agentIdentityAuthProvider` Submodule <a name="`agentIdentityAuthProvider` Submodule" id="@cdktn/provider-google.agentIdentityAuthProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentIdentityAuthProvider <a name="AgentIdentityAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider google_agent_identity_auth_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

new agentIdentityAuthProvider.AgentIdentityAuthProvider(scope: Construct, id: string, config: AgentIdentityAuthProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig">AgentIdentityAuthProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig">AgentIdentityAuthProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.putAuthProviderTypeParams">putAuthProviderTypeParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetAllowedScopes">resetAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetBlockedScopes">resetBlockedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetWorkloadIds">resetWorkloadIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthProviderTypeParams` <a name="putAuthProviderTypeParams" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.putAuthProviderTypeParams"></a>

```typescript
public putAuthProviderTypeParams(value: AgentIdentityAuthProviderAuthProviderTypeParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.putAuthProviderTypeParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.putTimeouts"></a>

```typescript
public putTimeouts(value: AgentIdentityAuthProviderTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a>

---

##### `resetAllowedScopes` <a name="resetAllowedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetAllowedScopes"></a>

```typescript
public resetAllowedScopes(): void
```

##### `resetBlockedScopes` <a name="resetBlockedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetBlockedScopes"></a>

```typescript
public resetBlockedScopes(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkloadIds` <a name="resetWorkloadIds" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.resetWorkloadIds"></a>

```typescript
public resetWorkloadIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AgentIdentityAuthProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isConstruct"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

agentIdentityAuthProvider.AgentIdentityAuthProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformElement"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformResource"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AgentIdentityAuthProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AgentIdentityAuthProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AgentIdentityAuthProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AgentIdentityAuthProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderTypeParams">authProviderTypeParams</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deleted">deleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference">AgentIdentityAuthProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.allowedScopesInput">allowedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderIdInput">authProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderTypeParamsInput">authProviderTypeParamsInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.blockedScopesInput">blockedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.workloadIdsInput">workloadIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.allowedScopes">allowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderId">authProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.blockedScopes">blockedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.workloadIds">workloadIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authProviderTypeParams`<sup>Required</sup> <a name="authProviderTypeParams" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderTypeParams"></a>

```typescript
public readonly authProviderTypeParams: AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deleted"></a>

```typescript
public readonly deleted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.timeouts"></a>

```typescript
public readonly timeouts: AgentIdentityAuthProviderTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference">AgentIdentityAuthProviderTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `allowedScopesInput`<sup>Optional</sup> <a name="allowedScopesInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.allowedScopesInput"></a>

```typescript
public readonly allowedScopesInput: string[];
```

- *Type:* string[]

---

##### `authProviderIdInput`<sup>Optional</sup> <a name="authProviderIdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderIdInput"></a>

```typescript
public readonly authProviderIdInput: string;
```

- *Type:* string

---

##### `authProviderTypeParamsInput`<sup>Optional</sup> <a name="authProviderTypeParamsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderTypeParamsInput"></a>

```typescript
public readonly authProviderTypeParamsInput: AgentIdentityAuthProviderAuthProviderTypeParams;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a>

---

##### `blockedScopesInput`<sup>Optional</sup> <a name="blockedScopesInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.blockedScopesInput"></a>

```typescript
public readonly blockedScopesInput: string[];
```

- *Type:* string[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AgentIdentityAuthProviderTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a>

---

##### `workloadIdsInput`<sup>Optional</sup> <a name="workloadIdsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.workloadIdsInput"></a>

```typescript
public readonly workloadIdsInput: string[];
```

- *Type:* string[]

---

##### `allowedScopes`<sup>Required</sup> <a name="allowedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.allowedScopes"></a>

```typescript
public readonly allowedScopes: string[];
```

- *Type:* string[]

---

##### `authProviderId`<sup>Required</sup> <a name="authProviderId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.authProviderId"></a>

```typescript
public readonly authProviderId: string;
```

- *Type:* string

---

##### `blockedScopes`<sup>Required</sup> <a name="blockedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.blockedScopes"></a>

```typescript
public readonly blockedScopes: string[];
```

- *Type:* string[]

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `workloadIds`<sup>Required</sup> <a name="workloadIds" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.workloadIds"></a>

```typescript
public readonly workloadIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentIdentityAuthProviderAuthProviderTypeParams <a name="AgentIdentityAuthProviderAuthProviderTypeParams" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

const agentIdentityAuthProviderAuthProviderTypeParams: agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a></code> | api_key block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.connectorReferenceAuthProvider">connectorReferenceAuthProvider</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a></code> | connector_reference_auth_provider block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.threeLeggedOauth">threeLeggedOauth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a></code> | three_legged_oauth block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.twoLeggedOauth">twoLeggedOauth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a></code> | two_legged_oauth block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.xaaAuthProvider">xaaAuthProvider</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a></code> | xaa_auth_provider block. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.apiKey"></a>

```typescript
public readonly apiKey: AgentIdentityAuthProviderAuthProviderTypeParamsApiKey;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#api_key AgentIdentityAuthProvider#api_key}

---

##### `connectorReferenceAuthProvider`<sup>Optional</sup> <a name="connectorReferenceAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.connectorReferenceAuthProvider"></a>

```typescript
public readonly connectorReferenceAuthProvider: AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a>

connector_reference_auth_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#connector_reference_auth_provider AgentIdentityAuthProvider#connector_reference_auth_provider}

---

##### `threeLeggedOauth`<sup>Optional</sup> <a name="threeLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.threeLeggedOauth"></a>

```typescript
public readonly threeLeggedOauth: AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

three_legged_oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#three_legged_oauth AgentIdentityAuthProvider#three_legged_oauth}

---

##### `twoLeggedOauth`<sup>Optional</sup> <a name="twoLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.twoLeggedOauth"></a>

```typescript
public readonly twoLeggedOauth: AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

two_legged_oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#two_legged_oauth AgentIdentityAuthProvider#two_legged_oauth}

---

##### `xaaAuthProvider`<sup>Optional</sup> <a name="xaaAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams.property.xaaAuthProvider"></a>

```typescript
public readonly xaaAuthProvider: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a>

xaa_auth_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#xaa_auth_provider AgentIdentityAuthProvider#xaa_auth_provider}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsApiKey <a name="AgentIdentityAuthProviderAuthProviderTypeParamsApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

const agentIdentityAuthProviderAuthProviderTypeParamsApiKey: agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey.property.apiKey">apiKey</a></code> | <code>string</code> | Input only. The API key for this auth_provider. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Input only. The API key for this auth_provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#api_key AgentIdentityAuthProvider#api_key}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider <a name="AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

const agentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider: agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider.property.connector">connector</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider.property.authorizationDetails">authorizationDetails</a></code> | <code>string</code> | Optional. Rich Authorization Requests (RFC 9396) detailing targeted OAuth resources/scopes, formatted as a JSON array of JSON objects. |

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider.property.connector"></a>

```typescript
public readonly connector: string;
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

##### `authorizationDetails`<sup>Optional</sup> <a name="authorizationDetails" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider.property.authorizationDetails"></a>

```typescript
public readonly authorizationDetails: string;
```

- *Type:* string

Optional. Rich Authorization Requests (RFC 9396) detailing targeted OAuth resources/scopes, formatted as a JSON array of JSON objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#authorization_details AgentIdentityAuthProvider#authorization_details}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider <a name="AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

const agentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider: agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider = { ... }
```


### AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth <a name="AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

const agentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth: agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | The authorization endpoint to send users to for consenting to delegate to the agent. eg. "https://auth.atlassian.com/authorize". |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientId">clientId</a></code> | <code>string</code> | The client ID of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecret">clientSecret</a></code> | <code>string</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWo">clientSecretWo</a></code> | <code>string</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWoVersion">clientSecretWoVersion</a></code> | <code>string</code> | Triggers update of 'client_secret_wo' write-only. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.defaultContinueUri">defaultContinueUri</a></code> | <code>string</code> | The default continue URI for 3LO flow and it will be used when no continue URI is provided in the RetrieveCredentials request. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.enablePkce">enablePkce</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables Proof Key for Code Exchange (PKCE) for the OAuth flow to prevent authorization code interception attacks. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | The token endpoint for requesting tokens on behalf of an end user. eg. "https://auth.atlassian.com/oauth/token". |

---

##### `authorizationUrl`<sup>Optional</sup> <a name="authorizationUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

The authorization endpoint to send users to for consenting to delegate to the agent. eg. "https://auth.atlassian.com/authorize".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#authorization_url AgentIdentityAuthProvider#authorization_url}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_id AgentIdentityAuthProvider#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret AgentIdentityAuthProvider#client_secret}

---

##### `clientSecretWo`<sup>Optional</sup> <a name="clientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWo"></a>

```typescript
public readonly clientSecretWo: string;
```

- *Type:* string

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret_wo AgentIdentityAuthProvider#client_secret_wo}

---

##### `clientSecretWoVersion`<sup>Optional</sup> <a name="clientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWoVersion"></a>

```typescript
public readonly clientSecretWoVersion: string;
```

- *Type:* string

Triggers update of 'client_secret_wo' write-only.

Increment this value when an update to 'client_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret_wo_version AgentIdentityAuthProvider#client_secret_wo_version}

---

##### `defaultContinueUri`<sup>Optional</sup> <a name="defaultContinueUri" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.defaultContinueUri"></a>

```typescript
public readonly defaultContinueUri: string;
```

- *Type:* string

The default continue URI for 3LO flow and it will be used when no continue URI is provided in the RetrieveCredentials request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#default_continue_uri AgentIdentityAuthProvider#default_continue_uri}

---

##### `enablePkce`<sup>Optional</sup> <a name="enablePkce" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.enablePkce"></a>

```typescript
public readonly enablePkce: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables Proof Key for Code Exchange (PKCE) for the OAuth flow to prevent authorization code interception attacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#enable_pkce AgentIdentityAuthProvider#enable_pkce}

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

The token endpoint for requesting tokens on behalf of an end user. eg. "https://auth.atlassian.com/oauth/token".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#token_url AgentIdentityAuthProvider#token_url}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth <a name="AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

const agentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth: agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientId">clientId</a></code> | <code>string</code> | The client ID of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecret">clientSecret</a></code> | <code>string</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWo">clientSecretWo</a></code> | <code>string</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWoVersion">clientSecretWoVersion</a></code> | <code>string</code> | Triggers update of 'client_secret_wo' write-only. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | The token endpoint of the OAuth client. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_id AgentIdentityAuthProvider#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret AgentIdentityAuthProvider#client_secret}

---

##### `clientSecretWo`<sup>Optional</sup> <a name="clientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWo"></a>

```typescript
public readonly clientSecretWo: string;
```

- *Type:* string

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret_wo AgentIdentityAuthProvider#client_secret_wo}

---

##### `clientSecretWoVersion`<sup>Optional</sup> <a name="clientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWoVersion"></a>

```typescript
public readonly clientSecretWoVersion: string;
```

- *Type:* string

Triggers update of 'client_secret_wo' write-only.

Increment this value when an update to 'client_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret_wo_version AgentIdentityAuthProvider#client_secret_wo_version}

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

The token endpoint of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#token_url AgentIdentityAuthProvider#token_url}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

const agentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider: agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.additionalParameters">additionalParameters</a></code> | <code>{[ key: string ]: string}</code> | Optional. Additional parameters to be passed to the token endpoint. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.clientAssertionJwtAuth">clientAssertionJwtAuth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a></code> | client_assertion_jwt_auth block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.clientSecretAuth">clientSecretAuth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a></code> | client_secret_auth block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.customIssuer">customIssuer</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a></code> | custom_issuer block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.idTokenInput">idTokenInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a></code> | id_token_input block. |

---

##### `additionalParameters`<sup>Optional</sup> <a name="additionalParameters" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.additionalParameters"></a>

```typescript
public readonly additionalParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Additional parameters to be passed to the token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#additional_parameters AgentIdentityAuthProvider#additional_parameters}

---

##### `clientAssertionJwtAuth`<sup>Optional</sup> <a name="clientAssertionJwtAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.clientAssertionJwtAuth"></a>

```typescript
public readonly clientAssertionJwtAuth: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a>

client_assertion_jwt_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_assertion_jwt_auth AgentIdentityAuthProvider#client_assertion_jwt_auth}

---

##### `clientSecretAuth`<sup>Optional</sup> <a name="clientSecretAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.clientSecretAuth"></a>

```typescript
public readonly clientSecretAuth: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a>

client_secret_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret_auth AgentIdentityAuthProvider#client_secret_auth}

---

##### `customIssuer`<sup>Optional</sup> <a name="customIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.customIssuer"></a>

```typescript
public readonly customIssuer: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a>

custom_issuer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#custom_issuer AgentIdentityAuthProvider#custom_issuer}

---

##### `idTokenInput`<sup>Optional</sup> <a name="idTokenInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider.property.idTokenInput"></a>

```typescript
public readonly idTokenInput: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a>

id_token_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#id_token_input AgentIdentityAuthProvider#id_token_input}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

const agentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth: agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth.property.clientId">clientId</a></code> | <code>string</code> | Required. The client identifier. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Required. The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_id AgentIdentityAuthProvider#client_id}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

const agentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth: agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth.property.clientId">clientId</a></code> | <code>string</code> | Required. The client identifier. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth.property.clientSecret">clientSecret</a></code> | <code>string</code> | Required. Input only. The client secret. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Required. The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_id AgentIdentityAuthProvider#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Required. Input only. The client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#client_secret AgentIdentityAuthProvider#client_secret}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

const agentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer: agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | Required. The token endpoint of the target OAuth authorization server to retrieve resource tokens. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer.property.issuer">issuer</a></code> | <code>string</code> | Optional. The issuer identifier of the target Authorization Server. |

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

Required. The token endpoint of the target OAuth authorization server to retrieve resource tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#token_url AgentIdentityAuthProvider#token_url}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Optional. The issuer identifier of the target Authorization Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#issuer AgentIdentityAuthProvider#issuer}

---

### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

const agentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput: agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput.property.idJagAdditionalClaims">idJagAdditionalClaims</a></code> | <code>string</code> | Optional additional claims to include when fetching an ID-JAG, represented as a JSON-encoded string. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput.property.idJagAuthProvider">idJagAuthProvider</a></code> | <code>string</code> | The resource name of the ID-JAG auth provider. Format: 'projects/{{project}}/locations/{{location}}/authProviders/{{auth_provider}}'. |

---

##### `idJagAdditionalClaims`<sup>Optional</sup> <a name="idJagAdditionalClaims" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput.property.idJagAdditionalClaims"></a>

```typescript
public readonly idJagAdditionalClaims: string;
```

- *Type:* string

Optional additional claims to include when fetching an ID-JAG, represented as a JSON-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#id_jag_additional_claims AgentIdentityAuthProvider#id_jag_additional_claims}

---

##### `idJagAuthProvider`<sup>Optional</sup> <a name="idJagAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput.property.idJagAuthProvider"></a>

```typescript
public readonly idJagAuthProvider: string;
```

- *Type:* string

The resource name of the ID-JAG auth provider. Format: 'projects/{{project}}/locations/{{location}}/authProviders/{{auth_provider}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#id_jag_auth_provider AgentIdentityAuthProvider#id_jag_auth_provider}

---

### AgentIdentityAuthProviderConfig <a name="AgentIdentityAuthProviderConfig" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

const agentIdentityAuthProviderConfig: agentIdentityAuthProvider.AgentIdentityAuthProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.authProviderId">authProviderId</a></code> | <code>string</code> | The ID to use for the AuthProvider, which will become the final segment of the AuthProvider's resource name. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.authProviderTypeParams">authProviderTypeParams</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a></code> | auth_provider_type_params block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.allowedScopes">allowedScopes</a></code> | <code>string[]</code> | List of scopes that are allowed to be requested for this auth_provider. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.blockedScopes">blockedScopes</a></code> | <code>string[]</code> | List of scopes that are blocked from being requested for this auth_provider. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.description">description</a></code> | <code>string</code> | Description of the resource. Must be less than 256 characters. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#id AgentIdentityAuthProvider#id}. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#project AgentIdentityAuthProvider#project}. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.workloadIds">workloadIds</a></code> | <code>string[]</code> | Input only. Represents the workload identity in IAM 'principal://' format of the agent(s) that will use this AuthProvider. Example: 'principal://agents.global.org-${ORG_ID}.system.id.goog/resources/aiplatform/projects/{PROJECT_ID}/locations/{LOCATIONS}/reasoningEngines/{ID}'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authProviderId`<sup>Required</sup> <a name="authProviderId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.authProviderId"></a>

```typescript
public readonly authProviderId: string;
```

- *Type:* string

The ID to use for the AuthProvider, which will become the final segment of the AuthProvider's resource name.

This value should be 1-63 characters, and valid characters
are /a-z-/. The first character must be a lowercase letter, and the
last character must be a lowercase letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#auth_provider_id AgentIdentityAuthProvider#auth_provider_id}

---

##### `authProviderTypeParams`<sup>Required</sup> <a name="authProviderTypeParams" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.authProviderTypeParams"></a>

```typescript
public readonly authProviderTypeParams: AgentIdentityAuthProviderAuthProviderTypeParams;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a>

auth_provider_type_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#auth_provider_type_params AgentIdentityAuthProvider#auth_provider_type_params}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#location AgentIdentityAuthProvider#location}

---

##### `allowedScopes`<sup>Optional</sup> <a name="allowedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.allowedScopes"></a>

```typescript
public readonly allowedScopes: string[];
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

##### `blockedScopes`<sup>Optional</sup> <a name="blockedScopes" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.blockedScopes"></a>

```typescript
public readonly blockedScopes: string[];
```

- *Type:* string[]

List of scopes that are blocked from being requested for this auth_provider.

If a scope appears in this list, it will not be requested,
even if it also appears in 'allowed_scopes'. 'blocked_scopes' takes
precedence over 'allowed_scopes'. The number of blocked scopes is limited
to 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#blocked_scopes AgentIdentityAuthProvider#blocked_scopes}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#deletion_policy AgentIdentityAuthProvider#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the resource. Must be less than 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#description AgentIdentityAuthProvider#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#id AgentIdentityAuthProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#labels AgentIdentityAuthProvider#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#project AgentIdentityAuthProvider#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AgentIdentityAuthProviderTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#timeouts AgentIdentityAuthProvider#timeouts}

---

##### `workloadIds`<sup>Optional</sup> <a name="workloadIds" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderConfig.property.workloadIds"></a>

```typescript
public readonly workloadIds: string[];
```

- *Type:* string[]

Input only. Represents the workload identity in IAM 'principal://' format of the agent(s) that will use this AuthProvider. Example: 'principal://agents.global.org-${ORG_ID}.system.id.goog/resources/aiplatform/projects/{PROJECT_ID}/locations/{LOCATIONS}/reasoningEngines/{ID}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#workload_ids AgentIdentityAuthProvider#workload_ids}

---

### AgentIdentityAuthProviderTimeouts <a name="AgentIdentityAuthProviderTimeouts" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

const agentIdentityAuthProviderTimeouts: agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#create AgentIdentityAuthProvider#create}. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#delete AgentIdentityAuthProvider#delete}. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#update AgentIdentityAuthProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#create AgentIdentityAuthProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#delete AgentIdentityAuthProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/agent_identity_auth_provider#update AgentIdentityAuthProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

new agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resetApiKey"></a>

```typescript
public resetApiKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AgentIdentityAuthProviderAuthProviderTypeParamsApiKey;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

new agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.resetAuthorizationDetails">resetAuthorizationDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationDetails` <a name="resetAuthorizationDetails" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.resetAuthorizationDetails"></a>

```typescript
public resetAuthorizationDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.authorizationDetailsInput">authorizationDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.connectorInput">connectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.authorizationDetails">authorizationDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.connector">connector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationDetailsInput`<sup>Optional</sup> <a name="authorizationDetailsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.authorizationDetailsInput"></a>

```typescript
public readonly authorizationDetailsInput: string;
```

- *Type:* string

---

##### `connectorInput`<sup>Optional</sup> <a name="connectorInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.connectorInput"></a>

```typescript
public readonly connectorInput: string;
```

- *Type:* string

---

##### `authorizationDetails`<sup>Required</sup> <a name="authorizationDetails" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.authorizationDetails"></a>

```typescript
public readonly authorizationDetails: string;
```

- *Type:* string

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.connector"></a>

```typescript
public readonly connector: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList <a name="AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

new agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.get"></a>

```typescript
public get(index: number): AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

new agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

new agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putApiKey">putApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putConnectorReferenceAuthProvider">putConnectorReferenceAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth">putThreeLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth">putTwoLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putXaaAuthProvider">putXaaAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetConnectorReferenceAuthProvider">resetConnectorReferenceAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetThreeLeggedOauth">resetThreeLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetTwoLeggedOauth">resetTwoLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetXaaAuthProvider">resetXaaAuthProvider</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKey` <a name="putApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putApiKey"></a>

```typescript
public putApiKey(value: AgentIdentityAuthProviderAuthProviderTypeParamsApiKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

---

##### `putConnectorReferenceAuthProvider` <a name="putConnectorReferenceAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putConnectorReferenceAuthProvider"></a>

```typescript
public putConnectorReferenceAuthProvider(value: AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putConnectorReferenceAuthProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a>

---

##### `putThreeLeggedOauth` <a name="putThreeLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth"></a>

```typescript
public putThreeLeggedOauth(value: AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

---

##### `putTwoLeggedOauth` <a name="putTwoLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth"></a>

```typescript
public putTwoLeggedOauth(value: AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

---

##### `putXaaAuthProvider` <a name="putXaaAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putXaaAuthProvider"></a>

```typescript
public putXaaAuthProvider(value: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putXaaAuthProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a>

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetConnectorReferenceAuthProvider` <a name="resetConnectorReferenceAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetConnectorReferenceAuthProvider"></a>

```typescript
public resetConnectorReferenceAuthProvider(): void
```

##### `resetThreeLeggedOauth` <a name="resetThreeLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetThreeLeggedOauth"></a>

```typescript
public resetThreeLeggedOauth(): void
```

##### `resetTwoLeggedOauth` <a name="resetTwoLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetTwoLeggedOauth"></a>

```typescript
public resetTwoLeggedOauth(): void
```

##### `resetXaaAuthProvider` <a name="resetXaaAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetXaaAuthProvider"></a>

```typescript
public resetXaaAuthProvider(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.connectorReferenceAuthProvider">connectorReferenceAuthProvider</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.geAuthProvider">geAuthProvider</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList">AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauth">threeLeggedOauth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauth">twoLeggedOauth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.xaaAuthProvider">xaaAuthProvider</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.connectorReferenceAuthProviderInput">connectorReferenceAuthProviderInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauthInput">threeLeggedOauthInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauthInput">twoLeggedOauthInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.xaaAuthProviderInput">xaaAuthProviderInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference</a>

---

##### `connectorReferenceAuthProvider`<sup>Required</sup> <a name="connectorReferenceAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.connectorReferenceAuthProvider"></a>

```typescript
public readonly connectorReferenceAuthProvider: AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProviderOutputReference</a>

---

##### `geAuthProvider`<sup>Required</sup> <a name="geAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.geAuthProvider"></a>

```typescript
public readonly geAuthProvider: AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList">AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList</a>

---

##### `threeLeggedOauth`<sup>Required</sup> <a name="threeLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauth"></a>

```typescript
public readonly threeLeggedOauth: AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference</a>

---

##### `twoLeggedOauth`<sup>Required</sup> <a name="twoLeggedOauth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauth"></a>

```typescript
public readonly twoLeggedOauth: AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference</a>

---

##### `xaaAuthProvider`<sup>Required</sup> <a name="xaaAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.xaaAuthProvider"></a>

```typescript
public readonly xaaAuthProvider: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: AgentIdentityAuthProviderAuthProviderTypeParamsApiKey;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsApiKey">AgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

---

##### `connectorReferenceAuthProviderInput`<sup>Optional</sup> <a name="connectorReferenceAuthProviderInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.connectorReferenceAuthProviderInput"></a>

```typescript
public readonly connectorReferenceAuthProviderInput: AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsConnectorReferenceAuthProvider</a>

---

##### `threeLeggedOauthInput`<sup>Optional</sup> <a name="threeLeggedOauthInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauthInput"></a>

```typescript
public readonly threeLeggedOauthInput: AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

---

##### `twoLeggedOauthInput`<sup>Optional</sup> <a name="twoLeggedOauthInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauthInput"></a>

```typescript
public readonly twoLeggedOauthInput: AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

---

##### `xaaAuthProviderInput`<sup>Optional</sup> <a name="xaaAuthProviderInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.xaaAuthProviderInput"></a>

```typescript
public readonly xaaAuthProviderInput: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AgentIdentityAuthProviderAuthProviderTypeParams;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParams">AgentIdentityAuthProviderAuthProviderTypeParams</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

new agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetAuthorizationUrl">resetAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWo">resetClientSecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWoVersion">resetClientSecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetDefaultContinueUri">resetDefaultContinueUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetEnablePkce">resetEnablePkce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationUrl` <a name="resetAuthorizationUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetAuthorizationUrl"></a>

```typescript
public resetAuthorizationUrl(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretWo` <a name="resetClientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWo"></a>

```typescript
public resetClientSecretWo(): void
```

##### `resetClientSecretWoVersion` <a name="resetClientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWoVersion"></a>

```typescript
public resetClientSecretWoVersion(): void
```

##### `resetDefaultContinueUri` <a name="resetDefaultContinueUri" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetDefaultContinueUri"></a>

```typescript
public resetDefaultContinueUri(): void
```

##### `resetEnablePkce` <a name="resetEnablePkce" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetEnablePkce"></a>

```typescript
public resetEnablePkce(): void
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetTokenUrl"></a>

```typescript
public resetTokenUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrlInput">authorizationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoInput">clientSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersionInput">clientSecretWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUriInput">defaultContinueUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkceInput">enablePkceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWo">clientSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersion">clientSecretWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUri">defaultContinueUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkce">enablePkce</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

---

##### `authorizationUrlInput`<sup>Optional</sup> <a name="authorizationUrlInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrlInput"></a>

```typescript
public readonly authorizationUrlInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretWoInput`<sup>Optional</sup> <a name="clientSecretWoInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoInput"></a>

```typescript
public readonly clientSecretWoInput: string;
```

- *Type:* string

---

##### `clientSecretWoVersionInput`<sup>Optional</sup> <a name="clientSecretWoVersionInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersionInput"></a>

```typescript
public readonly clientSecretWoVersionInput: string;
```

- *Type:* string

---

##### `defaultContinueUriInput`<sup>Optional</sup> <a name="defaultContinueUriInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUriInput"></a>

```typescript
public readonly defaultContinueUriInput: string;
```

- *Type:* string

---

##### `enablePkceInput`<sup>Optional</sup> <a name="enablePkceInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkceInput"></a>

```typescript
public readonly enablePkceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrlInput"></a>

```typescript
public readonly tokenUrlInput: string;
```

- *Type:* string

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### ~~`clientSecretWo`~~<sup>Required</sup> <a name="clientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly clientSecretWo: string;
```

- *Type:* string

---

##### `clientSecretWoVersion`<sup>Required</sup> <a name="clientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersion"></a>

```typescript
public readonly clientSecretWoVersion: string;
```

- *Type:* string

---

##### `defaultContinueUri`<sup>Required</sup> <a name="defaultContinueUri" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUri"></a>

```typescript
public readonly defaultContinueUri: string;
```

- *Type:* string

---

##### `enablePkce`<sup>Required</sup> <a name="enablePkce" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkce"></a>

```typescript
public readonly enablePkce: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

new agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWo">resetClientSecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWoVersion">resetClientSecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretWo` <a name="resetClientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWo"></a>

```typescript
public resetClientSecretWo(): void
```

##### `resetClientSecretWoVersion` <a name="resetClientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWoVersion"></a>

```typescript
public resetClientSecretWoVersion(): void
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetTokenUrl"></a>

```typescript
public resetTokenUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoInput">clientSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersionInput">clientSecretWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWo">clientSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersion">clientSecretWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretWoInput`<sup>Optional</sup> <a name="clientSecretWoInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoInput"></a>

```typescript
public readonly clientSecretWoInput: string;
```

- *Type:* string

---

##### `clientSecretWoVersionInput`<sup>Optional</sup> <a name="clientSecretWoVersionInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersionInput"></a>

```typescript
public readonly clientSecretWoVersionInput: string;
```

- *Type:* string

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrlInput"></a>

```typescript
public readonly tokenUrlInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### ~~`clientSecretWo`~~<sup>Required</sup> <a name="clientSecretWo" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly clientSecretWo: string;
```

- *Type:* string

---

##### `clientSecretWoVersion`<sup>Required</sup> <a name="clientSecretWoVersion" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersion"></a>

```typescript
public readonly clientSecretWoVersion: string;
```

- *Type:* string

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

new agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

new agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

new agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.tokenUrlInput"></a>

```typescript
public readonly tokenUrlInput: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

new agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resetIdJagAdditionalClaims">resetIdJagAdditionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resetIdJagAuthProvider">resetIdJagAuthProvider</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdJagAdditionalClaims` <a name="resetIdJagAdditionalClaims" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resetIdJagAdditionalClaims"></a>

```typescript
public resetIdJagAdditionalClaims(): void
```

##### `resetIdJagAuthProvider` <a name="resetIdJagAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.resetIdJagAuthProvider"></a>

```typescript
public resetIdJagAuthProvider(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAdditionalClaimsInput">idJagAdditionalClaimsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAuthProviderInput">idJagAuthProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAdditionalClaims">idJagAdditionalClaims</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAuthProvider">idJagAuthProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idJagAdditionalClaimsInput`<sup>Optional</sup> <a name="idJagAdditionalClaimsInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAdditionalClaimsInput"></a>

```typescript
public readonly idJagAdditionalClaimsInput: string;
```

- *Type:* string

---

##### `idJagAuthProviderInput`<sup>Optional</sup> <a name="idJagAuthProviderInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAuthProviderInput"></a>

```typescript
public readonly idJagAuthProviderInput: string;
```

- *Type:* string

---

##### `idJagAdditionalClaims`<sup>Required</sup> <a name="idJagAdditionalClaims" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAdditionalClaims"></a>

```typescript
public readonly idJagAdditionalClaims: string;
```

- *Type:* string

---

##### `idJagAuthProvider`<sup>Required</sup> <a name="idJagAuthProvider" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.idJagAuthProvider"></a>

```typescript
public readonly idJagAuthProvider: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a>

---


### AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference <a name="AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

new agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putClientAssertionJwtAuth">putClientAssertionJwtAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putClientSecretAuth">putClientSecretAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putCustomIssuer">putCustomIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putIdTokenInput">putIdTokenInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetAdditionalParameters">resetAdditionalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetClientAssertionJwtAuth">resetClientAssertionJwtAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetClientSecretAuth">resetClientSecretAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetCustomIssuer">resetCustomIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetIdTokenInput">resetIdTokenInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientAssertionJwtAuth` <a name="putClientAssertionJwtAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putClientAssertionJwtAuth"></a>

```typescript
public putClientAssertionJwtAuth(value: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putClientAssertionJwtAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a>

---

##### `putClientSecretAuth` <a name="putClientSecretAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putClientSecretAuth"></a>

```typescript
public putClientSecretAuth(value: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putClientSecretAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a>

---

##### `putCustomIssuer` <a name="putCustomIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putCustomIssuer"></a>

```typescript
public putCustomIssuer(value: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putCustomIssuer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a>

---

##### `putIdTokenInput` <a name="putIdTokenInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putIdTokenInput"></a>

```typescript
public putIdTokenInput(value: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.putIdTokenInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a>

---

##### `resetAdditionalParameters` <a name="resetAdditionalParameters" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetAdditionalParameters"></a>

```typescript
public resetAdditionalParameters(): void
```

##### `resetClientAssertionJwtAuth` <a name="resetClientAssertionJwtAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetClientAssertionJwtAuth"></a>

```typescript
public resetClientAssertionJwtAuth(): void
```

##### `resetClientSecretAuth` <a name="resetClientSecretAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetClientSecretAuth"></a>

```typescript
public resetClientSecretAuth(): void
```

##### `resetCustomIssuer` <a name="resetCustomIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetCustomIssuer"></a>

```typescript
public resetCustomIssuer(): void
```

##### `resetIdTokenInput` <a name="resetIdTokenInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.resetIdTokenInput"></a>

```typescript
public resetIdTokenInput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientAssertionJwtAuth">clientAssertionJwtAuth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientSecretAuth">clientSecretAuth</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.customIssuer">customIssuer</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.idTokenInput">idTokenInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.additionalParametersInput">additionalParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientAssertionJwtAuthInput">clientAssertionJwtAuthInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientSecretAuthInput">clientSecretAuthInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.customIssuerInput">customIssuerInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.idTokenInputInput">idTokenInputInput</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.additionalParameters">additionalParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientAssertionJwtAuth`<sup>Required</sup> <a name="clientAssertionJwtAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientAssertionJwtAuth"></a>

```typescript
public readonly clientAssertionJwtAuth: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuthOutputReference</a>

---

##### `clientSecretAuth`<sup>Required</sup> <a name="clientSecretAuth" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientSecretAuth"></a>

```typescript
public readonly clientSecretAuth: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuthOutputReference</a>

---

##### `customIssuer`<sup>Required</sup> <a name="customIssuer" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.customIssuer"></a>

```typescript
public readonly customIssuer: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuerOutputReference</a>

---

##### `idTokenInput`<sup>Required</sup> <a name="idTokenInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.idTokenInput"></a>

```typescript
public readonly idTokenInput: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInputOutputReference</a>

---

##### `additionalParametersInput`<sup>Optional</sup> <a name="additionalParametersInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.additionalParametersInput"></a>

```typescript
public readonly additionalParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clientAssertionJwtAuthInput`<sup>Optional</sup> <a name="clientAssertionJwtAuthInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientAssertionJwtAuthInput"></a>

```typescript
public readonly clientAssertionJwtAuthInput: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientAssertionJwtAuth</a>

---

##### `clientSecretAuthInput`<sup>Optional</sup> <a name="clientSecretAuthInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.clientSecretAuthInput"></a>

```typescript
public readonly clientSecretAuthInput: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderClientSecretAuth</a>

---

##### `customIssuerInput`<sup>Optional</sup> <a name="customIssuerInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.customIssuerInput"></a>

```typescript
public readonly customIssuerInput: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderCustomIssuer</a>

---

##### `idTokenInputInput`<sup>Optional</sup> <a name="idTokenInputInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.idTokenInputInput"></a>

```typescript
public readonly idTokenInputInput: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderIdTokenInput</a>

---

##### `additionalParameters`<sup>Required</sup> <a name="additionalParameters" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.additionalParameters"></a>

```typescript
public readonly additionalParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider;
```

- *Type:* <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider">AgentIdentityAuthProviderAuthProviderTypeParamsXaaAuthProvider</a>

---


### AgentIdentityAuthProviderTimeoutsOutputReference <a name="AgentIdentityAuthProviderTimeoutsOutputReference" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.Initializer"></a>

```typescript
import { agentIdentityAuthProvider } from '@cdktn/provider-google'

new agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AgentIdentityAuthProviderTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.agentIdentityAuthProvider.AgentIdentityAuthProviderTimeouts">AgentIdentityAuthProviderTimeouts</a>

---



