# `netappActiveDirectory` Submodule <a name="`netappActiveDirectory` Submodule" id="@cdktn/provider-google.netappActiveDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappActiveDirectory <a name="NetappActiveDirectory" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory google_netapp_active_directory}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer"></a>

```java
import io.cdktn.providers.google.netapp_active_directory.NetappActiveDirectory;

NetappActiveDirectory.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dns(java.lang.String)
    .domain(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .netBiosPrefix(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .administrators(java.util.List<java.lang.String>)
//  .aesEncryption(java.lang.Boolean|IResolvable)
//  .backupOperators(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .encryptDcConnections(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .kdcHostname(java.lang.String)
//  .kdcIp(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .ldapSigning(java.lang.Boolean|IResolvable)
//  .nfsUsersWithLdap(java.lang.Boolean|IResolvable)
//  .organizationalUnit(java.lang.String)
//  .project(java.lang.String)
//  .securityOperators(java.util.List<java.lang.String>)
//  .site(java.lang.String)
//  .timeouts(NetappActiveDirectoryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.dns">dns</a></code> | <code>java.lang.String</code> | Comma separated list of DNS server IP addresses for the Active Directory domain. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Fully qualified domain name for the Active Directory domain. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Name of the region for the policy to apply to. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Active Directory pool. Needs to be unique per location. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.netBiosPrefix">netBiosPrefix</a></code> | <code>java.lang.String</code> | NetBIOS name prefix of the server to be created. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Password for specified username. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Username for the Active Directory account with permissions to create the compute account within the specified organizational unit. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.administrators">administrators</a></code> | <code>java.util.List<java.lang.String></code> | Domain user accounts to be added to the local Administrators group of the SMB service. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.aesEncryption">aesEncryption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.backupOperators">backupOperators</a></code> | <code>java.util.List<java.lang.String></code> | Domain user/group accounts to be added to the Backup Operators group of the SMB service. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.encryptDcConnections">encryptDcConnections</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#id NetappActiveDirectory#id}. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.kdcHostname">kdcHostname</a></code> | <code>java.lang.String</code> | Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only required for volumes using kerberized NFSv4.1. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.kdcIp">kdcIp</a></code> | <code>java.lang.String</code> | IP address of the Active Directory server used as Kerberos Key Distribution Center. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.ldapSigning">ldapSigning</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether or not the LDAP traffic needs to be signed. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.nfsUsersWithLdap">nfsUsersWithLdap</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#project NetappActiveDirectory#project}. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.securityOperators">securityOperators</a></code> | <code>java.util.List<java.lang.String></code> | Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.site">site</a></code> | <code>java.lang.String</code> | Specifies an Active Directory site to manage domain controller selection. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.dns"></a>

- *Type:* java.lang.String

Comma separated list of DNS server IP addresses for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#dns NetappActiveDirectory#dns}

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Fully qualified domain name for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#domain NetappActiveDirectory#domain}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Name of the region for the policy to apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#location NetappActiveDirectory#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the Active Directory pool. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#name NetappActiveDirectory#name}

---

##### `netBiosPrefix`<sup>Required</sup> <a name="netBiosPrefix" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.netBiosPrefix"></a>

- *Type:* java.lang.String

NetBIOS name prefix of the server to be created.

A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
'\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#net_bios_prefix NetappActiveDirectory#net_bios_prefix}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Password for specified username.

Note - Manual changes done to the password will not be detected. Terraform will not re-apply the password, unless you use a new password in Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#password NetappActiveDirectory#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#username NetappActiveDirectory#username}

---

##### `administrators`<sup>Optional</sup> <a name="administrators" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.administrators"></a>

- *Type:* java.util.List<java.lang.String>

Domain user accounts to be added to the local Administrators group of the SMB service.

Comma-separated list of domain users or groups. The Domain Admin group is automatically added when the service joins your domain as a hidden group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#administrators NetappActiveDirectory#administrators}

---

##### `aesEncryption`<sup>Optional</sup> <a name="aesEncryption" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.aesEncryption"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#aes_encryption NetappActiveDirectory#aes_encryption}

---

##### `backupOperators`<sup>Optional</sup> <a name="backupOperators" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.backupOperators"></a>

- *Type:* java.util.List<java.lang.String>

Domain user/group accounts to be added to the Backup Operators group of the SMB service.

The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#backup_operators NetappActiveDirectory#backup_operators}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#deletion_policy NetappActiveDirectory#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#description NetappActiveDirectory#description}

---

##### `encryptDcConnections`<sup>Optional</sup> <a name="encryptDcConnections" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.encryptDcConnections"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#encrypt_dc_connections NetappActiveDirectory#encrypt_dc_connections}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#id NetappActiveDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kdcHostname`<sup>Optional</sup> <a name="kdcHostname" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.kdcHostname"></a>

