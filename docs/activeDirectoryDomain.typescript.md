# `activeDirectoryDomain` Submodule <a name="`activeDirectoryDomain` Submodule" id="@cdktn/provider-google.activeDirectoryDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveDirectoryDomain <a name="ActiveDirectoryDomain" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain google_active_directory_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer"></a>

```typescript
import { activeDirectoryDomain } from '@cdktn/provider-google'

new activeDirectoryDomain.ActiveDirectoryDomain(scope: Construct, id: string, config: ActiveDirectoryDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig">ActiveDirectoryDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig">ActiveDirectoryDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetAdmin">resetAdmin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetAuthorizedNetworks">resetAuthorizedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: ActiveDirectoryDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a>

---

##### `resetAdmin` <a name="resetAdmin" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetAdmin"></a>

```typescript
public resetAdmin(): void
```

##### `resetAuthorizedNetworks` <a name="resetAuthorizedNetworks" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetAuthorizedNetworks"></a>

```typescript
public resetAuthorizedNetworks(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ActiveDirectoryDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isConstruct"></a>

```typescript
import { activeDirectoryDomain } from '@cdktn/provider-google'

activeDirectoryDomain.ActiveDirectoryDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformElement"></a>

```typescript
import { activeDirectoryDomain } from '@cdktn/provider-google'

activeDirectoryDomain.ActiveDirectoryDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformResource"></a>

```typescript
import { activeDirectoryDomain } from '@cdktn/provider-google'

activeDirectoryDomain.ActiveDirectoryDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.generateConfigForImport"></a>

```typescript
import { activeDirectoryDomain } from '@cdktn/provider-google'

activeDirectoryDomain.ActiveDirectoryDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ActiveDirectoryDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActiveDirectoryDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActiveDirectoryDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ActiveDirectoryDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference">ActiveDirectoryDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.adminInput">adminInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.authorizedNetworksInput">authorizedNetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.locationsInput">locationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.reservedIpRangeInput">reservedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.admin">admin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.authorizedNetworks">authorizedNetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.reservedIpRange">reservedIpRange</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.timeouts"></a>

```typescript
public readonly timeouts: ActiveDirectoryDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference">ActiveDirectoryDomainTimeoutsOutputReference</a>

---

##### `adminInput`<sup>Optional</sup> <a name="adminInput" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.adminInput"></a>

```typescript
public readonly adminInput: string;
```

- *Type:* string

---

##### `authorizedNetworksInput`<sup>Optional</sup> <a name="authorizedNetworksInput" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.authorizedNetworksInput"></a>

```typescript
public readonly authorizedNetworksInput: string[];
```

- *Type:* string[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.locationsInput"></a>

```typescript
public readonly locationsInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `reservedIpRangeInput`<sup>Optional</sup> <a name="reservedIpRangeInput" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.reservedIpRangeInput"></a>

```typescript
public readonly reservedIpRangeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ActiveDirectoryDomainTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a>

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.admin"></a>

```typescript
public readonly admin: string;
```

- *Type:* string

---

##### `authorizedNetworks`<sup>Required</sup> <a name="authorizedNetworks" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.authorizedNetworks"></a>

```typescript
public readonly authorizedNetworks: string[];
```

- *Type:* string[]

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `reservedIpRange`<sup>Required</sup> <a name="reservedIpRange" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.reservedIpRange"></a>

```typescript
public readonly reservedIpRange: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActiveDirectoryDomainConfig <a name="ActiveDirectoryDomainConfig" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.Initializer"></a>

```typescript
import { activeDirectoryDomain } from '@cdktn/provider-google'

const activeDirectoryDomainConfig: activeDirectoryDomain.ActiveDirectoryDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.domainName">domainName</a></code> | <code>string</code> | The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.locations">locations</a></code> | <code>string[]</code> | Locations where domain needs to be provisioned. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.reservedIpRange">reservedIpRange</a></code> | <code>string</code> | The CIDR range of internal addresses that are reserved for this domain. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.admin">admin</a></code> | <code>string</code> | The name of delegated administrator account used to perform Active Directory operations. If not specified, setupadmin will be used. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.authorizedNetworks">authorizedNetworks</a></code> | <code>string[]</code> | The full names of the Google Compute Engine networks the domain instance is connected to. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Terraform will be prevented from destroying the domain. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#id ActiveDirectoryDomain#id}. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#project ActiveDirectoryDomain#project}. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#domain_name ActiveDirectoryDomain#domain_name}

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

Locations where domain needs to be provisioned.

[regions][compute/docs/regions-zones/]
e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#locations ActiveDirectoryDomain#locations}

---

##### `reservedIpRange`<sup>Required</sup> <a name="reservedIpRange" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.reservedIpRange"></a>

```typescript
public readonly reservedIpRange: string;
```

- *Type:* string

The CIDR range of internal addresses that are reserved for this domain.

Reserved networks must be /24 or larger.
Ranges must be unique and non-overlapping with existing subnets in authorizedNetworks

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#reserved_ip_range ActiveDirectoryDomain#reserved_ip_range}

---

##### `admin`<sup>Optional</sup> <a name="admin" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.admin"></a>

```typescript
public readonly admin: string;
```

- *Type:* string

The name of delegated administrator account used to perform Active Directory operations. If not specified, setupadmin will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#admin ActiveDirectoryDomain#admin}

---

##### `authorizedNetworks`<sup>Optional</sup> <a name="authorizedNetworks" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.authorizedNetworks"></a>

```typescript
public readonly authorizedNetworks: string[];
```

- *Type:* string[]

The full names of the Google Compute Engine networks the domain instance is connected to.

The domain is only available on networks listed in authorizedNetworks.
If CIDR subnets overlap between networks, domain creation will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#authorized_networks ActiveDirectoryDomain#authorized_networks}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#deletion_policy ActiveDirectoryDomain#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Terraform will be prevented from destroying the domain.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the domain,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the domain will fail.
When the field is set to false, deleting the domain is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#deletion_protection ActiveDirectoryDomain#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#id ActiveDirectoryDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels that can contain user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#labels ActiveDirectoryDomain#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#project ActiveDirectoryDomain#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ActiveDirectoryDomainTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#timeouts ActiveDirectoryDomain#timeouts}

---

### ActiveDirectoryDomainTimeouts <a name="ActiveDirectoryDomainTimeouts" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.Initializer"></a>

```typescript
import { activeDirectoryDomain } from '@cdktn/provider-google'

const activeDirectoryDomainTimeouts: activeDirectoryDomain.ActiveDirectoryDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#create ActiveDirectoryDomain#create}. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#delete ActiveDirectoryDomain#delete}. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#update ActiveDirectoryDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#create ActiveDirectoryDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#delete ActiveDirectoryDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/active_directory_domain#update ActiveDirectoryDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveDirectoryDomainTimeoutsOutputReference <a name="ActiveDirectoryDomainTimeoutsOutputReference" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { activeDirectoryDomain } from '@cdktn/provider-google'

new activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActiveDirectoryDomainTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a>

---



