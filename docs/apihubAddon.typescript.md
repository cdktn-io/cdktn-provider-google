# `apihubAddon` Submodule <a name="`apihubAddon` Submodule" id="@cdktn/provider-google.apihubAddon"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubAddon <a name="ApihubAddon" id="@cdktn/provider-google.apihubAddon.ApihubAddon"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon google_apihub_addon}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

new apihubAddon.ApihubAddon(scope: Construct, id: string, config: ApihubAddonConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig">ApihubAddonConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig">ApihubAddonConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apihubAddon.ApihubAddon.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apihubAddon.ApihubAddon.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apihubAddon.ApihubAddon.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.apihubAddon.ApihubAddon.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.apihubAddon.ApihubAddon.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.apihubAddon.ApihubAddon.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.apihubAddon.ApihubAddon.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.apihubAddon.ApihubAddon.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubAddon.ApihubAddon.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putConfig"></a>

```typescript
public putConfig(value: ApihubAddonConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putTimeouts"></a>

```typescript
public putTimeouts(value: ApihubAddonTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.apihubAddon.ApihubAddon.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddon.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApihubAddon resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isConstruct"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

apihubAddon.ApihubAddon.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformElement"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

apihubAddon.ApihubAddon.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformResource"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

apihubAddon.ApihubAddon.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

apihubAddon.ApihubAddon.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApihubAddon resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApihubAddon to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApihubAddon that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApihubAddon to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.boostSpecGeminiRegionId">boostSpecGeminiRegionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference">ApihubAddonConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference">ApihubAddonTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.addonIdInput">addonIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.configInput">configInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.addonId">addonId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `boostSpecGeminiRegionId`<sup>Required</sup> <a name="boostSpecGeminiRegionId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.boostSpecGeminiRegionId"></a>

```typescript
public readonly boostSpecGeminiRegionId: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.config"></a>

```typescript
public readonly config: ApihubAddonConfigAOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference">ApihubAddonConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.timeouts"></a>

```typescript
public readonly timeouts: ApihubAddonTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference">ApihubAddonTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `addonIdInput`<sup>Optional</sup> <a name="addonIdInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.addonIdInput"></a>

```typescript
public readonly addonIdInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.configInput"></a>

```typescript
public readonly configInput: ApihubAddonConfigA;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApihubAddonTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a>

---

##### `addonId`<sup>Required</sup> <a name="addonId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.addonId"></a>

```typescript
public readonly addonId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubAddonConfig <a name="ApihubAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

const apihubAddonConfig: apihubAddon.ApihubAddonConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.addonId">addonId</a></code> | <code>string</code> | The ID of the addon. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#id ApihubAddon#id}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#project ApihubAddon#project}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `addonId`<sup>Required</sup> <a name="addonId" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.addonId"></a>

```typescript
public readonly addonId: string;
```

- *Type:* string

The ID of the addon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#addon_id ApihubAddon#addon_id}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.config"></a>

```typescript
public readonly config: ApihubAddonConfigA;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#config ApihubAddon#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#location ApihubAddon#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#id ApihubAddon#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#project ApihubAddon#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApihubAddonTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#timeouts ApihubAddon#timeouts}

---

### ApihubAddonConfigA <a name="ApihubAddonConfigA" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

const apihubAddonConfigA: apihubAddon.ApihubAddonConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.property.allDataAddonConfig">allDataAddonConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a></code> | all_data_addon_config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.property.gatewayPluginAddonConfig">gatewayPluginAddonConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a></code> | gateway_plugin_addon_config block. |

---

##### `allDataAddonConfig`<sup>Optional</sup> <a name="allDataAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.property.allDataAddonConfig"></a>

```typescript
public readonly allDataAddonConfig: ApihubAddonConfigAllDataAddonConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a>

all_data_addon_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_data_addon_config ApihubAddon#all_data_addon_config}

---

##### `gatewayPluginAddonConfig`<sup>Optional</sup> <a name="gatewayPluginAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.property.gatewayPluginAddonConfig"></a>

```typescript
public readonly gatewayPluginAddonConfig: ApihubAddonConfigGatewayPluginAddonConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a>

gateway_plugin_addon_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#gateway_plugin_addon_config ApihubAddon#gateway_plugin_addon_config}

---

### ApihubAddonConfigAllDataAddonConfig <a name="ApihubAddonConfigAllDataAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

const apihubAddonConfigAllDataAddonConfig: apihubAddon.ApihubAddonConfigAllDataAddonConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, the addon is enabled for all data in the API hub. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, the addon is enabled for all data in the API hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#enabled ApihubAddon#enabled}

---

### ApihubAddonConfigGatewayPluginAddonConfig <a name="ApihubAddonConfigGatewayPluginAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

const apihubAddonConfigGatewayPluginAddonConfig: apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig.property.gatewayPluginConfigs">gatewayPluginConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>[]</code> | gateway_plugin_configs block. |

---

##### `gatewayPluginConfigs`<sup>Required</sup> <a name="gatewayPluginConfigs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig.property.gatewayPluginConfigs"></a>

```typescript
public readonly gatewayPluginConfigs: IResolvable | ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>[]

gateway_plugin_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#gateway_plugin_configs ApihubAddon#gateway_plugin_configs}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

const apihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs: apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.pluginInstance">pluginInstance</a></code> | <code>string</code> | The name of the gateway plugin instance for which the config is to be specified. Format: projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeEdgeConfig">apigeeEdgeConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a></code> | apigee_edge_config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeOpdkConfig">apigeeOpdkConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a></code> | apigee_opdk_config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeXHybridConfig">apigeeXHybridConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a></code> | apigee_x_hybrid_config block. |

---

##### `pluginInstance`<sup>Required</sup> <a name="pluginInstance" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.pluginInstance"></a>

```typescript
public readonly pluginInstance: string;
```

- *Type:* string

The name of the gateway plugin instance for which the config is to be specified. Format: projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#plugin_instance ApihubAddon#plugin_instance}

---

##### `apigeeEdgeConfig`<sup>Optional</sup> <a name="apigeeEdgeConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeEdgeConfig"></a>

```typescript
public readonly apigeeEdgeConfig: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a>

apigee_edge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#apigee_edge_config ApihubAddon#apigee_edge_config}

---

##### `apigeeOpdkConfig`<sup>Optional</sup> <a name="apigeeOpdkConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeOpdkConfig"></a>

```typescript
public readonly apigeeOpdkConfig: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a>

apigee_opdk_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#apigee_opdk_config ApihubAddon#apigee_opdk_config}

---

##### `apigeeXHybridConfig`<sup>Optional</sup> <a name="apigeeXHybridConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeXHybridConfig"></a>

```typescript
public readonly apigeeXHybridConfig: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a>

apigee_x_hybrid_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#apigee_x_hybrid_config ApihubAddon#apigee_x_hybrid_config}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

const apihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig: apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig.property.environmentFilter">environmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a></code> | environment_filter block. |

---

##### `environmentFilter`<sup>Optional</sup> <a name="environmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig.property.environmentFilter"></a>

```typescript
public readonly environmentFilter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a>

environment_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environment_filter ApihubAddon#environment_filter}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

const apihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter: apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.property.allEnvironments">allEnvironments</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates if this filter should match all environments or only a subset of environments. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.property.environments">environments</a></code> | <code>string[]</code> | If provided, only environments in this list are matched. |

---

##### `allEnvironments`<sup>Optional</sup> <a name="allEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.property.allEnvironments"></a>

```typescript
public readonly allEnvironments: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates if this filter should match all environments or only a subset of environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_environments ApihubAddon#all_environments}

---

##### `environments`<sup>Optional</sup> <a name="environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.property.environments"></a>

```typescript
public readonly environments: string[];
```

- *Type:* string[]

If provided, only environments in this list are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environments ApihubAddon#environments}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

const apihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig: apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig.property.environmentFilter">environmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a></code> | environment_filter block. |

---

##### `environmentFilter`<sup>Optional</sup> <a name="environmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig.property.environmentFilter"></a>

```typescript
public readonly environmentFilter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a>

environment_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environment_filter ApihubAddon#environment_filter}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

const apihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter: apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.property.allEnvironments">allEnvironments</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates if this filter should match all environments or only a subset of environments. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.property.environments">environments</a></code> | <code>string[]</code> | If provided, only environments in this list are matched. |

---

##### `allEnvironments`<sup>Optional</sup> <a name="allEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.property.allEnvironments"></a>

```typescript
public readonly allEnvironments: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates if this filter should match all environments or only a subset of environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_environments ApihubAddon#all_environments}

---

##### `environments`<sup>Optional</sup> <a name="environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.property.environments"></a>

```typescript
public readonly environments: string[];
```

- *Type:* string[]

If provided, only environments in this list are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environments ApihubAddon#environments}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

const apihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig: apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig.property.environmentFilter">environmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a></code> | environment_filter block. |

---

##### `environmentFilter`<sup>Optional</sup> <a name="environmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig.property.environmentFilter"></a>

```typescript
public readonly environmentFilter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a>

environment_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environment_filter ApihubAddon#environment_filter}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

const apihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter: apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.property.allEnvironments">allEnvironments</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates if this filter should match all environments or only a subset of environments. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.property.environments">environments</a></code> | <code>string[]</code> | If provided, only environments in this list are matched. |

---

##### `allEnvironments`<sup>Optional</sup> <a name="allEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.property.allEnvironments"></a>

```typescript
public readonly allEnvironments: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates if this filter should match all environments or only a subset of environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_environments ApihubAddon#all_environments}

---

##### `environments`<sup>Optional</sup> <a name="environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.property.environments"></a>

```typescript
public readonly environments: string[];
```

- *Type:* string[]

If provided, only environments in this list are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environments ApihubAddon#environments}

---

### ApihubAddonTimeouts <a name="ApihubAddonTimeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

const apihubAddonTimeouts: apihubAddon.ApihubAddonTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#create ApihubAddon#create}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#delete ApihubAddon#delete}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#update ApihubAddon#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#create ApihubAddon#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#delete ApihubAddon#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#update ApihubAddon#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubAddonConfigAllDataAddonConfigOutputReference <a name="ApihubAddonConfigAllDataAddonConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

new apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubAddonConfigAllDataAddonConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a>

---


### ApihubAddonConfigAOutputReference <a name="ApihubAddonConfigAOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

new apihubAddon.ApihubAddonConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putAllDataAddonConfig">putAllDataAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putGatewayPluginAddonConfig">putGatewayPluginAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resetAllDataAddonConfig">resetAllDataAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resetGatewayPluginAddonConfig">resetGatewayPluginAddonConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllDataAddonConfig` <a name="putAllDataAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putAllDataAddonConfig"></a>

```typescript
public putAllDataAddonConfig(value: ApihubAddonConfigAllDataAddonConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putAllDataAddonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a>

---

##### `putGatewayPluginAddonConfig` <a name="putGatewayPluginAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putGatewayPluginAddonConfig"></a>

```typescript
public putGatewayPluginAddonConfig(value: ApihubAddonConfigGatewayPluginAddonConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putGatewayPluginAddonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a>

---

##### `resetAllDataAddonConfig` <a name="resetAllDataAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resetAllDataAddonConfig"></a>

```typescript
public resetAllDataAddonConfig(): void
```

##### `resetGatewayPluginAddonConfig` <a name="resetGatewayPluginAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resetGatewayPluginAddonConfig"></a>

```typescript
public resetGatewayPluginAddonConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.allDataAddonConfig">allDataAddonConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference">ApihubAddonConfigAllDataAddonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.gatewayPluginAddonConfig">gatewayPluginAddonConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.allDataAddonConfigInput">allDataAddonConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.gatewayPluginAddonConfigInput">gatewayPluginAddonConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allDataAddonConfig`<sup>Required</sup> <a name="allDataAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.allDataAddonConfig"></a>

```typescript
public readonly allDataAddonConfig: ApihubAddonConfigAllDataAddonConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference">ApihubAddonConfigAllDataAddonConfigOutputReference</a>

---

##### `gatewayPluginAddonConfig`<sup>Required</sup> <a name="gatewayPluginAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.gatewayPluginAddonConfig"></a>

```typescript
public readonly gatewayPluginAddonConfig: ApihubAddonConfigGatewayPluginAddonConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigOutputReference</a>

---

##### `allDataAddonConfigInput`<sup>Optional</sup> <a name="allDataAddonConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.allDataAddonConfigInput"></a>

```typescript
public readonly allDataAddonConfigInput: ApihubAddonConfigAllDataAddonConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a>

---

##### `gatewayPluginAddonConfigInput`<sup>Optional</sup> <a name="gatewayPluginAddonConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.gatewayPluginAddonConfigInput"></a>

```typescript
public readonly gatewayPluginAddonConfigInput: ApihubAddonConfigGatewayPluginAddonConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubAddonConfigA;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

new apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resetAllEnvironments">resetAllEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resetEnvironments">resetEnvironments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllEnvironments` <a name="resetAllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resetAllEnvironments"></a>

```typescript
public resetAllEnvironments(): void
```

##### `resetEnvironments` <a name="resetEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resetEnvironments"></a>

```typescript
public resetEnvironments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput">allEnvironmentsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.environmentsInput">environmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.allEnvironments">allEnvironments</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.environments">environments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allEnvironmentsInput`<sup>Optional</sup> <a name="allEnvironmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput"></a>

```typescript
public readonly allEnvironmentsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `environmentsInput`<sup>Optional</sup> <a name="environmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.environmentsInput"></a>

```typescript
public readonly environmentsInput: string[];
```

- *Type:* string[]

---

##### `allEnvironments`<sup>Required</sup> <a name="allEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.allEnvironments"></a>

```typescript
public readonly allEnvironments: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.environments"></a>

```typescript
public readonly environments: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

new apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.putEnvironmentFilter">putEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resetEnvironmentFilter">resetEnvironmentFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvironmentFilter` <a name="putEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.putEnvironmentFilter"></a>

```typescript
public putEnvironmentFilter(value: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.putEnvironmentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a>

---

##### `resetEnvironmentFilter` <a name="resetEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resetEnvironmentFilter"></a>

```typescript
public resetEnvironmentFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.environmentFilter">environmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.environmentFilterInput">environmentFilterInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentFilter`<sup>Required</sup> <a name="environmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.environmentFilter"></a>

```typescript
public readonly environmentFilter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference</a>

---

##### `environmentFilterInput`<sup>Optional</sup> <a name="environmentFilterInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.environmentFilterInput"></a>

```typescript
public readonly environmentFilterInput: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

new apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resetAllEnvironments">resetAllEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resetEnvironments">resetEnvironments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllEnvironments` <a name="resetAllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resetAllEnvironments"></a>

```typescript
public resetAllEnvironments(): void
```

##### `resetEnvironments` <a name="resetEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resetEnvironments"></a>

```typescript
public resetEnvironments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput">allEnvironmentsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.environmentsInput">environmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.allEnvironments">allEnvironments</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.environments">environments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allEnvironmentsInput`<sup>Optional</sup> <a name="allEnvironmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput"></a>

```typescript
public readonly allEnvironmentsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `environmentsInput`<sup>Optional</sup> <a name="environmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.environmentsInput"></a>

```typescript
public readonly environmentsInput: string[];
```

- *Type:* string[]

---

##### `allEnvironments`<sup>Required</sup> <a name="allEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.allEnvironments"></a>

```typescript
public readonly allEnvironments: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.environments"></a>

```typescript
public readonly environments: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

new apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.putEnvironmentFilter">putEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resetEnvironmentFilter">resetEnvironmentFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvironmentFilter` <a name="putEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.putEnvironmentFilter"></a>

```typescript
public putEnvironmentFilter(value: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.putEnvironmentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a>

---

##### `resetEnvironmentFilter` <a name="resetEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resetEnvironmentFilter"></a>

```typescript
public resetEnvironmentFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.environmentFilter">environmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.environmentFilterInput">environmentFilterInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentFilter`<sup>Required</sup> <a name="environmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.environmentFilter"></a>

```typescript
public readonly environmentFilter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference</a>

---

##### `environmentFilterInput`<sup>Optional</sup> <a name="environmentFilterInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.environmentFilterInput"></a>

```typescript
public readonly environmentFilterInput: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

new apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resetAllEnvironments">resetAllEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resetEnvironments">resetEnvironments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllEnvironments` <a name="resetAllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resetAllEnvironments"></a>

```typescript
public resetAllEnvironments(): void
```

##### `resetEnvironments` <a name="resetEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resetEnvironments"></a>

```typescript
public resetEnvironments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput">allEnvironmentsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.environmentsInput">environmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.allEnvironments">allEnvironments</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.environments">environments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allEnvironmentsInput`<sup>Optional</sup> <a name="allEnvironmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput"></a>

```typescript
public readonly allEnvironmentsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `environmentsInput`<sup>Optional</sup> <a name="environmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.environmentsInput"></a>

```typescript
public readonly environmentsInput: string[];
```

- *Type:* string[]

---

##### `allEnvironments`<sup>Required</sup> <a name="allEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.allEnvironments"></a>

```typescript
public readonly allEnvironments: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.environments"></a>

```typescript
public readonly environments: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

new apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.putEnvironmentFilter">putEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resetEnvironmentFilter">resetEnvironmentFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvironmentFilter` <a name="putEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.putEnvironmentFilter"></a>

```typescript
public putEnvironmentFilter(value: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.putEnvironmentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a>

---

##### `resetEnvironmentFilter` <a name="resetEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resetEnvironmentFilter"></a>

```typescript
public resetEnvironmentFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.environmentFilter">environmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.environmentFilterInput">environmentFilterInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentFilter`<sup>Required</sup> <a name="environmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.environmentFilter"></a>

```typescript
public readonly environmentFilter: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference</a>

---

##### `environmentFilterInput`<sup>Optional</sup> <a name="environmentFilterInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.environmentFilterInput"></a>

```typescript
public readonly environmentFilterInput: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

new apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.get"></a>

```typescript
public get(index: number): ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>[]

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

new apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeEdgeConfig">putApigeeEdgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeOpdkConfig">putApigeeOpdkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeXHybridConfig">putApigeeXHybridConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeEdgeConfig">resetApigeeEdgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeOpdkConfig">resetApigeeOpdkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeXHybridConfig">resetApigeeXHybridConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApigeeEdgeConfig` <a name="putApigeeEdgeConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeEdgeConfig"></a>

```typescript
public putApigeeEdgeConfig(value: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeEdgeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a>

---

##### `putApigeeOpdkConfig` <a name="putApigeeOpdkConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeOpdkConfig"></a>

```typescript
public putApigeeOpdkConfig(value: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeOpdkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a>

---

##### `putApigeeXHybridConfig` <a name="putApigeeXHybridConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeXHybridConfig"></a>

```typescript
public putApigeeXHybridConfig(value: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeXHybridConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a>

---

##### `resetApigeeEdgeConfig` <a name="resetApigeeEdgeConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeEdgeConfig"></a>

```typescript
public resetApigeeEdgeConfig(): void
```

##### `resetApigeeOpdkConfig` <a name="resetApigeeOpdkConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeOpdkConfig"></a>

```typescript
public resetApigeeOpdkConfig(): void
```

##### `resetApigeeXHybridConfig` <a name="resetApigeeXHybridConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeXHybridConfig"></a>

```typescript
public resetApigeeXHybridConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeEdgeConfig">apigeeEdgeConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeOpdkConfig">apigeeOpdkConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeXHybridConfig">apigeeXHybridConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeEdgeConfigInput">apigeeEdgeConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeOpdkConfigInput">apigeeOpdkConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeXHybridConfigInput">apigeeXHybridConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.pluginInstanceInput">pluginInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.pluginInstance">pluginInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apigeeEdgeConfig`<sup>Required</sup> <a name="apigeeEdgeConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeEdgeConfig"></a>

```typescript
public readonly apigeeEdgeConfig: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference</a>

---

##### `apigeeOpdkConfig`<sup>Required</sup> <a name="apigeeOpdkConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeOpdkConfig"></a>

```typescript
public readonly apigeeOpdkConfig: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference</a>

---

##### `apigeeXHybridConfig`<sup>Required</sup> <a name="apigeeXHybridConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeXHybridConfig"></a>

```typescript
public readonly apigeeXHybridConfig: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference</a>

---

##### `apigeeEdgeConfigInput`<sup>Optional</sup> <a name="apigeeEdgeConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeEdgeConfigInput"></a>

```typescript
public readonly apigeeEdgeConfigInput: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a>

---

##### `apigeeOpdkConfigInput`<sup>Optional</sup> <a name="apigeeOpdkConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeOpdkConfigInput"></a>

```typescript
public readonly apigeeOpdkConfigInput: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a>

---

##### `apigeeXHybridConfigInput`<sup>Optional</sup> <a name="apigeeXHybridConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeXHybridConfigInput"></a>

```typescript
public readonly apigeeXHybridConfigInput: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a>

---

##### `pluginInstanceInput`<sup>Optional</sup> <a name="pluginInstanceInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.pluginInstanceInput"></a>

```typescript
public readonly pluginInstanceInput: string;
```

- *Type:* string

---

##### `pluginInstance`<sup>Required</sup> <a name="pluginInstance" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.pluginInstance"></a>

```typescript
public readonly pluginInstance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

new apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.putGatewayPluginConfigs">putGatewayPluginConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGatewayPluginConfigs` <a name="putGatewayPluginConfigs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.putGatewayPluginConfigs"></a>

```typescript
public putGatewayPluginConfigs(value: IResolvable | ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.putGatewayPluginConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.gatewayPluginConfigs">gatewayPluginConfigs</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.gatewayPluginConfigsInput">gatewayPluginConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gatewayPluginConfigs`<sup>Required</sup> <a name="gatewayPluginConfigs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.gatewayPluginConfigs"></a>

```typescript
public readonly gatewayPluginConfigs: ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList</a>

---

##### `gatewayPluginConfigsInput`<sup>Optional</sup> <a name="gatewayPluginConfigsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.gatewayPluginConfigsInput"></a>

```typescript
public readonly gatewayPluginConfigsInput: IResolvable | ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubAddonConfigGatewayPluginAddonConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a>

---


### ApihubAddonTimeoutsOutputReference <a name="ApihubAddonTimeoutsOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer"></a>

```typescript
import { apihubAddon } from '@cdktn/provider-google'

new apihubAddon.ApihubAddonTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubAddonTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a>

---