- *Type:* java.lang.String

Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only required for volumes using kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#kdc_hostname NetappActiveDirectory#kdc_hostname}

---

##### `kdcIp`<sup>Optional</sup> <a name="kdcIp" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.kdcIp"></a>

- *Type:* java.lang.String

IP address of the Active Directory server used as Kerberos Key Distribution Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#kdc_ip NetappActiveDirectory#kdc_ip}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#labels NetappActiveDirectory#labels}

---

##### `ldapSigning`<sup>Optional</sup> <a name="ldapSigning" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.ldapSigning"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether or not the LDAP traffic needs to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#ldap_signing NetappActiveDirectory#ldap_signing}

---

##### `nfsUsersWithLdap`<sup>Optional</sup> <a name="nfsUsersWithLdap" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.nfsUsersWithLdap"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.

This option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#nfs_users_with_ldap NetappActiveDirectory#nfs_users_with_ldap}

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.organizationalUnit"></a>

- *Type:* java.lang.String

Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.

Defaults to 'CN=Computers' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#organizational_unit NetappActiveDirectory#organizational_unit}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#project NetappActiveDirectory#project}.

---

##### `securityOperators`<sup>Optional</sup> <a name="securityOperators" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.securityOperators"></a>

- *Type:* java.util.List<java.lang.String>

Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#security_operators NetappActiveDirectory#security_operators}

---

##### `site`<sup>Optional</sup> <a name="site" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.site"></a>

- *Type:* java.lang.String

Specifies an Active Directory site to manage domain controller selection.

Use when Active Directory domain controllers in multiple regions are configured. Defaults to 'Default-First-Site-Name' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#site NetappActiveDirectory#site}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#timeouts NetappActiveDirectory#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetAdministrators">resetAdministrators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetAesEncryption">resetAesEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetBackupOperators">resetBackupOperators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetEncryptDcConnections">resetEncryptDcConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetKdcHostname">resetKdcHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetKdcIp">resetKdcIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetLdapSigning">resetLdapSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetNfsUsersWithLdap">resetNfsUsersWithLdap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetSecurityOperators">resetSecurityOperators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetSite">resetSite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.putTimeouts"></a>

```java
public void putTimeouts(NetappActiveDirectoryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a>

---

##### `resetAdministrators` <a name="resetAdministrators" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetAdministrators"></a>

```java
public void resetAdministrators()
```

##### `resetAesEncryption` <a name="resetAesEncryption" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetAesEncryption"></a>

```java
public void resetAesEncryption()
```

##### `resetBackupOperators` <a name="resetBackupOperators" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetBackupOperators"></a>

```java
public void resetBackupOperators()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptDcConnections` <a name="resetEncryptDcConnections" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetEncryptDcConnections"></a>

```java
public void resetEncryptDcConnections()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetId"></a>

```java
public void resetId()
```

##### `resetKdcHostname` <a name="resetKdcHostname" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetKdcHostname"></a>

```java
public void resetKdcHostname()
```

##### `resetKdcIp` <a name="resetKdcIp" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetKdcIp"></a>

```java
public void resetKdcIp()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLdapSigning` <a name="resetLdapSigning" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetLdapSigning"></a>

```java
public void resetLdapSigning()
```

##### `resetNfsUsersWithLdap` <a name="resetNfsUsersWithLdap" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetNfsUsersWithLdap"></a>

```java
public void resetNfsUsersWithLdap()
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetOrganizationalUnit"></a>

```java
public void resetOrganizationalUnit()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetProject"></a>

```java
public void resetProject()
```

##### `resetSecurityOperators` <a name="resetSecurityOperators" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetSecurityOperators"></a>

```java
public void resetSecurityOperators()
```

##### `resetSite` <a name="resetSite" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetSite"></a>

```java
public void resetSite()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetappActiveDirectory resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.isConstruct"></a>

```java
import io.cdktn.providers.google.netapp_active_directory.NetappActiveDirectory;

NetappActiveDirectory.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformElement"></a>

```java
import io.cdktn.providers.google.netapp_active_directory.NetappActiveDirectory;

NetappActiveDirectory.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformResource"></a>

```java
import io.cdktn.providers.google.netapp_active_directory.NetappActiveDirectory;

NetappActiveDirectory.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.netapp_active_directory.NetappActiveDirectory;

NetappActiveDirectory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetappActiveDirectory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetappActiveDirectory resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetappActiveDirectory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetappActiveDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetappActiveDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.stateDetails">stateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference">NetappActiveDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.administratorsInput">administratorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.aesEncryptionInput">aesEncryptionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.backupOperatorsInput">backupOperatorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dnsInput">dnsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.encryptDcConnectionsInput">encryptDcConnectionsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcHostnameInput">kdcHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcIpInput">kdcIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.ldapSigningInput">ldapSigningInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.netBiosPrefixInput">netBiosPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nfsUsersWithLdapInput">nfsUsersWithLdapInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.securityOperatorsInput">securityOperatorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.siteInput">siteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.administrators">administrators</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.aesEncryption">aesEncryption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.backupOperators">backupOperators</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dns">dns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.encryptDcConnections">encryptDcConnections</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcHostname">kdcHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcIp">kdcIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.ldapSigning">ldapSigning</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.netBiosPrefix">netBiosPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nfsUsersWithLdap">nfsUsersWithLdap</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.securityOperators">securityOperators</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.site">site</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.stateDetails"></a>

```java
public java.lang.String getStateDetails();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.timeouts"></a>

```java
public NetappActiveDirectoryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference">NetappActiveDirectoryTimeoutsOutputReference</a>

---

##### `administratorsInput`<sup>Optional</sup> <a name="administratorsInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.administratorsInput"></a>

```java
public java.util.List<java.lang.String> getAdministratorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `aesEncryptionInput`<sup>Optional</sup> <a name="aesEncryptionInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.aesEncryptionInput"></a>

```java
public java.lang.Boolean|IResolvable getAesEncryptionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `backupOperatorsInput`<sup>Optional</sup> <a name="backupOperatorsInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.backupOperatorsInput"></a>

```java
public java.util.List<java.lang.String> getBackupOperatorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dnsInput"></a>

```java
public java.lang.String getDnsInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `encryptDcConnectionsInput`<sup>Optional</sup> <a name="encryptDcConnectionsInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.encryptDcConnectionsInput"></a>

```java
public java.lang.Boolean|IResolvable getEncryptDcConnectionsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kdcHostnameInput`<sup>Optional</sup> <a name="kdcHostnameInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcHostnameInput"></a>

```java
public java.lang.String getKdcHostnameInput();
```

- *Type:* java.lang.String

---

##### `kdcIpInput`<sup>Optional</sup> <a name="kdcIpInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcIpInput"></a>

```java
public java.lang.String getKdcIpInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ldapSigningInput`<sup>Optional</sup> <a name="ldapSigningInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.ldapSigningInput"></a>

```java
public java.lang.Boolean|IResolvable getLdapSigningInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `netBiosPrefixInput`<sup>Optional</sup> <a name="netBiosPrefixInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.netBiosPrefixInput"></a>

```java
public java.lang.String getNetBiosPrefixInput();
```

- *Type:* java.lang.String

---

##### `nfsUsersWithLdapInput`<sup>Optional</sup> <a name="nfsUsersWithLdapInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nfsUsersWithLdapInput"></a>

```java
public java.lang.Boolean|IResolvable getNfsUsersWithLdapInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.organizationalUnitInput"></a>

```java
public java.lang.String getOrganizationalUnitInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `securityOperatorsInput`<sup>Optional</sup> <a name="securityOperatorsInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.securityOperatorsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityOperatorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `siteInput`<sup>Optional</sup> <a name="siteInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.siteInput"></a>

```java
public java.lang.String getSiteInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.timeoutsInput"></a>

```java
public IResolvable|NetappActiveDirectoryTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `administrators`<sup>Required</sup> <a name="administrators" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.administrators"></a>

```java
public java.util.List<java.lang.String> getAdministrators();
```

- *Type:* java.util.List<java.lang.String>

---

##### `aesEncryption`<sup>Required</sup> <a name="aesEncryption" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.aesEncryption"></a>

```java
public java.lang.Boolean|IResolvable getAesEncryption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `backupOperators`<sup>Required</sup> <a name="backupOperators" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.backupOperators"></a>

```java
public java.util.List<java.lang.String> getBackupOperators();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dns"></a>

```java
public java.lang.String getDns();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `encryptDcConnections`<sup>Required</sup> <a name="encryptDcConnections" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.encryptDcConnections"></a>

```java
public java.lang.Boolean|IResolvable getEncryptDcConnections();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kdcHostname`<sup>Required</sup> <a name="kdcHostname" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcHostname"></a>

```java
public java.lang.String getKdcHostname();
```

- *Type:* java.lang.String

---

##### `kdcIp`<sup>Required</sup> <a name="kdcIp" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcIp"></a>

```java
public java.lang.String getKdcIp();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ldapSigning`<sup>Required</sup> <a name="ldapSigning" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.ldapSigning"></a>

```java
public java.lang.Boolean|IResolvable getLdapSigning();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `netBiosPrefix`<sup>Required</sup> <a name="netBiosPrefix" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.netBiosPrefix"></a>

```java
public java.lang.String getNetBiosPrefix();
```

- *Type:* java.lang.String

---

##### `nfsUsersWithLdap`<sup>Required</sup> <a name="nfsUsersWithLdap" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nfsUsersWithLdap"></a>

```java
public java.lang.Boolean|IResolvable getNfsUsersWithLdap();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `securityOperators`<sup>Required</sup> <a name="securityOperators" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.securityOperators"></a>

```java
public java.util.List<java.lang.String> getSecurityOperators();
```

- *Type:* java.util.List<java.lang.String>

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.site"></a>

```java
public java.lang.String getSite();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectory.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetappActiveDirectoryConfig <a name="NetappActiveDirectoryConfig" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.Initializer"></a>

```java
import io.cdktn.providers.google.netapp_active_directory.NetappActiveDirectoryConfig;

NetappActiveDirectoryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dns(java.lang.String)
    .domain(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .netBiosPrefix(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .administrators(java.util.List<java.lang.String>)
//  .aesEncryption(java.lang.Boolean|IResolvable)
//  .backupOperators(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .encryptDcConnections(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .kdcHostname(java.lang.String)
//  .kdcIp(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .ldapSigning(java.lang.Boolean|IResolvable)
//  .nfsUsersWithLdap(java.lang.Boolean|IResolvable)
//  .organizationalUnit(java.lang.String)
//  .project(java.lang.String)
//  .securityOperators(java.util.List<java.lang.String>)
//  .site(java.lang.String)
//  .timeouts(NetappActiveDirectoryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.dns">dns</a></code> | <code>java.lang.String</code> | Comma separated list of DNS server IP addresses for the Active Directory domain. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Fully qualified domain name for the Active Directory domain. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.location">location</a></code> | <code>java.lang.String</code> | Name of the region for the policy to apply to. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Active Directory pool. Needs to be unique per location. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.netBiosPrefix">netBiosPrefix</a></code> | <code>java.lang.String</code> | NetBIOS name prefix of the server to be created. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.password">password</a></code> | <code>java.lang.String</code> | Password for specified username. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.username">username</a></code> | <code>java.lang.String</code> | Username for the Active Directory account with permissions to create the compute account within the specified organizational unit. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.administrators">administrators</a></code> | <code>java.util.List<java.lang.String></code> | Domain user accounts to be added to the local Administrators group of the SMB service. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.aesEncryption">aesEncryption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.backupOperators">backupOperators</a></code> | <code>java.util.List<java.lang.String></code> | Domain user/group accounts to be added to the Backup Operators group of the SMB service. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.encryptDcConnections">encryptDcConnections</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#id NetappActiveDirectory#id}. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.kdcHostname">kdcHostname</a></code> | <code>java.lang.String</code> | Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only required for volumes using kerberized NFSv4.1. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.kdcIp">kdcIp</a></code> | <code>java.lang.String</code> | IP address of the Active Directory server used as Kerberos Key Distribution Center. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.ldapSigning">ldapSigning</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether or not the LDAP traffic needs to be signed. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.nfsUsersWithLdap">nfsUsersWithLdap</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#project NetappActiveDirectory#project}. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.securityOperators">securityOperators</a></code> | <code>java.util.List<java.lang.String></code> | Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.site">site</a></code> | <code>java.lang.String</code> | Specifies an Active Directory site to manage domain controller selection. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.dns"></a>

```java
public java.lang.String getDns();
```

- *Type:* java.lang.String

Comma separated list of DNS server IP addresses for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#dns NetappActiveDirectory#dns}

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Fully qualified domain name for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#domain NetappActiveDirectory#domain}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Name of the region for the policy to apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#location NetappActiveDirectory#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the Active Directory pool. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#name NetappActiveDirectory#name}

---

##### `netBiosPrefix`<sup>Required</sup> <a name="netBiosPrefix" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.netBiosPrefix"></a>

```java
public java.lang.String getNetBiosPrefix();
```

- *Type:* java.lang.String

NetBIOS name prefix of the server to be created.

A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
'\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#net_bios_prefix NetappActiveDirectory#net_bios_prefix}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for specified username.

Note - Manual changes done to the password will not be detected. Terraform will not re-apply the password, unless you use a new password in Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#password NetappActiveDirectory#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#username NetappActiveDirectory#username}

---

##### `administrators`<sup>Optional</sup> <a name="administrators" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.administrators"></a>

```java
public java.util.List<java.lang.String> getAdministrators();
```

- *Type:* java.util.List<java.lang.String>

Domain user accounts to be added to the local Administrators group of the SMB service.

Comma-separated list of domain users or groups. The Domain Admin group is automatically added when the service joins your domain as a hidden group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#administrators NetappActiveDirectory#administrators}

---

##### `aesEncryption`<sup>Optional</sup> <a name="aesEncryption" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.aesEncryption"></a>

```java
public java.lang.Boolean|IResolvable getAesEncryption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#aes_encryption NetappActiveDirectory#aes_encryption}

---

##### `backupOperators`<sup>Optional</sup> <a name="backupOperators" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.backupOperators"></a>

```java
public java.util.List<java.lang.String> getBackupOperators();
```

- *Type:* java.util.List<java.lang.String>

Domain user/group accounts to be added to the Backup Operators group of the SMB service.

The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#backup_operators NetappActiveDirectory#backup_operators}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#deletion_policy NetappActiveDirectory#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#description NetappActiveDirectory#description}

---

##### `encryptDcConnections`<sup>Optional</sup> <a name="encryptDcConnections" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.encryptDcConnections"></a>

```java
public java.lang.Boolean|IResolvable getEncryptDcConnections();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#encrypt_dc_connections NetappActiveDirectory#encrypt_dc_connections}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#id NetappActiveDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kdcHostname`<sup>Optional</sup> <a name="kdcHostname" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.kdcHostname"></a>

```java
public java.lang.String getKdcHostname();
```

- *Type:* java.lang.String

Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only required for volumes using kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#kdc_hostname NetappActiveDirectory#kdc_hostname}

---

##### `kdcIp`<sup>Optional</sup> <a name="kdcIp" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.kdcIp"></a>

```java
public java.lang.String getKdcIp();
```

- *Type:* java.lang.String

IP address of the Active Directory server used as Kerberos Key Distribution Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#kdc_ip NetappActiveDirectory#kdc_ip}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#labels NetappActiveDirectory#labels}

---

##### `ldapSigning`<sup>Optional</sup> <a name="ldapSigning" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.ldapSigning"></a>

```java
public java.lang.Boolean|IResolvable getLdapSigning();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether or not the LDAP traffic needs to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#ldap_signing NetappActiveDirectory#ldap_signing}

---

##### `nfsUsersWithLdap`<sup>Optional</sup> <a name="nfsUsersWithLdap" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.nfsUsersWithLdap"></a>

```java
public java.lang.Boolean|IResolvable getNfsUsersWithLdap();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.

This option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#nfs_users_with_ldap NetappActiveDirectory#nfs_users_with_ldap}

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.

Defaults to 'CN=Computers' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#organizational_unit NetappActiveDirectory#organizational_unit}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#project NetappActiveDirectory#project}.

---

##### `securityOperators`<sup>Optional</sup> <a name="securityOperators" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.securityOperators"></a>

```java
public java.util.List<java.lang.String> getSecurityOperators();
```

- *Type:* java.util.List<java.lang.String>

Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#security_operators NetappActiveDirectory#security_operators}

---

##### `site`<sup>Optional</sup> <a name="site" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.site"></a>

```java
public java.lang.String getSite();
```

- *Type:* java.lang.String

Specifies an Active Directory site to manage domain controller selection.

Use when Active Directory domain controllers in multiple regions are configured. Defaults to 'Default-First-Site-Name' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#site NetappActiveDirectory#site}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.timeouts"></a>

```java
public NetappActiveDirectoryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#timeouts NetappActiveDirectory#timeouts}

---

### NetappActiveDirectoryTimeouts <a name="NetappActiveDirectoryTimeouts" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.netapp_active_directory.NetappActiveDirectoryTimeouts;

NetappActiveDirectoryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#create NetappActiveDirectory#create}. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#delete NetappActiveDirectory#delete}. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#update NetappActiveDirectory#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#create NetappActiveDirectory#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#delete NetappActiveDirectory#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_active_directory#update NetappActiveDirectory#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappActiveDirectoryTimeoutsOutputReference <a name="NetappActiveDirectoryTimeoutsOutputReference" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.netapp_active_directory.NetappActiveDirectoryTimeoutsOutputReference;

new NetappActiveDirectoryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetappActiveDirectoryTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a>

---



